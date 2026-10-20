import subprocess
import os

logos = [
    {
        "file": "/root/wedding-invitation/public/brand/concept-wa-royal-ligature.svg",
        "out": "/root/wedding-invitation/public/brand/preview-wa-royal-ligature.png",
        "name": "Concept WA: Royal Interlocking Monogram",
        "bg": "#121417",
        "card_bg": "#1E232A",
        "text_color": "#FBF9F5"
    },
    {
        "file": "/root/wedding-invitation/public/brand/concept-wb-infinity-ring.svg",
        "out": "/root/wedding-invitation/public/brand/preview-wb-infinity-ring.png",
        "name": "Concept WB: Infinity Harmony Ring",
        "bg": "#121417",
        "card_bg": "#1E232A",
        "text_color": "#FBF9F5"
    },
    {
        "file": "/root/wedding-invitation/public/brand/concept-wc-heritage-seal.svg",
        "out": "/root/wedding-invitation/public/brand/preview-wc-heritage-seal.png",
        "name": "Concept WC: Classical Heritage Seal",
        "bg": "#121417",
        "card_bg": "#1E232A",
        "text_color": "#FBF9F5"
    }
]

for item in logos:
    with open(item["file"], "r", encoding="utf-8") as f:
        svg_content = f.read()
    
    # Invert #1E232A to #FAFAFA for high contrast dark card preview
    svg_dark = svg_content.replace('fill="#1E232A"', 'fill="#FAFAFA"')
    inner_svg = svg_dark.split(">", 1)[1].rsplit("</svg>", 1)[0]
    
    board = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600" fill="none">
      <rect width="600" height="600" fill="{item['bg']}"/>
      <rect x="50" y="50" width="500" height="500" rx="36" fill="{item['card_bg']}" stroke="#C5A880" stroke-opacity="0.25" stroke-width="1.5"/>
      
      <!-- Logo Marks Layer (Centered 256x256 inside card) -->
      <g transform="translate(172, 140)">
        {inner_svg}
      </g>
      
      <!-- Label -->
      <text x="300" y="460" font-family="'Cormorant Garamond', Georgia, serif" font-size="22" font-weight="700" fill="{item['text_color']}" text-anchor="middle" letter-spacing="0.05em">{item['name']}</text>
      <text x="300" y="490" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="500" fill="#C5A880" text-anchor="middle" letter-spacing="0.12em">WEDDING MONOGRAM · PURE VECTOR SVG</text>
    </svg>"""
    
    board_path = item["out"].replace(".png", ".svg")
    with open(board_path, "w", encoding="utf-8") as f:
        f.write(board)
    
    cmd = [
        "python3", "/root/.hermes/skills/logo-design/scripts/render_png.py",
        board_path, "--size", "600", "-o", item["out"]
    ]
    subprocess.run(cmd, check=True)
    print("Generated:", item["out"])
