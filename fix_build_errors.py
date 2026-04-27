import os
import re

def fix_jsx_errors(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.jsx') or file.endswith('.tsx'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # 1. Remove double Image imports
                # Look for multiple occurrences of 'import Image from'
                lines = content.split('\n')
                new_lines = []
                image_import_found = False
                for line in lines:
                    if 'import Image from "next/image"' in line or "import Image from 'next/image'" in line:
                        if image_import_found:
                            continue # skip second import
                        image_import_found = True
                    new_lines.append(line)
                
                new_content = '\n'.join(new_lines)
                
                # 2. Replace class="..." with className="..." inside JSX tags
                # This regex is a bit simplistic but should catch most div/span/etc tags
                new_content = re.sub(r'(\s)class=([{"\'])', r'\1className=\2', new_content)

                if content != new_content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Fixed {path}")

fix_jsx_errors('c:\\Users\\yashs\\Downloads\\yash-soni-official-main\\yash-soni-official-main\\app')
