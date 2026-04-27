import os
import re

def replace_imgs(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.jsx') or file.endswith('.tsx'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Simple replacement for common pattern
                new_content = re.sub(r'<img\s+([^>]+)>', r'<Image \1 />', content)
                
                # Fix common attributes
                new_content = new_content.replace('loading="eager"', 'priority')
                new_content = new_content.replace('loading="lazy"', '')
                
                # Check if Image is imported
                if '<Image ' in new_content and 'import Image from "next/image"' not in new_content:
                    # Add import after "use client" or at the top
                    if '"use client"' in new_content:
                        new_content = new_content.replace('"use client";', '"use client";\nimport Image from "next/image";')
                    elif "'use client'" in new_content:
                        new_content = new_content.replace("'use client';", "'use client';\nimport Image from \"next/image\";")
                    else:
                        new_content = 'import Image from "next/image";\n' + new_content

                if content != new_content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated {path}")

replace_imgs('c:\\Users\\yashs\\Downloads\\yash-soni-official-main\\yash-soni-official-main\\app')
