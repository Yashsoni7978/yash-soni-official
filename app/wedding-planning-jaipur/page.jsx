"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight, Minus, Plus, Heart, Music,
  Flower2, Utensils, Globe, Gem,
  Building2, Crown, Sparkles, ChevronRight,
  CalendarCheck, MapPin, ShieldCheck
} from "lucide-react";

// ─────────────────────────────────────────────
// DESIGN TOKENS — The Gem Palette
// ─────────────────────────────────────────────
const C = {
  gold:      "#D4AF37",
  goldLight: "#f0d878",
  goldDark:  "#a8891a",
  ruby:      "#9B2335",
  rubyLight: "#c94455",
  emerald:   "#046A38",
  emeraldLight:"#0a9e55",
  diamond:   "#b9d4f5",
  diamondDark:"#6ba3d6",
  ink:       "#0d0a06",
  inkSoft:   "#1a1508",
  inkMid:    "#3d3525",
  stone:     "#8a7d6a",
  ivory:     "#faf8f4",
  cream:     "#f5f0e8",
  white:     "#ffffff",
};

const WA = "https://wa.me/917737877978?text=Hi%20Yash!%20I%27m%20interested%20in%20luxury%20wedding%20planning%20in%20Jaipur.";

// ─────────────────────────────────────────────
// GLOBAL STYLES
// ─────────────────────────────────────────────
const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap');

*{box-sizing:border-box;margin:0;padding:0;}

.wp-page{font-family:'Montserrat',sans-serif;background:${C.ivory};color:${C.ink};overflow-x:hidden;}
.cg{font-family:'Cormorant Garamond',serif!important;}

/* Gold shimmer */
@keyframes gs{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
.gs{
  background:linear-gradient(120deg,${C.goldDark} 0%,${C.gold} 30%,${C.goldLight} 50%,${C.gold} 70%,${C.goldDark} 100%);
  background-size:300% auto;
  animation:gs 4s linear infinite;
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}

/* Ruby shimmer */
@keyframes rs{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
.rs{
  background:linear-gradient(120deg,#7a1825 0%,${C.ruby} 30%,${C.rubyLight} 55%,${C.ruby} 70%,#7a1825 100%);
  background-size:300% auto;animation:rs 4s linear infinite;
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}

/* Emerald shimmer */
.es{
  background:linear-gradient(120deg,#023d20 0%,${C.emerald} 30%,${C.emeraldLight} 55%,${C.emerald} 70%,#023d20 100%);
  background-size:300% auto;animation:gs 4s linear infinite;
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}

/* Diamond shimmer */
.ds{
  background:linear-gradient(120deg,#8ab4d8 0%,${C.diamond} 40%,#e8f2ff 60%,${C.diamond} 80%,#8ab4d8 100%);
  background-size:300% auto;animation:gs 5s linear infinite;
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}

/* Gem border glow on hover */
.gem-gold{border:0.5px solid rgba(212,175,55,0.3);transition:border-color .3s,box-shadow .3s;}
.gem-gold:hover{border-color:rgba(212,175,55,0.7);box-shadow:0 0 20px rgba(212,175,55,0.12);}
.gem-ruby{border:0.5px solid rgba(155,35,53,0.25);transition:border-color .3s,box-shadow .3s;}
.gem-ruby:hover{border-color:rgba(155,35,53,0.6);box-shadow:0 0 20px rgba(155,35,53,0.1);}
.gem-emerald{border:0.5px solid rgba(4,106,56,0.25);transition:border-color .3s,box-shadow .3s;}
.gem-emerald:hover{border-color:rgba(4,106,56,0.6);box-shadow:0 0 20px rgba(4,106,56,0.1);}
.gem-diamond{border:0.5px solid rgba(185,212,245,0.35);transition:border-color .3s,box-shadow .3s;}
.gem-diamond:hover{border-color:rgba(185,212,245,0.8);box-shadow:0 0 20px rgba(185,212,245,0.15);}

/* Section label */
.label{font-family:'Montserrat',sans-serif;font-size:9px;font-weight:500;letter-spacing:.3em;text-transform:uppercase;}

/* Thin divider line */
.rule{height:.5px;background:rgba(212,175,55,0.2);}

/* Counter animation */
@keyframes countUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
.count-in{animation:countUp .6s ease forwards;}

/* Image hover */
.img-cell img{transition:transform .65s ease,filter .4s;}
.img-cell:hover img{transform:scale(1.04);filter:grayscale(0%)!important;}

/* Blog card top line */
.blog-card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;opacity:0;transition:opacity .3s;}
.blog-card:hover::before{opacity:1;}
.blog-card.g::before{background:linear-gradient(90deg,transparent,${C.gold},transparent);}
.blog-card.r::before{background:linear-gradient(90deg,transparent,${C.ruby},transparent);}
.blog-card.e::before{background:linear-gradient(90deg,transparent,${C.emerald},transparent);}
.blog-card.d::before{background:linear-gradient(90deg,transparent,${C.diamond},transparent);}
.blog-card.g2::before{background:linear-gradient(90deg,transparent,${C.gold},transparent);}
.blog-card.r2::before{background:linear-gradient(90deg,transparent,${C.ruby},transparent);}
`;

// ─────────────────────────────────────────────
// ANIMATED COUNTER HOOK
// ─────────────────────────────────────────────
function useCounter(target, duration = 1800, suffix = "") {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  useEffect(() => {
    if (!inView) return;
    let start = null;
    const isPercent = suffix === "%";
    const from = 0;
    const to = parseInt(target.replace(/\D/g, ""), 10);
    const step = ts => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(from + (to - from) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);
  return { ref, val };
}

// ─────────────────────────────────────────────
// FLORAL SVG COMPONENTS
// ─────────────────────────────────────────────
const Bloom = ({ x, y, r, color, opacity = 0.18 }) => (
  <g opacity={opacity}>
    <circle cx={x} cy={y} r={r * 1.4} stroke={color} strokeWidth="0.5" fill="none"/>
    <circle cx={x} cy={y} r={r}       stroke={color} strokeWidth="0.5" fill="none"/>
    <ellipse cx={x}     cy={y - r}   rx={r * 0.18} ry={r * 0.44} fill={color}/>
    <ellipse cx={x}     cy={y + r}   rx={r * 0.18} ry={r * 0.44} fill={color}/>
    <ellipse cx={x - r} cy={y}       rx={r * 0.44} ry={r * 0.18} fill={color}/>
    <ellipse cx={x + r} cy={y}       rx={r * 0.44} ry={r * 0.18} fill={color}/>
    <ellipse cx={x - r * 0.7} cy={y - r * 0.7} rx={r * 0.15} ry={r * 0.38} transform={`rotate(-45 ${x - r * 0.7} ${y - r * 0.7})`} fill={color}/>
    <ellipse cx={x + r * 0.7} cy={y - r * 0.7} rx={r * 0.15} ry={r * 0.38} transform={`rotate(45 ${x + r * 0.7} ${y - r * 0.7})`} fill={color}/>
    <ellipse cx={x - r * 0.7} cy={y + r * 0.7} rx={r * 0.15} ry={r * 0.38} transform={`rotate(45 ${x - r * 0.7} ${y + r * 0.7})`} fill={color}/>
    <ellipse cx={x + r * 0.7} cy={y + r * 0.7} rx={r * 0.15} ry={r * 0.38} transform={`rotate(-45 ${x + r * 0.7} ${y + r * 0.7})`} fill={color}/>
    <circle  cx={x} cy={y} r={r * 0.14} fill={color} opacity="0.9"/>
  </g>
);

const GemDivider = ({ gems = ["gold","ruby","emerald","diamond"] }) => {
  const colors = { gold: C.gold, ruby: C.ruby, emerald: C.emerald, diamond: C.diamond };
  return (
    <div style={{ display:"flex", alignItems:"center", gap:16, padding:"28px 0" }}>
      <div className="rule" style={{ flex:1 }} />
      <svg width="120" height="24" viewBox="0 0 120 24" fill="none">
        {gems.map((g, i) => {
          const cx = 15 + i * 30;
          const col = colors[g];
          return (
            <g key={g}>
              <polygon points={`${cx},4 ${cx+6},12 ${cx},20 ${cx-6},12`} fill={col} opacity="0.7"/>
              <polygon points={`${cx},4 ${cx+6},12 ${cx},20 ${cx-6},12`} stroke={col} strokeWidth="0.5" fill="none" opacity="0.9"/>
              <line x1={cx+6} y1={12} x2={cx+14} y2={12} stroke="rgba(212,175,55,0.2)" strokeWidth="0.5"/>
            </g>
          );
        })}
      </svg>
      <div className="rule" style={{ flex:1 }} />
    </div>
  );
};

// ─────────────────────────────────────────────
// STAT CARD with animated counter
// ─────────────────────────────────────────────
const StatCard = ({ num, suffix = "", label, sublabel, gem }) => {
  const { ref, val } = useCounter(num, 1600);
  const gemStyles = {
    gold:    { border:`1px solid rgba(212,175,55,0.35)`, bg:`rgba(212,175,55,0.04)`, cls:"gs" },
    ruby:    { border:`1px solid rgba(155,35,53,0.3)`,   bg:`rgba(155,35,53,0.04)`,  cls:"rs" },
    emerald: { border:`1px solid rgba(4,106,56,0.3)`,    bg:`rgba(4,106,56,0.04)`,   cls:"es" },
    diamond: { border:`1px solid rgba(185,212,245,0.4)`, bg:`rgba(106,163,214,0.06)`,cls:"ds" },
  };
  const gs = gemStyles[gem] || gemStyles.gold;

  // gem icon paths
  const GemIcon = () => {
    const sz = 14;
    const col = { gold:C.gold, ruby:C.ruby, emerald:C.emerald, diamond:C.diamond }[gem];
    return (
      <svg width={sz} height={sz} viewBox="0 0 14 14" fill="none" style={{ marginBottom:10 }}>
        <polygon points="7,1 13,5 13,9 7,13 1,9 1,5" fill={col} opacity="0.25"/>
        <polygon points="7,1 13,5 13,9 7,13 1,9 1,5" stroke={col} strokeWidth="0.7" fill="none"/>
        <line x1="1" y1="5" x2="13" y2="5" stroke={col} strokeWidth="0.5" opacity="0.6"/>
        <line x1="7" y1="1" x2="1"  y2="5" stroke={col} strokeWidth="0.5" opacity="0.6"/>
        <line x1="7" y1="1" x2="13" y2="5" stroke={col} strokeWidth="0.5" opacity="0.6"/>
        <line x1="1" y1="9" x2="7"  y2="5" stroke={col} strokeWidth="0.5" opacity="0.4"/>
        <line x1="13" y1="9" x2="7" y2="5" stroke={col} strokeWidth="0.5" opacity="0.4"/>
      </svg>
    );
  };

  return (
    <div ref={ref} style={{ background:gs.bg, border:gs.border, borderRadius:2, padding:"32px 24px", textAlign:"center" }}>
      <GemIcon />
      <div className={`cg ${gs.cls}`} style={{ fontSize:"clamp(38px,5vw,56px)", fontWeight:300, lineHeight:1, marginBottom:4 }}>
        {val}{suffix}
      </div>
      <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:11, fontWeight:600, letterSpacing:"0.18em", textTransform:"uppercase", color:C.inkMid, marginBottom:4 }}>{label}</p>
      {sublabel && <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:300, letterSpacing:"0.1em", color:C.stone }}>{sublabel}</p>}
    </div>
  );
};

// ─────────────────────────────────────────────
// FAQ ITEM
// ─────────────────────────────────────────────
const FAQItem = ({ q, a, id }) => {
  const [open, setOpen] = useState(false);
  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}
      style={{ borderBottom:`0.5px solid rgba(212,175,55,0.15)` }}>
      <button onClick={() => setOpen(o => !o)} aria-expanded={open} aria-controls={id}
        style={{ width:"100%", display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:16, padding:"20px 0", background:"none", border:"none", cursor:"pointer", textAlign:"left" }}>
        <span className="cg" style={{ fontSize:18, fontWeight:400, lineHeight:1.35, color: open ? C.goldDark : C.ink }}>{q}</span>
        <div style={{ flexShrink:0, width:26, height:26, borderRadius:"50%", border:`0.5px solid ${open ? C.gold : "rgba(212,175,55,0.35)"}`, background: open ? C.gold : "transparent", display:"flex", alignItems:"center", justifyContent:"center", marginTop:2, transition:"all .25s" }}>
          {open ? <Minus size={12} color={C.ink}/> : <Plus size={12} color={C.goldDark}/>}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div id={id} initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }} style={{ overflow:"hidden" }}>
            <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:13, fontWeight:300, lineHeight:1.9, color:C.stone, paddingBottom:20 }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const STATS = [
  { num:"1100", suffix:"+", label:"Events Executed",    sublabel:"Since founding",        gem:"gold"    },
  { num:"100",  suffix:"%", label:"Client Satisfaction", sublabel:"Zero compromises",      gem:"diamond" },
  { num:"12",   suffix:"+", label:"Palace Properties",  sublabel:"Exclusive relationships", gem:"ruby"   },
  { num:"200",  suffix:"+", label:"Verified Reviews",   sublabel:"Google · WedMeGood",      gem:"emerald" },
];

const SERVICES = [
  { gem:"gold",    icon:Heart,    num:"01", title:"Full Wedding Planning",   sub:"Bride & Groom Experience",   desc:"End-to-end management from first vision call to the final farewell. Every element architected — venue, vendors, timeline, VIP hospitality.", tags:["Venue Procurement","Vendor Management","Full Execution"], href:"/contact" },
  { gem:"ruby",    icon:Crown,    num:"02", title:"Palace & Heritage Venues", sub:"Fairmont · Rambagh · Leela",  desc:"Deep relationships with Jaipur's most sought-after properties. Premium inventory, negotiated insider rates, strict protocol navigation.", tags:["Fairmont Jaipur","Rambagh Palace","Leela Palace"], href:"/destination-wedding-anchor" },
  { gem:"emerald", icon:Music,    num:"03", title:"Sangeet & Pre-Wedding",   sub:"Mehndi · Sangeet · Haldi",   desc:"Pre-wedding ceremonies that define the emotional arc of your week. Each a separate production — stage, sound, timing, energy.", tags:["Sangeet Production","Mehndi Setup","Haldi Coordination"], href:"/sangeet-anchor-jaipur" },
  { gem:"diamond", icon:Flower2,  num:"04", title:"Bridal Décor Curation",   sub:"3D Design → Execution",      desc:"3D spatial approval before a single flower is placed. Overseeing Jaipur's top decorators — the build matches the vision, exactly.", tags:["3D Design","Floral Mandap","Stage Architecture"], href:"/event-designing" },
  { gem:"gold",    icon:Globe,    num:"05", title:"Destination Weddings",    sub:"Rajasthan & International",   desc:"Udaipur, Jodhpur, Jaisalmer, Goa — and beyond. NRI families, international guests, cross-cultural ceremonies handled seamlessly.", tags:["Udaipur","Jodhpur","NRI Weddings"], href:"/destination-wedding-anchor" },
  { gem:"ruby",    icon:Utensils, num:"06", title:"F&B & Guest Hospitality", sub:"VIP Fleet · Welcome Hampers", desc:"Master chef menus, elite bar setups, airport concierge, luxury fleet routing, and bespoke welcome hampers for international guests.", tags:["Cuisine Curation","VIP Transfers","Guest Management"], href:"/contact" },
];

const GEM_COLORS = { gold: C.gold, ruby: C.ruby, emerald: C.emerald, diamond: C.diamondDark };
const GEM_BG    = { gold:"rgba(212,175,55,0.05)", ruby:"rgba(155,35,53,0.04)", emerald:"rgba(4,106,56,0.04)", diamond:"rgba(106,163,214,0.06)" };
const GEM_BORDER= { gold:"rgba(212,175,55,0.3)", ruby:"rgba(155,35,53,0.25)", emerald:"rgba(4,106,56,0.25)", diamond:"rgba(185,212,245,0.4)" };

const GALLERY = [
  { src:"/white-flower-mandap-jaipur.webp", alt:"White floral mandap luxury wedding Jaipur", label:"Mandap Architecture", gem:"gold",    tall:true },
  { src:"/indian-bride-solo-decor.webp",    alt:"Indian bride wedding decor Jaipur",          label:"Bridal Moments",     gem:"ruby" },
  { src:"/bride-groom-flower-petals.webp",  alt:"Bride groom varmala ceremony",               label:"Varmala",            gem:"emerald" },
  { src:"/sangeet-red-glitter-stage.webp",  alt:"Sangeet stage Jaipur",                       label:"Sangeet Stage",      gem:"gold",    wide:true },
  { src:"/haldi-bride-groom-family.webp",   alt:"Haldi ceremony Jaipur",                      label:"Haldi Ceremony",     gem:"ruby" },
  { src:"/vintage-car-couple-shoot.webp",   alt:"Vintage car couple shoot Jaipur",            label:"Couple Shoot",       gem:"diamond" },
];

const PHILOSOPHY = [
  { gem:"gold",    title:"One Event at a Time",   desc:"We never double-book. Your wedding is the only wedding that day.",              icon:"⧗" },
  { gem:"ruby",    title:"Transparent Fixed Fee",  desc:"You pay vendors directly at our rates. Zero hidden commissions — ever.",        icon:"◈" },
  { gem:"emerald", title:"You Stay as Guests",     desc:"Shadow teams handle every detail. Your family celebrates, not coordinates.",   icon:"◉" },
  { gem:"diamond", title:"NRI Protocol Fluent",    desc:"UK, USA, Canada, Gulf — bilingual hosting, airport concierge, welcome hampers.", icon:"◆" },
];

const TESTIMONIALS = [
  { gem:"gold",    name:"Singhania Family",         quote:"The Fairmont Jaipur execution was flawless. Our family experienced the wedding as guests — not coordinators. Every detail handled invisibly.", event:"Palace Wedding · Fairmont Jaipur", guests:"400 guests, 3 days" },
  { gem:"ruby",    name:"Kapoor Family — Toronto",  quote:"Planning from Canada felt impossible. Airport logistics, 80 international guests, welcome hampers — zero gaps. Exactly what the brief said.", event:"Destination Wedding · Rambagh Palace", guests:"NRI family, 300 guests" },
  { gem:"emerald", name:"Mehta Family",             quote:"The 3D design approval meant we knew exactly what the venue would look like before landing in Jaipur. Zero surprises on the day.", event:"Heritage Wedding · Amer Road, Jaipur", guests:"250 guests" },
];

const BLOG_CARDS = [
  { img:"/haldi-bride-groom-family.webp",   alt:"Haldi guide Jaipur",    tag:"Haldi",    title:"Haldi Ceremony in Jaipur: Traditions, Ideas & Planning 2026",  href:"/blog/haldi-ceremony-planning-guide-jaipur",    gem:"g"  },
  { img:"/sangeet-red-glitter-stage.webp",  alt:"Sangeet guide Jaipur",  tag:"Sangeet",  title:"Sangeet Ceremony Planning: Your Complete 2026 Guide",          href:"/blog/sangeet-ceremony-planning-guide-jaipur",   gem:"r"  },
  { img:"/indian-bride-solo-decor.webp",    alt:"Mehendi guide Jaipur",  tag:"Mehndi",   title:"Mehendi Ceremony Planning: Ideas, Games & Expert Tips",        href:"/blog/mehendi-ceremony-planning-jaipur",          gem:"e"  },
  { img:"/white-flower-mandap-jaipur.webp", alt:"Wedding budget Jaipur", tag:"Budget",   title:"Jaipur Wedding Costs 2026: Complete Budget Breakdown",         href:"/blog/jaipur-wedding-costs-budget-breakdown-2026", gem:"d"  },
  { img:"/jal-mahal-jaipur-artist.webp",    alt:"Udaipur vs Jaipur",     tag:"Destination",title:"Udaipur vs Jaipur for Weddings: Which City in 2026?",        href:"/blog/udaipur-vs-jaipur-for-weddings-2026",       gem:"g2" },
  { img:"/bride-groom-white-decor.webp",    alt:"Anchor charges Jaipur", tag:"Pricing",  title:"Anchor Charges in Jaipur 2026: Complete Pricing Guide",        href:"/blog/anchor-charges-jaipur-2026",               gem:"r2" },
];

const FAQS = [
  { q:"What does a luxury wedding planner do that a decorator doesn't?", a:"Decorators make it beautiful. A wedding planner makes it flawless. We act as Executive Producers — managing venue procurement, vendor contracts, VIP hospitality, complete timeline, and day-of execution. Decorators work for us, not alongside us." },
  { q:"Which palace venues in Jaipur do you work with?", a:"Fairmont Jaipur, Rambagh Palace, Leela Palace, Samode Palace, and the major heritage havelis on Amer Road and in Kukas. Each property has its own protocols, catering minimums, and vendor approval requirements — all navigated from prior experience." },
  { q:"How is the wedding budget managed transparently?", a:"Fixed management fee model. You pay vendors directly at our negotiated insider rates — caterers, decorators, artists, photographers. Zero hidden percentages on invoices, zero commissions taken from vendors. Every rupee documented and reported." },
  { q:"Do you plan destination weddings outside Jaipur?", a:"Yes. Full destination management across Rajasthan — Udaipur (Taj Lake Palace, Oberoi Udaivilas, Leela), Jodhpur (Umaid Bhawan), Jaisalmer (Suryagarh), Pushkar. And internationally for NRI families in Dubai, Thailand, and Southeast Asia." },
  { q:"Do you also provide the wedding anchor and host?", a:"Yes. Anchor Yash Soni personally hosts the wedding ceremonies — Varmala, Baraat, Bidaai — and the Sangeet, Haldi, and Mehndi. Having the planner and anchor as one entity means zero coordination gaps between production and stage." },
  { q:"When should we book a luxury wedding planner in Jaipur?", a:"For palace properties and peak season (October–February), 8–12 months in advance. Fairmont and Rambagh Palace premium inventory blocks early — the best vendor slots follow. Once confirmed, intensive planning runs for 6–8 months before the wedding week." },
  { q:"How do you manage the bride and groom experience?", a:"Shadow team deployment means a dedicated coordinator is assigned to the bride, one to the groom, and one to each set of parents. Every logistical issue is resolved before it reaches the couple. Your wedding day is experienced — not managed — by the family." },
  { q:"What ceremonies do you plan and manage?", a:"The complete wedding week — Welcome Sundowner, Mehndi, Haldi, Sangeet gala, Wedding ceremony (Varmala, pheras, bidaai), and Reception. Each ceremony has its own design brief, timeline, and dedicated vendor team." },
];

const RELATED = [
  { icon:Heart,     label:"Wedding Anchor",    href:"/wedding-anchor-jaipur",         desc:"Varmala, Baraat, Bidaai", gem:"gold"    },
  { icon:Music,     label:"Sangeet Host",      href:"/sangeet-anchor-jaipur",         desc:"High-energy Sangeet",     gem:"ruby"    },
  { icon:Flower2,   label:"Mehndi Anchor",     href:"/mehendi-anchor-jaipur",         desc:"Ladies Sangeet",          gem:"emerald" },
  { icon:Sparkles,  label:"Haldi Anchor",      href:"/haldi-anchor-jaipur",           desc:"Ceremony games",          gem:"diamond" },
  { icon:Globe,     label:"Destination",       href:"/destination-wedding-anchor",    desc:"Udaipur, Jodhpur, Goa",   gem:"gold"    },
  { icon:Gem,       label:"Event Designing",   href:"/event-designing",               desc:"3D & decor",              gem:"ruby"    },
  { icon:Building2, label:"Corporate Events",  href:"/corporate-event-anchor-jaipur", desc:"Award nights",            gem:"emerald" },
  { icon:Crown,     label:"Best Anchor Jaipur",href:"/best-anchor-in-jaipur",         desc:"All formats",             gem:"diamond" },
];

const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div initial={{ opacity:0, y:22 }} whileInView={{ opacity:1, y:0 }}
    viewport={{ once:true, margin:"-50px" }} transition={{ duration:.72, delay, ease:[.22,1,.36,1] }} className={className}>
    {children}
  </motion.div>
);

// ─────────────────────────────────────────────
// FAQ schema
// ─────────────────────────────────────────────
const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  mainEntity: FAQS.map(f => ({ "@type":"Question", name:f.q, acceptedAnswer:{ "@type":"Answer", text:f.a } })),
};

// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────
export default function WeddingPlanning() {
  return (
    <div className="wp-page">
      <style>{css}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faqSchema) }}/>

      <nav className="sr-only">
        <Link href="/">Home</Link> › <Link href="/wedding-anchor-jaipur">Wedding Anchor</Link> › <span>Wedding Planner Jaipur</span>
      </nav>

      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section style={{ position:"relative", minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"flex-end", overflow:"hidden", background:C.ink }}>

        {/* Full-bleed hero image */}
        <div style={{ position:"absolute", inset:0, opacity:.35 }}>
          <Image src="/white-flower-mandap-jaipur.webp" alt="Luxury wedding planning Jaipur" fill priority quality={100}
            className="object-cover" sizes="100vw" style={{ filter:"grayscale(15%)" }}/>
        </div>

        {/* Multi-layer gradient */}
        <div style={{ position:"absolute", inset:0, background:`linear-gradient(to top, ${C.ink} 0%, rgba(13,10,6,.75) 45%, rgba(13,10,6,.2) 100%)` }}/>

        {/* Floral SVG decoration — top right */}
        <svg style={{ position:"absolute", right:0, top:0, height:"100%", width:"min(45vw, 560px)", opacity:.13, pointerEvents:"none" }}
          viewBox="0 0 560 700" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Bloom x={380} y={180} r={110} color={C.gold}/>
          <Bloom x={200} y={450} r={72}  color={C.ruby}   opacity={0.22}/>
          <Bloom x={460} y={500} r={44}  color={C.emerald} opacity={0.2}/>
          <Bloom x={110} y={200} r={32}  color={C.diamond} opacity={0.25}/>
          <path d="M380 290 Q290 360 200 378" stroke={C.gold} strokeWidth=".5" fill="none" opacity=".4"/>
          <path d="M340 220 Q310 200 320 175" stroke={C.gold} strokeWidth=".5" fill="none" opacity=".35"/>
          <path d="M340 220 Q315 235 320 175" stroke={C.gold} strokeWidth=".3" fill="none" opacity=".18"/>
        </svg>

        {/* Content */}
        <div style={{ position:"relative", zIndex:2, maxWidth:1280, margin:"0 auto", width:"100%", padding:"0 clamp(24px,5vw,64px) clamp(56px,8vh,100px)" }}>
          <motion.div initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }} transition={{ duration:1.1 }}>

            {/* Gem badge row */}
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:28 }}>
              {[C.gold, C.ruby, C.emerald, C.diamond].map((col, i) => (
                <svg key={i} width="12" height="14" viewBox="0 0 12 14" fill="none">
                  <polygon points="6,0 12,4 12,10 6,14 0,10 0,4" fill={col} opacity="0.75"/>
                  <polygon points="6,0 12,4 12,10 6,14 0,10 0,4" stroke={col} strokeWidth="0.6" fill="none"/>
                </svg>
              ))}
              <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:500, letterSpacing:"0.3em", textTransform:"uppercase", color:`${C.gold}90`, marginLeft:4 }}>
                Luxury Wedding Planners &nbsp;·&nbsp; Jaipur
              </span>
            </div>

            {/* H1 — multi-gem typography */}
            <h1 className="cg" style={{ fontSize:"clamp(48px,7.5vw,108px)", fontWeight:300, lineHeight:.9, letterSpacing:"-.01em", marginBottom:20 }}>
              <span style={{ color:C.ivory }}>Architecting</span><br/>
              <span className="gs" style={{ fontStyle:"italic" }}>Wedding </span>
              <span className="rs" style={{ fontStyle:"italic" }}>Legacies.</span>
            </h1>

            {/* Gem divider inline */}
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:24 }}>
              <div style={{ width:36, height:".5px", background:C.gold, opacity:.5 }}/>
              {[C.gold, C.ruby, C.emerald, C.diamond].map((col,i) => (
                <div key={i} style={{ width:6, height:6, transform:"rotate(45deg)", background:col, opacity:.8 }}/>
              ))}
              <div style={{ width:36, height:".5px", background:C.gold, opacity:.5 }}/>
            </div>

            {/* Subheading */}
            <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"clamp(13px,1.5vw,17px)", fontWeight:300, lineHeight:1.9, color:`${C.ivory}55`, maxWidth:500, marginBottom:44 }}>
              Full-service luxury wedding planning in Jaipur — palace venue procurement, Sangeet, Mehndi, Haldi, Varmala & destination weddings across Rajasthan. Your family stays as guests, not coordinators.
            </p>

            {/* CTAs */}
            <div style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <button style={{ fontFamily:"'Montserrat',sans-serif", fontSize:10, fontWeight:600, letterSpacing:"0.25em", textTransform:"uppercase", background:C.gold, color:C.ink, border:"none", padding:"18px 44px", borderRadius:1, cursor:"pointer" }}>
                  Begin the Conversation →
                </button>
              </a>
              <Link href="/portfolio">
                <button style={{ fontFamily:"'Montserrat',sans-serif", fontSize:10, fontWeight:400, letterSpacing:"0.2em", textTransform:"uppercase", background:"transparent", color:`${C.ivory}60`, border:`0.5px solid rgba(255,255,255,0.2)`, padding:"18px 32px", borderRadius:1, cursor:"pointer" }}>
                  View Portfolio
                </button>
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. GEM STATS — animated counters
      ══════════════════════════════════════ */}
      <section style={{ background:C.white, borderBottom:`0.5px solid rgba(212,175,55,0.15)` }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 clamp(24px,5vw,64px)" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:1 }}>
            {STATS.map((s,i) => (
              <Reveal key={i} delay={i*.07}>
                <div style={{ padding:"0 1px" }}>
                  <StatCard {...s}/>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. PHILOSOPHY — 4 gem pillars
      ══════════════════════════════════════ */}
      <section style={{ background:C.ivory, padding:"64px clamp(24px,5vw,64px)" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:3 }}>
            {PHILOSOPHY.map((p,i) => (
              <Reveal key={i} delay={i*.07}>
                <div style={{ background:GEM_BG[p.gem], border:`0.5px solid ${GEM_BORDER[p.gem]}`, padding:"28px 22px", position:"relative", overflow:"hidden" }}>
                  {/* top accent line */}
                  <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:`linear-gradient(90deg,transparent,${GEM_COLORS[p.gem]},transparent)` }}/>
                  <div style={{ width:7, height:7, transform:"rotate(45deg)", background:GEM_COLORS[p.gem], marginBottom:16, opacity:.8 }}/>
                  <p className="cg" style={{ fontSize:18, fontWeight:400, color:C.ink, marginBottom:10 }}>{p.title}</p>
                  <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:11, fontWeight:300, lineHeight:1.8, color:C.stone }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gem divider */}
      <div style={{ background:C.ivory, padding:"0 clamp(24px,5vw,64px)" }}>
        <GemDivider/>
      </div>

      {/* ══════════════════════════════════════
          4. SERVICES GRID — numbered gem cards
      ══════════════════════════════════════ */}
      <section style={{ background:C.ivory, padding:"0 clamp(24px,5vw,64px) 80px" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <Reveal>
            <div style={{ marginBottom:44 }}>
              <p className="label" style={{ color:C.gold, marginBottom:14 }}>Wedding Services</p>
              <h2 className="cg" style={{ fontSize:"clamp(34px,4.5vw,58px)", fontWeight:300, color:C.ink }}>
                Everything for the <span className="gs" style={{ fontStyle:"italic" }}>Bride </span>
                <span style={{ color:C.ink }}>&amp;</span>
                <span className="rs" style={{ fontStyle:"italic" }}> Groom.</span>
              </h2>
            </div>
          </Reveal>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:3 }}>
            {SERVICES.map((s,i) => (
              <Reveal key={i} delay={i*.07}>
                <Link href={s.href}>
                  <div style={{ background:GEM_BG[s.gem], border:`0.5px solid ${GEM_BORDER[s.gem]}`, padding:"36px 28px", cursor:"pointer", height:"100%", position:"relative", overflow:"hidden", transition:"box-shadow .3s" }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = `0 0 24px ${GEM_COLORS[s.gem]}22`}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
                    <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:`linear-gradient(90deg,transparent,${GEM_COLORS[s.gem]},transparent)` }}/>
                    <p className="cg" style={{ fontSize:52, fontWeight:300, color:`${GEM_COLORS[s.gem]}25`, lineHeight:1, marginBottom:14 }}>{s.num}</p>
                    <p className="cg" style={{ fontSize:22, fontWeight:400, color:C.ink, marginBottom:6 }}>{s.title}</p>
                    <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:GEM_COLORS[s.gem], marginBottom:14 }}>{s.sub}</p>
                    <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:12, fontWeight:300, lineHeight:1.85, color:C.stone, marginBottom:20 }}>{s.desc}</p>
                    <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                      {s.tags.map(tag => (
                        <span key={tag} style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, letterSpacing:"0.12em", textTransform:"uppercase", color:GEM_COLORS[s.gem], border:`0.5px solid ${GEM_COLORS[s.gem]}50`, padding:"4px 11px", borderRadius:1, background:`${GEM_COLORS[s.gem]}08` }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. GALLERY — masonry, gem borders
      ══════════════════════════════════════ */}
      <section style={{ background:C.cream, borderTop:`0.5px solid rgba(212,175,55,0.12)`, padding:"64px clamp(24px,5vw,64px)" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:36, flexWrap:"wrap", gap:12 }}>
            <Reveal>
              <p className="label" style={{ color:C.gold, marginBottom:12 }}>The Portfolio</p>
              <h2 className="cg" style={{ fontSize:"clamp(30px,4vw,52px)", fontWeight:300, color:C.ink }}>
                Real <span className="gs" style={{ fontStyle:"italic" }}>Weddings.</span>
              </h2>
            </Reveal>
            <Link href="/portfolio">
              <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:500, letterSpacing:"0.22em", textTransform:"uppercase", color:C.goldDark, borderBottom:`0.5px solid ${C.gold}60`, paddingBottom:2, cursor:"pointer" }}>View All →</span>
            </Link>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr", gridTemplateRows:"256px 256px", gap:3 }}>
            {GALLERY.map((img, i) => (
              <Reveal key={i} delay={i*.05}>
                <div className="img-cell"
                  style={{ gridColumn: img.tall?"1":img.wide?"2/span 2":"auto", gridRow: img.tall?"1/span 2":"auto",
                    position:"relative", overflow:"hidden", border:`0.5px solid ${GEM_COLORS[img.gem]}30` }}>
                  <Image src={img.src} alt={img.alt} fill quality={100}
                    className="object-cover"
                    style={{ filter:"grayscale(20%)" }}
                    sizes="(max-width:768px) 100vw, 33vw"/>
                  <div style={{ position:"absolute", inset:0, background:`linear-gradient(to top, rgba(13,10,6,.75) 0%, transparent 50%)` }}/>
                  {/* gem corner accent */}
                  <div style={{ position:"absolute", top:10, right:10, width:8, height:8, transform:"rotate(45deg)", background:GEM_COLORS[img.gem], opacity:.7 }}/>
                  <p style={{ position:"absolute", bottom:12, left:14, fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:500, letterSpacing:"0.22em", textTransform:"uppercase", color:`${C.ivory}80` }}>
                    {img.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gem divider */}
      <div style={{ background:C.ivory, padding:"0 clamp(24px,5vw,64px)" }}>
        <GemDivider gems={["ruby","gold","diamond","emerald"]}/>
      </div>

      {/* ══════════════════════════════════════
          6. TESTIMONIALS — dark, gem accents
      ══════════════════════════════════════ */}
      <section style={{ background:C.inkSoft, padding:"80px clamp(24px,5vw,64px)" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <Reveal>
            <p className="label" style={{ color:`${C.gold}80`, marginBottom:14 }}>Client Stories</p>
            <h2 className="cg" style={{ fontSize:"clamp(30px,4vw,52px)", fontWeight:300, marginBottom:48 }}>
              <span style={{ color:C.ivory }}>Families who trusted </span>
              <span className="gs" style={{ fontStyle:"italic" }}>the process.</span>
            </h2>
          </Reveal>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:3 }}>
            {TESTIMONIALS.map((t,i) => (
              <Reveal key={i} delay={i*.08}>
                <a href="https://share.google/pMZGzEGOhXnJpLq5g" target="_blank" rel="noopener noreferrer"
                  className="test-card"
                  style={{ display:"flex", flexDirection:"column", padding:"36px 28px", position:"relative", overflow:"hidden", cursor:"pointer" }}>
                  <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:`linear-gradient(90deg,transparent,${GEM_COLORS[t.gem]},transparent)` }}/>
                  {/* quote mark */}
                  <p className="cg" style={{ fontSize:60, fontWeight:300, color:GEM_COLORS[t.gem], lineHeight:.55, marginBottom:20, opacity:.4 }}>&ldquo;</p>
                  <p className="cg" style={{ fontSize:17, fontWeight:300, fontStyle:"italic", lineHeight:1.8, color:`${C.ivory}70`, flex:1, marginBottom:24 }}>{t.quote}</p>
                  <div>
                    <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:10, fontWeight:600, letterSpacing:"0.18em", textTransform:"uppercase", color:GEM_COLORS[t.gem], marginBottom:4 }}>{t.name}</p>
                    <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:10, fontWeight:300, color:`${C.ivory}30` }}>{t.event}</p>
                    <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:400, letterSpacing:"0.1em", color:`${GEM_COLORS[t.gem]}70`, marginTop:3, textTransform:"uppercase" }}>{t.guests}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. PROCESS — gem numbered steps
      ══════════════════════════════════════ */}
      <section style={{ background:C.ivory, padding:"80px clamp(24px,5vw,64px)" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <Reveal>
            <div style={{ textAlign:"center", marginBottom:52 }}>
              <p className="label" style={{ color:C.gold, marginBottom:14 }}>The Methodology</p>
              <h2 className="cg" style={{ fontSize:"clamp(30px,4vw,52px)", fontWeight:300, color:C.ink }}>
                The Curated <span className="rs" style={{ fontStyle:"italic" }}>Journey.</span>
              </h2>
            </div>
          </Reveal>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:3 }}>
            {[
              { num:"01", gem:"gold",    title:"Concept & Vision",           desc:"Vision boarding, budget engineering, and your complete week mapped." },
              { num:"02", gem:"ruby",    title:"Venue Procurement",          desc:"Exclusive palace access. Direct negotiations. Insider rates." },
              { num:"03", gem:"emerald", title:"Design & Architecture",      desc:"3D spatial approval before a single element is placed on site." },
              { num:"04", gem:"diamond", title:"Logistics & Hospitality",    desc:"Timeline, VIP fleet, F&B tasting, international guest management." },
              { num:"05", gem:"gold",    title:"Flawless Execution",         desc:"Shadow teams deployed. Family stays as guests, not coordinators." },
            ].map((step,i) => (
              <Reveal key={i} delay={i*.07}>
                <div style={{ background:GEM_BG[step.gem], border:`0.5px solid ${GEM_BORDER[step.gem]}`, padding:"28px 20px", position:"relative" }}>
                  <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:`linear-gradient(90deg,transparent,${GEM_COLORS[step.gem]},transparent)` }}/>
                  <p className="cg" style={{ fontSize:44, fontWeight:300, color:`${GEM_COLORS[step.gem]}20`, lineHeight:1, marginBottom:12 }}>{step.num}</p>
                  <p className="cg" style={{ fontSize:17, fontWeight:400, color:C.ink, marginBottom:10 }}>{step.title}</p>
                  <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:11, fontWeight:300, lineHeight:1.8, color:C.stone }}>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gem divider */}
      <div style={{ background:C.ivory, padding:"0 clamp(24px,5vw,64px)" }}>
        <GemDivider gems={["emerald","diamond","gold","ruby"]}/>
      </div>

      {/* ══════════════════════════════════════
          8. BLOG CARDS — gem top lines
      ══════════════════════════════════════ */}
      <section style={{ background:C.white, padding:"80px clamp(24px,5vw,64px)" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:12, marginBottom:44 }}>
            <Reveal>
              <p className="label" style={{ color:C.gold, marginBottom:14 }}>Wedding Guides</p>
              <h2 className="cg" style={{ fontSize:"clamp(30px,4vw,52px)", fontWeight:300, color:C.ink }}>
                Plan smarter with <span className="es" style={{ fontStyle:"italic" }}>expert guides.</span>
              </h2>
            </Reveal>
            <Link href="/blog">
              <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:500, letterSpacing:"0.22em", textTransform:"uppercase", color:C.goldDark, borderBottom:`0.5px solid ${C.gold}60`, paddingBottom:2, cursor:"pointer" }}>All Articles →</span>
            </Link>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:3 }}>
            {BLOG_CARDS.map((b,i) => {
              const gcol = { g:C.gold, r:C.ruby, e:C.emerald, d:C.diamondDark, g2:C.gold, r2:C.ruby }[b.gem] || C.gold;
              return (
                <Reveal key={i} delay={i*.06}>
                  <Link href={b.href}>
                    <div className={`blog-card ${b.gem}`} style={{ overflow:"hidden", cursor:"pointer", height:"100%", display:"flex", flexDirection:"column", border:`0.5px solid rgba(0,0,0,0.08)`, position:"relative" }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = `${gcol}50`}
                      onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)"}>
                      <div style={{ height:180, position:"relative", overflow:"hidden", background:C.cream }}>
                        <Image src={b.img} alt={b.alt} fill quality={100} className="object-cover"
                          style={{ filter:"grayscale(15%)", transition:"transform .55s, filter .4s" }}
                          sizes="(max-width:768px) 100vw, 33vw"
                          onMouseEnter={e => { e.target.style.transform="scale(1.04)"; e.target.style.filter="grayscale(0)"; }}
                          onMouseLeave={e => { e.target.style.transform="scale(1)"; e.target.style.filter="grayscale(15%)"; }}
                        />
                        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(13,10,6,.65) 0%, transparent 55%)" }}/>
                        {/* gem chip */}
                        <span style={{ position:"absolute", top:12, left:12, fontFamily:"'Montserrat',sans-serif", fontSize:8, fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", background:gcol, color:C.ink, padding:"4px 12px", borderRadius:1 }}>
                          {b.tag}
                        </span>
                      </div>
                      <div style={{ padding:"22px 20px 20px", flex:1, display:"flex", flexDirection:"column", background:C.white }}>
                        <p className="cg" style={{ fontSize:18, fontWeight:400, lineHeight:1.4, color:C.ink, flex:1, marginBottom:14 }}>{b.title}</p>
                        <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:500, letterSpacing:"0.2em", textTransform:"uppercase", color:gcol }}>
                          Read Guide →
                        </p>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          9. FAQ — ivory, gold accents
      ══════════════════════════════════════ */}
      <section style={{ background:C.cream, padding:"80px clamp(24px,5vw,64px)" }}>
        <div style={{ maxWidth:720, margin:"0 auto" }}>
          <Reveal>
            <div style={{ textAlign:"center", marginBottom:44 }}>
              <p className="label" style={{ color:C.gold, marginBottom:14 }}>Planning FAQs</p>
              <h2 className="cg" style={{ fontSize:"clamp(28px,3.5vw,48px)", fontWeight:300, color:C.ink }}>
                Wedding Planner <span className="gs" style={{ fontStyle:"italic" }}>Jaipur FAQ.</span>
              </h2>
            </div>
          </Reveal>
          {FAQS.map((faq,idx) => (
            <Reveal key={idx} delay={idx*.025}>
              <FAQItem q={faq.q} a={faq.a} id={`faq-wp-${idx}`}/>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          10. RELATED — gem service grid
      ══════════════════════════════════════ */}
      <section style={{ background:C.white, padding:"64px clamp(24px,5vw,64px)" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <Reveal>
            <div style={{ textAlign:"center", marginBottom:36 }}>
              <p className="label" style={{ color:C.gold, marginBottom:14 }}>All Services</p>
              <h2 className="cg" style={{ fontSize:"clamp(26px,3.5vw,44px)", fontWeight:300, color:C.ink }}>
                One Team. <span className="ds" style={{ fontStyle:"italic" }}>Every Wedding Event.</span>
              </h2>
            </div>
          </Reveal>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:3 }}>
            {RELATED.map((r,i) => (
              <Reveal key={i} delay={i*.04}>
                <Link href={r.href}>
                  <div style={{ border:`0.5px solid ${GEM_BORDER[r.gem]}`, padding:"22px 18px", textAlign:"center", cursor:"pointer", transition:"background .25s, box-shadow .25s", position:"relative", overflow:"hidden" }}
                    onMouseEnter={e => { e.currentTarget.style.background=GEM_BG[r.gem]; e.currentTarget.style.boxShadow=`0 0 16px ${GEM_COLORS[r.gem]}18`; }}
                    onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.boxShadow="none"; }}>
                    <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:`linear-gradient(90deg,transparent,${GEM_COLORS[r.gem]},transparent)`, opacity:.6 }}/>
                    <r.icon size={16} color={GEM_COLORS[r.gem]} style={{ margin:"0 auto 10px" }}/>
                    <p className="cg" style={{ fontSize:15, fontWeight:400, color:C.ink, marginBottom:4 }}>{r.label}</p>
                    <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:300, color:C.stone }}>{r.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          11. FINAL CTA — dark, all gems
      ══════════════════════════════════════ */}
      <section style={{ background:C.ink, padding:"100px clamp(24px,5vw,64px)", textAlign:"center", position:"relative", overflow:"hidden" }}>
        {/* Background bloom */}
        <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none", opacity:.06 }}
          viewBox="0 0 1280 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Bloom x={640} y={250} r={200} color={C.gold}/>
          <Bloom x={200} y={250} r={80}  color={C.ruby}   opacity={1}/>
          <Bloom x={1080} y={250} r={80} color={C.emerald} opacity={1}/>
        </svg>

        {/* Watermark */}
        <p className="cg" style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", fontSize:"min(22vw,200px)", fontWeight:300, color:`${C.gold}06`, letterSpacing:"-.04em", whiteSpace:"nowrap", pointerEvents:"none", userSelect:"none" }}>
          WEDDING
        </p>

        <div style={{ position:"relative", zIndex:2, maxWidth:560, margin:"0 auto" }}>
          <Reveal>
            {/* Gem row */}
            <div style={{ display:"flex", justifyContent:"center", gap:10, marginBottom:28 }}>
              {[C.gold, C.ruby, C.emerald, C.diamond].map((col,i) => (
                <svg key={i} width="14" height="16" viewBox="0 0 14 16" fill="none">
                  <polygon points="7,0 14,5 14,11 7,16 0,11 0,5" fill={col} opacity=".6"/>
                  <polygon points="7,0 14,5 14,11 7,16 0,11 0,5" stroke={col} strokeWidth=".6" fill="none" opacity=".9"/>
                  <line x1="0" y1="5" x2="14" y2="5" stroke={col} strokeWidth=".5" opacity=".5"/>
                  <line x1="7" y1="0" x2="0" y2="5" stroke={col} strokeWidth=".4" opacity=".4"/>
                  <line x1="7" y1="0" x2="14" y2="5" stroke={col} strokeWidth=".4" opacity=".4"/>
                </svg>
              ))}
            </div>

            <h2 className="cg" style={{ fontSize:"clamp(44px,7vw,88px)", fontWeight:300, lineHeight:.9, marginBottom:20 }}>
              <span style={{ color:C.ivory }}>Ready to</span><br/>
              <span className="gs" style={{ fontStyle:"italic" }}>Execute.</span>
            </h2>

            <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:12, fontWeight:300, lineHeight:1.9, color:`${C.ivory}40`, marginBottom:8 }}>
              Palace venues for peak season book 8–12 months in advance.
            </p>
            <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:11, fontWeight:300, color:`${C.ivory}28`, marginBottom:44 }}>
              Don&apos;t leave your legacy to chance.
            </p>

            <a href={WA} target="_blank" rel="noopener noreferrer">
              <button style={{ fontFamily:"'Montserrat',sans-serif", fontSize:10, fontWeight:600, letterSpacing:"0.28em", textTransform:"uppercase", background:C.gold, color:C.ink, border:"none", padding:"20px 56px", borderRadius:1, cursor:"pointer", boxShadow:`0 0 40px ${C.gold}35` }}>
                Secure Our Agency &nbsp; →
              </button>
            </a>

            {/* Footer links */}
            <div style={{ marginTop:44, display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"8px 20px" }}>
              {[
                { l:"Wedding Anchor",     h:"/wedding-anchor-jaipur",      c:C.gold },
                { l:"Sangeet Host",       h:"/sangeet-anchor-jaipur",      c:C.ruby },
                { l:"Destination",        h:"/destination-wedding-anchor", c:C.emerald },
                { l:"Event Designing",    h:"/event-designing",            c:C.diamond },
                { l:"Best Anchor Jaipur", h:"/best-anchor-in-jaipur",      c:C.gold },
                { l:"Contact",            h:"/contact",                    c:C.stone },
              ].map(lk => (
                <Link key={lk.h} href={lk.h}>
                  <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:400, letterSpacing:"0.16em", textTransform:"uppercase", color:`${lk.c}45`, cursor:"pointer" }}
                    onMouseEnter={e => e.currentTarget.style.color = `${lk.c}90`}
                    onMouseLeave={e => e.currentTarget.style.color = `${lk.c}45`}>
                    {lk.l}
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
