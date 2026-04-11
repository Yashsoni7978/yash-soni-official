import os
import re

app_dir = r"c:\Users\yashs\Downloads\yash-soni-official-main\yash-soni-official-main\app"

def audit_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    errors = []
    
    # 1. Check lucide-react imports
    lucide_match = re.search(r'import\s*\{(.*?)\}\s*from\s*["\']lucide-react["\']', content, re.DOTALL)
    if lucide_match:
        imports = {i.strip() for i in lucide_match.group(1).split(',')}
        # Usages in icon: IconName
        usages = set(re.findall(r'icon:\s*([A-Z][a-zA-Z0-9]*)', content))
        # Usages in <iconName
        usages.update(set(re.findall(r'<([A-Z][a-zA-Z0-9]*)', content)))
        
        # Exceptions (standard React/Framer/Next components)
        exceptions = {"AnimatePresence", "Link", "Image", "motion", "Reveal", "ScrollReveal", "GoldText", "FAQItem", "G", "Counter", "Head", "Script", "FunStat", "StatCard", "ServiceCard", "ServicePill", "VenueCard", "TestimonialCard"}
        
        missing = [u for u in usages if u not in imports and u not in exceptions]
        if missing:
            errors.append(f"Missing lucide imports: {missing}")

    # 2. Check for 'class=' (should be 'className=')
    if 'class="' in content:
        # Ignore false positives in strings like "border-class" or something, but " class=" is usually an error
        if re.search(r'\sclass="', content):
            errors.append("Contains 'class=' instead of 'className='")

    # 3. Check for Duplicate Component Definitions
    # This is rough but catches const Counter = ... used twice
    const_defs = re.findall(r'const\s+([A-Z][a-zA-Z0-9]*)\s*=', content)
    duplicates = [d for d in set(const_defs) if const_defs.count(d) > 1]
    if duplicates:
        errors.append(f"Duplicate component/const definitions: {duplicates}")

    # 4. Check for Placeholder "Jaipur" remnants in title/hero of national pages
    # Only if not in /anchor-in-jaipur or similar
    rel_path = os.path.relpath(file_path, app_dir)
    if 'anchor-in-' in rel_path and 'anchor-in-jaipur' not in rel_path:
        # Check if <h1> contains "Jaipur"
        h1_match = re.search(r'<h1>(.*?)</h1>', content, re.DOTALL | re.IGNORECASE)
        if h1_match and 'Jaipur' in h1_match.group(1):
            errors.append("H1 contains 'Jaipur' in a non-Jaipur page")
        
        # Check if city name in hero (GoldText etc) is Jaipur
        hero_match = re.search(r'<span>ANDAMAN</span>', content) # Example check for parent
        # More general: look for "Best Anchor in Jaipur" in metadata/titles
        if 'Best Anchor in Jaipur' in content:
             # This might be in related links, so we check if it's in the first 100 lines (metadata/hero)
             first_lines = "\n".join(content.splitlines()[:150])
             if 'Best Anchor in Jaipur' in first_lines:
                 errors.append("Subheading/Hero might contain 'Best Anchor in Jaipur' as primary label")

    return errors

results = {}
for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file.endswith('.jsx'):
            full_path = os.path.join(root, file)
            file_errors = audit_file(full_path)
            if file_errors:
                results[full_path] = file_errors

if not results:
    print("NO ERRORS FOUND")
else:
    for path, errs in results.items():
        print(f"\n{path}:")
        for e in errs:
            print(f"  - {e}")
