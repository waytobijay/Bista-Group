#!/usr/bin/env python3
"""
Bista Group local dev server.
Serves all static files AND handles image uploads to assets/images/.

Usage:
    python server.py

Then open: http://localhost:8080
"""
import http.server, os, re, time, json
from pathlib import Path

PORT = 8080
UPLOAD_DIR = Path('assets/images')
ALLOWED_EXT = {'.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'}

class Handler(http.server.SimpleHTTPRequestHandler):

    def do_POST(self):
        if self.path not in ('/upload.php', '/upload.php/'):
            self.send_error(404)
            return
        ct = self.headers.get('Content-Type', '')
        if 'multipart/form-data' not in ct:
            return self._json(400, {'error': 'Expected multipart/form-data'})

        # Parse multipart manually (avoids deprecated cgi module on Python 3.13+)
        boundary = ct.split('boundary=')[-1].strip().encode()
        length   = int(self.headers.get('Content-Length', 0))
        body     = self.rfile.read(length)

        filename, section, filedata = self._parse_multipart(body, boundary)

        if not filename or not filedata:
            return self._json(400, {'error': 'No image received'})

        ext = Path(filename).suffix.lower()
        if ext not in ALLOWED_EXT:
            return self._json(400, {'error': 'File type not allowed'})

        section  = re.sub(r'[^a-z0-9_-]', '', (section or 'upload').lower()) or 'upload'
        outname  = f'{section}_{int(time.time())}{ext}'
        UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
        (UPLOAD_DIR / outname).write_bytes(filedata)

        self._json(200, {'url': f'assets/images/{outname}', 'filename': outname})

    def _parse_multipart(self, body, boundary):
        filename = section = None
        filedata = None
        delim = b'--' + boundary
        parts = body.split(delim)
        for part in parts:
            if b'Content-Disposition' not in part:
                continue
            header, _, data = part.partition(b'\r\n\r\n')
            data = data.rstrip(b'\r\n')
            header_str = header.decode('utf-8', errors='replace')
            name_match = re.search(r'name="([^"]+)"', header_str)
            name = name_match.group(1) if name_match else ''
            if name == 'image':
                fn_match = re.search(r'filename="([^"]+)"', header_str)
                filename = fn_match.group(1) if fn_match else 'upload.bin'
                filedata = data
            elif name == 'section':
                section = data.decode('utf-8', errors='replace')
        return filename, section, filedata

    def _json(self, code, data):
        body = json.dumps(data).encode()
        self.send_response(code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', len(body))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, fmt, *args):
        print(f'  {fmt % args}')

print(f'\n  Bista Group Dev Server')
print(f'  Open: http://localhost:{PORT}\n')
http.server.test(HandlerClass=Handler, port=PORT, bind='127.0.0.1')
