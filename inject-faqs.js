const fs = require('fs');
const path = require('path');

const CITIES = [
  "agra", "ajmer", "alibaug", "alwar", "andaman", "bangalore", "bharatpur", "bikaner", 
  "chennai", "chittorgarh", "coorg", "delhi", "dharamshala", "goa", "haridwar", "hyderabad", 
  "jaipur", "jaisalmer", "jodhpur", "kolkata", "kota", "kumbhalgarh", "manali", "mandawa", 
  "mount-abu", "mumbai", "mussoorie", "nainital", "neemrana", "ooty", "pushkar", "rajasthan", 
  "ranthambore", "rishikesh", "shimla", "udaipur", "varanasi"
];

function capitalize(str) {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function generateFaqs(citySlug) {
  const cityName = capitalize(citySlug);
  
  return `const FAQS = [
  {
    q: "Who is Anchor Yash Soni, and why should I hire him for my event in ${cityName}?",
    a: "Anchor Yash Soni is a premium, professionally rated event emcee with over 700+ shows hosted across India. Known for his flawless command over audiences and zero-script hosting, he brings a highly energetic and sophisticated presence to luxury weddings, corporate galas, and VIP events in ${cityName}. His 4.9★ rating across 50+ reviews is a testament to his unmatched stage presence."
  },
  {
    q: "What type of events does Yash Soni host in ${cityName}?",
    a: "Yash Soni specialises in premium, high-energy events. In ${cityName}, he frequently anchors luxury destination weddings, electrifying Sangeet nights, Haldi and Mehendi ceremonies, corporate award nights, product launches, and massive public concerts. He is also a sought-after sports commentator."
  },
  {
    q: "Can you host bilingual (Hindi/English) weddings and events in ${cityName}?",
    a: "Absolutely. Yash is a bilingual expert who seamlessly transitions between English for international/NRI guests and corporate audiences, and warm, culturally rooted Hindi for family elders and traditional ceremonies. This ensures every single guest in ${cityName} feels included and engaged."
  },
  {
    q: "What is your anchoring style, and how much experience do you have?",
    a: "With over 5 years of stage experience and 700+ live shows under his belt, Yash's style is dynamic, unscripted, and deeply interactive. He doesn't just read from a script; he reads the crowd's energy. Whether it's managing a massive corporate crowd of 10,000+ or an intimate VIP gathering in ${cityName}, he ensures the event flows flawlessly even during technical glitches."
  },
  {
    q: "Do you travel for destination weddings and corporate events in ${cityName}?",
    a: "Yes, Anchor Yash Soni is highly experienced in destination events. If you are planning a destination wedding, corporate retreat, or luxury Sangeet at a premium venue or resort in ${cityName}, he travels nationwide to host. All travel and accommodation logistics are discussed transparently during the initial booking."
  },
  {
    q: "What are your charges for events in ${cityName}, and how can I book you?",
    a: "Charges depend on the event type, scale, duration, and whether travel to ${cityName} is required. Yash offers premium services for clients who value flawless execution. To check his availability for your dates and get a customized quote, you can directly contact his team via the WhatsApp button on this website or email bookings@yashsoni.in."
  }
];`;
}

CITIES.forEach(city => {
  const filePath = path.join(__dirname, 'app', `anchor-in-${city}`, 'page.tsx');
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    const startIndex = content.indexOf('const FAQS = [');
    let endIndex = content.indexOf('const faqSchema = {');
    
    // If we couldn't find faqSchema for some reason, try falling back to just '];' but searching from end
    if (endIndex === -1) {
       endIndex = content.indexOf('];', startIndex);
       if (endIndex !== -1) endIndex += 2; // include ];
    }
    
    if (startIndex !== -1 && endIndex !== -1) {
      const part1 = content.substring(0, startIndex);
      const part2 = content.substring(endIndex);
      const newContent = part1 + generateFaqs(city) + '\n\n' + part2;
      fs.writeFileSync(filePath, newContent);
      console.log(`Successfully updated FAQs in ${city}`);
    } else {
      console.log(`Could not find standard FAQS block boundaries in ${city}`);
    }
  } else {
    console.log(`File not found for ${city}`);
  }
});
