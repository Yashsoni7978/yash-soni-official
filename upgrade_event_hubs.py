import os
import re

pages = [
  {"route": "event-planning-jaipur", "component": "EventPlanningJaipur", "category": "wedding", "headline": "Architects of Elegance", "subheadline": "The premier event planning company in Jaipur", "desc": "Jaipur's top event planning company. We execute high-end corporate events, private galas, and VIP celebrations across Rajasthan with unmatched precision.", "keyword": "Event Planning Company Jaipur"},
  {"route": "event-management-jaipur", "component": "EventManagementJaipur", "category": "wedding", "headline": "Flawless Event Execution", "subheadline": "End-to-end event management in Jaipur", "desc": "The best event management company in Jaipur. Specializing in VIP protocol, massive corporate summits, and luxury event production.", "keyword": "Event Management Company Jaipur"},
  {"route": "event-designing", "component": "EventDesigning", "category": "decor", "headline": "Bespoke Spatial Art", "subheadline": "Luxury wedding and event design in Jaipur", "desc": "Immersive event designing and luxury decor in Jaipur. We transform palaces and massive spaces into breathtaking visual masterpieces.", "keyword": "Wedding Decoration Design Jaipur"},
  {"route": "artist-management-jaipur", "component": "ArtistManagementJaipur", "category": "artist", "headline": "Curating Global Talent", "subheadline": "Premium artist and celebrity management", "desc": "Jaipur's leading artist management agency. We secure A-list celebrities, global performers, and elite live bands for luxury weddings and corporate galas.", "keyword": "Artist Management Agency Jaipur"},
  {"route": "luxury-wedding-planner-rajasthan", "component": "LuxuryWeddingPlannerRajasthan", "category": "wedding", "headline": "The Kings of Rajasthan", "subheadline": "Executing royal weddings across the desert state", "desc": "The ultimate luxury wedding planner in Rajasthan. We curate majestic destination weddings in Udaipur, Jodhpur, Jaisalmer, and Jaipur.", "keyword": "Luxury Wedding Planner Rajasthan"},
  {"route": "wedding-decoration-jaipur", "component": "WeddingDecorationJaipur", "category": "decor", "headline": "The Floral Symphony", "subheadline": "Bespoke luxury wedding decoration in Jaipur", "desc": "Transform your big day with the best wedding decoration in Jaipur. Specializing in floral mandaps, crystal stages, and ivory aesthetic designs.", "keyword": "Wedding Decoration Jaipur"},
  {"route": "sangeet-decoration-jaipur", "component": "SangeetDecorationJaipur", "category": "decor", "headline": "The Sangeet Spectacle", "subheadline": "High-octane Sangeet stage design & decoration", "desc": "Mind-blowing Sangeet decoration in Jaipur. We design massive crystal stages, dynamic lighting arrays, and mirror-work setups for elite celebrations.", "keyword": "Sangeet Decoration Jaipur"},
  {"route": "wedding-catering-jaipur", "component": "WeddingCateringJaipur", "category": "catering", "headline": "Culinary Masterpieces", "subheadline": "Elite wedding catering and mixology", "desc": "Premium luxury wedding catering in Jaipur. We curate global menus, molecular mixology, and royal Rajasthani feasts for HNI weddings.", "keyword": "Wedding Catering Jaipur"},
  {"route": "destination-wedding-planner-jaipur", "component": "DestinationWeddingPlannerJaipur", "category": "wedding", "headline": "Your Royal Destination", "subheadline": "The finest destination wedding planner in Jaipur", "desc": "Plan the perfect destination wedding in Jaipur. We handle heritage venue booking, guest logistics, and complete white-glove event production.", "keyword": "Destination Wedding Planner Jaipur"},
  {"route": "gala-dinner-event-planner", "component": "GalaDinnerEventPlanner", "category": "corporate", "headline": "The Elite Gala", "subheadline": "Curating high-end corporate gala dinners", "desc": "The best gala dinner event planner in Jaipur. We design and execute sophisticated corporate dinners and VIP networking events.", "keyword": "Gala Dinner Event Planner Jaipur"},
  {"route": "corporate-event-management-company", "component": "CorporateEventManagementCompany", "category": "corporate", "headline": "Corporate Precision", "subheadline": "India's premier corporate event management", "desc": "Leading corporate event management company in Jaipur. Handling summits, massive award nights, and international dealer meets.", "keyword": "Corporate Event Management Jaipur"},
  {"route": "haldi-decoration-jaipur", "component": "HaldiDecorationJaipur", "category": "decor", "headline": "The Haldi Canvas", "subheadline": "Vibrant and aesthetic Haldi decoration", "desc": "Beautiful Haldi decoration in Jaipur. We specialize in marigold themes, sun-kissed courtyards, and interactive floral setups.", "keyword": "Haldi Decoration Jaipur"},
  {"route": "wedding-venue-jaipur", "component": "WeddingVenueJaipur", "category": "wedding", "headline": "Unlocking The Palaces", "subheadline": "Exclusive access to Jaipur's heritage venues", "desc": "Find the ultimate luxury wedding venue in Jaipur. We provide exclusive access to Rambagh Palace, Fairmont, Taj Amer, and historic forts.", "keyword": "Wedding Venue Jaipur Guide"},
  {"route": "theme-wedding-organizer-india", "component": "ThemeWeddingOrganizerIndia", "category": "decor", "headline": "Immersive Themes", "subheadline": "The top theme wedding organizer in India", "desc": "India's premier theme wedding organizer. From vintage royal to modern minimalist, we bring your exact aesthetic vision to life.", "keyword": "Theme Wedding Organizer India"}
]

# Read the upgraded template
template_path = r"c:\Users\yashs\Downloads\yash-soni-official-main\yash-soni-official-main\app\wedding-planning-jaipur\page.jsx"
with open(template_path, 'r', encoding='utf-8') as f:
    template_content = f.read()

# Define category-specific replacements
categories = {
    "wedding": {
        "images": {
            "hero": "/premium_events/luxury_wedding_mandap.webp",
            "lookbook_1": "/premium_events/palace_wedding_decor.webp",
            "lookbook_2": "/premium_events/reception_stage_design.webp",
            "lookbook_3": "/premium_events/traditional_phoolon_ki_chaadar.webp",
            "gallery_1": "/premium_events/theme_wedding_setup.webp",
            "gallery_2": "/premium_events/celebrity_artist_stage.webp"
        },
        "faq_1_q": "What is the starting budget for a destination wedding in Jaipur?",
        "faq_1_a": "Luxury is bespoke, but an elite heritage wedding in Jaipur typically begins at ₹1.5 Cr, scaling with guest count, venue prestige, and decor opulence.",
        "packages_title": "Signature Tiers"
    },
    "decor": {
        "images": {
            "hero": "/premium_events/theme_wedding_setup.webp",
            "lookbook_1": "/premium_events/floral_mandap_close.webp",
            "lookbook_2": "/premium_events/haldi_ceremony_decor.webp",
            "lookbook_3": "/premium_events/mehendi_lounge_decor.webp",
            "gallery_1": "/premium_events/palace_wedding_decor.webp",
            "gallery_2": "/premium_events/outdoor_garden_wedding.webp"
        },
        "faq_1_q": "Do you provide custom 3D event designs before execution?",
        "faq_1_a": "Yes. Our design team creates hyper-realistic 3D renders of your mandap, reception stage, and venue layout before a single flower is placed, ensuring total visual alignment.",
        "packages_title": "Design Portfolios"
    },
    "corporate": {
        "images": {
            "hero": "/premium_events/corporate_gala_setup.webp",
            "lookbook_1": "/premium_events/celebrity_artist_stage.webp",
            "lookbook_2": "/premium_events/luxury_dining_setup.webp",
            "lookbook_3": "/premium_events/grand_wedding_venue.webp",
            "gallery_1": "/premium_events/outdoor_garden_wedding.webp",
            "gallery_2": "/premium_events/modern_sangeet_stage.webp"
        },
        "faq_1_q": "Can you manage massive corporate summits with 1000+ delegates?",
        "faq_1_a": "Absolutely. We specialize in large-scale corporate logistics, including multi-hotel buyouts, delegate transport grids, and highly complex technical stage productions.",
        "packages_title": "Corporate Divisions"
    },
    "artist": {
        "images": {
            "hero": "/premium_events/celebrity_artist_stage.webp",
            "lookbook_1": "/premium_events/modern_sangeet_stage.webp",
            "lookbook_2": "/premium_events/traditional_phoolon_ki_chaadar.webp",
            "lookbook_3": "/premium_events/corporate_gala_setup.webp",
            "gallery_1": "/premium_events/theme_wedding_setup.webp",
            "gallery_2": "/premium_events/luxury_wedding_mandap.webp"
        },
        "faq_1_q": "Can you book international artists and Bollywood celebrities?",
        "faq_1_a": "Yes. Through our direct industry network, we negotiate, book, and manage A-list celebrities, international symphony bands, and high-energy performers for elite events.",
        "packages_title": "Talent Rosters"
    },
    "catering": {
        "images": {
            "hero": "/premium_events/luxury_dining_setup.webp",
            "lookbook_1": "/premium_events/outdoor_garden_wedding.webp",
            "lookbook_2": "/premium_events/palace_wedding_decor.webp",
            "lookbook_3": "/premium_events/theme_wedding_setup.webp",
            "gallery_1": "/premium_events/corporate_gala_setup.webp",
            "gallery_2": "/premium_events/reception_stage_design.webp"
        },
        "faq_1_q": "Do you offer molecular gastronomy and global cuisine?",
        "faq_1_a": "Yes. Our culinary partners include world-renowned executive chefs who curate bespoke menus featuring molecular mixology, authentic Rajasthani thalis, and global fine dining.",
        "packages_title": "Culinary Experiences"
    }
}

base_dir = r"c:\Users\yashs\Downloads\yash-soni-official-main\yash-soni-official-main\app"

for page in pages:
    target_dir = os.path.join(base_dir, page["route"])
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)

    content = template_content
    
    # 1. Text Replacements
    content = content.replace("WeddingPlanningJaipur", page["component"])
    content = content.replace("Mastering The Royal Wedding", page["headline"])
    content = content.replace("Curating the most elite wedding experiences in Rajasthan", page["subheadline"])
    
    # Update Footer
    footer_regex = re.compile(r"Hire the best luxury wedding planner in Jaipur.*?destinations\.", re.DOTALL)
    new_footer = f"{page['desc']} {page['keyword']} execution managed by Anchor Yash Soni across Rambagh Palace, Fairmont, and elite destinations."
    content = footer_regex.sub(new_footer, content)

    # 2. Category-Specific Replacements
    cat_data = categories[page["category"]]
    
    # Hero Image
    content = content.replace("/premium_events/luxury_wedding_mandap.webp", cat_data["images"]["hero"])
    # Lookbook
    content = content.replace("/premium_events/palace_wedding_decor.webp", cat_data["images"]["lookbook_1"])
    content = content.replace("/premium_events/reception_stage_design.webp", cat_data["images"]["lookbook_2"])
    content = content.replace("/premium_events/traditional_phoolon_ki_chaadar.webp", cat_data["images"]["lookbook_3"])
    # Gallery specifics
    content = content.replace("/premium_events/theme_wedding_setup.webp", cat_data["images"]["gallery_1"])
    content = content.replace("/premium_events/celebrity_artist_stage.webp", cat_data["images"]["gallery_2"])
    
    # Titles and FAQs
    content = content.replace("Signature Tiers", cat_data["packages_title"])
    content = content.replace("What is the starting budget for a destination wedding in Jaipur?", cat_data["faq_1_q"])
    content = content.replace("Luxury is bespoke, but an elite heritage wedding in Jaipur typically begins at ₹1.5 Cr, scaling with guest count, venue prestige, and decor opulence.", cat_data["faq_1_a"])

    with open(os.path.join(target_dir, 'page.jsx'), 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Upgraded {page['route']}")

print("All event hubs have been upgraded with the premium template.")
