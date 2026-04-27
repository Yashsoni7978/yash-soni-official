import os

def fix_malformed_href(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.jsx') or file.endswith('.tsx'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Fix <a # className="..."> -> <a href="#" className="...">
                new_content = content.replace('<a # ', '<a href="#" ')

                if content != new_content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Fixed malformed href in {path}")

fix_malformed_href('c:\\Users\\yashs\\Downloads\\yash-soni-official-main\\yash-soni-official-main\\app')
