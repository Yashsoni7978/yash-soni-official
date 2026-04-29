import os
import re

def cleanup_file(file_path, names_to_check):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified = False
    
    # Match lucide-react import
    # import { A, B, C } from "lucide-react"
    pattern = r'(import\s+\{([^}]+)\}\s+from\s+["\']lucide-react["\'])'
    match = re.search(pattern, content)
    
    if match:
        full_import_line = match.group(1)
        import_list_str = match.group(2)
        imports = [i.strip() for i in import_list_str.split(',')]
        
        new_imports = []
        for name in imports:
            if not name: continue
            if name in names_to_check:
                # Check if it's used in the file (excluding the import itself)
                occurrences = len(re.findall(r'\b' + name + r'\b', content))
                if occurrences == 1:
                    print(f"Removing {name} from {file_path}")
                    modified = True
                    continue
            new_imports.append(name)
            
        if modified:
            if not new_imports:
                # Remove the whole line
                content = content.replace(full_import_line + ';', '')
                content = content.replace(full_import_line, '')
            else:
                new_import_list_str = ", ".join(new_imports)
                new_full_import_line = f'import {{ {new_import_list_str} }} from "lucide-react"'
                content = content.replace(full_import_line, new_full_import_line)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)

def walk_and_cleanup(root_dir):
    names = ['Flower2', 'Globe']
    for root, dirs, files in os.walk(root_dir):
        if '.next' in root or 'node_modules' in root: continue
        for file in files:
            if file.endswith('.jsx') or file.endswith('.tsx'):
                cleanup_file(os.path.join(root, file), names)

if __name__ == "__main__":
    walk_and_cleanup('app')
