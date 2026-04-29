import os
import re

def check_unused_imports(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    issues = []
    
    # 1. Check Lucide Icons
    lucide_match = re.search(r'import\s+\{([^}]+)\}\s+from\s+["\']lucide-react["\']', content)
    if lucide_match:
        icons = [i.strip() for i in lucide_match.group(1).split(',')]
        for icon in icons:
            if not icon: continue
            # Count occurrences. 1 means only in the import statement
            if len(re.findall(r'\b' + icon + r'\b', content)) == 1:
                issues.append(f"Unused Icon: {icon}")
    
    # 2. Check React Hooks
    react_match = re.search(r'import\s+\{([^}]+)\}\s+from\s+["\']react["\']', content)
    if react_match:
        hooks = [h.strip() for h in react_match.group(1).split(',')]
        for hook in hooks:
            if not hook: continue
            if len(re.findall(r'\b' + hook + r'\b', content)) == 1:
                issues.append(f"Unused Hook: {hook}")
                
    # 3. Check Framer Motion
    motion_match = re.search(r'import\s+\{([^}]+)\}\s+from\s+["\']framer-motion["\']', content)
    if motion_match:
        items = [i.strip() for i in motion_match.group(1).split(',')]
        for item in items:
            if not item: continue
            if len(re.findall(r'\b' + item + r'\b', content)) == 1:
                issues.append(f"Unused Motion: {item}")

    return issues

def audit_directory(root_dir):
    all_issues = {}
    for root, dirs, files in os.walk(root_dir):
        if '.next' in root or 'node_modules' in root: continue
        for file in files:
            if file.endswith('.jsx') or file.endswith('.tsx'):
                path = os.path.join(root, file)
                issues = check_unused_imports(path)
                if issues:
                    all_issues[path] = issues
    return all_issues

if __name__ == "__main__":
    results = audit_directory('app')
    for path, issues in results.items():
        print(f"File: {path}")
        for issue in issues:
            print(f"  - {issue}")
