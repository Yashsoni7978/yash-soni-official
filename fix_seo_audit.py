import os
import re

def fix_seo_issues(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.jsx') or file.endswith('.tsx'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # 1. Replace inline gold gradient style with the class
                # Regex to match style={{ backgroundImage: "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)" ... }}
                pattern = r'style=\{\{\s*backgroundImage:\s*["\']linear-gradient\(135deg,\s*#BF953F,\s*#FCF6BA,\s*#B38728,\s*#FBF5B7,\s*#AA771C\)["\'](?:,\s*[^}]*)?\}\}'
                
                def replace_style(match):
                    # Check if there's a className already
                    # This is tricky without a full parser, but we can try to find the nearest className
                    return 'className="gold-gradient-text"' # Fallback, might need manual adjustment if className exists

                # More robust: just replace the style attribute with an empty string and add the class to the existing className
                # Or for simplicity in this specific codebase where I know the pattern:
                new_content = re.sub(pattern, '', content)
                # Now add gold-gradient-text to any tag that had that style
                # Actually, many tags have className="..." already.
                
                # Let's try a different approach: replace the style attribute and insert the class into className
                # Tag pattern: <tagName ... className="..." ... style={{...}} ... >
                
                # For this specific codebase, most occurrences are like:
                # <span className="..." style={{ backgroundImage: "..." }}>
                new_content = re.sub(r'(className=["\'])([^"\']*)(["\']\s*)' + pattern, r'\1\2 gold-gradient-text\3', content)
                # And for those without className:
                new_content = re.sub(r'(<[a-zA-Z0-9]+\s*)' + pattern, r'\1className="gold-gradient-text" ', new_content)

                # 2. Obfuscate info@yashsoni.in
                new_content = new_content.replace('info@yashsoni.in', 'info [at] yashsoni [dot] in')
                # Remove mailto: links
                new_content = re.sub(r'href="mailto:info \[at\] yashsoni \[dot\] in"', r'#', new_content)
                new_content = re.sub(r'href={["\']mailto:info \[at\] yashsoni \[dot\] in["\']}', r'#', new_content)

                if content != new_content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Fixed SEO issues in {path}")

fix_seo_issues('c:\\Users\\yashs\\Downloads\\yash-soni-official-main\\yash-soni-official-main\\app')
