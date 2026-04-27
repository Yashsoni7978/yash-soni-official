import os

def fix_jsx_closing(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.jsx') or file.endswith('.tsx'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Replace / /> with />
                new_content = content.replace('/ />', '/>')

                if content != new_content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Fixed closing tag in {path}")

fix_jsx_closing('c:\\Users\\yashs\\Downloads\\yash-soni-official-main\\yash-soni-official-main\\app')
