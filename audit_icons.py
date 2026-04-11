import os
import re

app_dir = r"c:\Users\yashs\Downloads\yash-soni-official-main\yash-soni-official-main\app"

def audit_icons(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find lucide-react imports
    import_match = re.search(r'import\s*\{(.*?)\}\s*from\s*["\']lucide-react["\']', content, re.DOTALL)
    if not import_match:
        return []
    
    imports = [i.strip() for i in import_match.group(1).split(',')]
    imports = [i for i in imports if i]
    
    # Find icon: Usage
    # Look for icon: IconName
    usages = re.findall(r'icon:\s*([A-Z][a-zA-Z0-9]*)', content)
    
    # Also look for <IconName in JSX (though less common in these templates)
    # usages += re.findall(r'<([A-Z][a-zA-Z0-9]*)', content)
    
    # Filter out common non-icon components if any
    unique_usages = set(usages)
    
    missing = [u for u in unique_usages if u not in imports]
    return missing

results = {}
for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file == 'page.jsx':
            full_path = os.path.join(root, file)
            missing = audit_icons(full_path)
            if missing:
                results[full_path] = missing

for path, missing in results.items():
    print(f"{path}: {missing}")
