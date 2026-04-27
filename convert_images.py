import os
from PIL import Image
import glob

source_dir = r"C:\Users\yashs\.gemini\antigravity\brain\fe7762ca-48fa-4b4a-9532-e71a4cac3d3d"
dest_dir = r"c:\Users\yashs\Downloads\yash-soni-official-main\yash-soni-official-main\public\premium_events"

if not os.path.exists(dest_dir):
    os.makedirs(dest_dir)

# Find all pngs in source dir
png_files = glob.glob(os.path.join(source_dir, "*.png"))

for file_path in png_files:
    filename = os.path.basename(file_path)
    # Remove the timestamp part for cleaner names
    # e.g. luxury_wedding_mandap_1777297188880.png -> luxury_wedding_mandap
    base_name = "_".join(filename.split("_")[:-1])
    if not base_name:
        base_name = filename.split(".")[0]
        
    dest_path = os.path.join(dest_dir, f"{base_name}.webp")
    
    try:
        with Image.open(file_path) as img:
            img.save(dest_path, 'webp', quality=85)
        print(f"Successfully converted and moved: {base_name}.webp")
    except Exception as e:
        print(f"Error processing {filename}: {e}")

