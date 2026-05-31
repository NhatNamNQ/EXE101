import React, { useEffect, useState, useRef } from "react";
import {
  Crown, Compass, Megaphone, Code2, Smartphone, Rocket,
  ShoppingBag, Sparkles, Scissors, Coins, Star, Heart, ArrowRight
} from "lucide-react";
import { createWheelNavigator } from "./navigation.js";
import "./styles.css";

// ----------------------------------------------------
// DATA
// ----------------------------------------------------
const team = [
  { name: "Nguyen Ngoc Dong Hy", id: "SS196257", field: "Business Admin", role: "CEO & CFO", icon: Crown },
  { name: "Nguyen Thanh Tung", id: "SS193945", field: "Business Admin", role: "COO", icon: Compass },
  { name: "Phan Ngan Ha", id: "SS196281", field: "Multimedia", role: "CMO", icon: Megaphone },
  { name: "Mai Van Tien Phat", id: "SE190838", field: "Software Eng", role: "CTO", icon: Code2 },
  { name: "Bui Ngoc Duy Khang", id: "SE190710", field: "Software Eng", role: "CPO", icon: Smartphone },
  { name: "Nguyen Quang Nhat Nam", id: "SE192962", field: "Software Eng", role: "TECH LEAD", icon: Rocket },
];

const uspCards = [
  { title: "Occasion", text: "Sort by the event: Wedding & Gala, Clubbing, Beachwear, Casual, or Office elegance." },
  { title: "Condition", text: "Standardized grading from NWT (New With Tags), Like New (1-time worn), to Very Good and Good." },
  { title: "Sizing", text: "Detailed body measurements (height, weight, 3 dimensions) of the previous owner to ensure accurate fits." },
  { title: "Brands", text: "Curated discovery of international labels like Zara and premium local designer brands." },
];

// ----------------------------------------------------
// HELPERS
// ----------------------------------------------------
function Reveal({ as: Component = "div", children, animation = "rise", delay = 0, className = "", isActive = true, ...props }) {
  return (
    <Component
      data-reveal={animation}
      data-revealed={isActive ? "true" : "false"}
      style={{ "--reveal-delay": `${delay}ms` }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}

function SlideChrome({ title = "DrobeShare", subtitle = "Pitch Deck", counter, total }) {
  return (
    <>
      <div className="slide-chrome">
        <div className="left">
          <span className="mark">S</span>
          <span><b>{title}</b> · {subtitle}</span>
        </div>
        <div className="right">
          <span className="coral">•</span>
          <span>EXE101 · Presenter: Team</span>
        </div>
      </div>
      <div className="slide-foot">
        <span>V1.0 · A/W 2026</span>
        <span className="counter">{String(counter).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
      </div>
    </>
  );
}

function SectionDivider({ active, index, totalSlides, roman, title }) {
  return (
    <section className={`slide s-section ${active ? 'active' : ''}`}>
      <SlideChrome counter={index + 1} total={totalSlides} />
      <div className="slide-inner" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '28px', minHeight: '100%', width: '100%'}}>
        <Reveal isActive={active} delay={0} as="div" style={{fontFamily:'var(--serif)', fontStyle:'italic', fontWeight:500, fontSize:'clamp(80px, 10vw, 160px)', color:'var(--coral-dark)', lineHeight:1, letterSpacing:'-0.02em'}}>
          {roman}.
        </Reveal>
        <Reveal isActive={active} delay={100} as="h2" style={{fontFamily:'var(--sans)', fontWeight:800, fontSize:'clamp(54px, 7vw, 110px)', letterSpacing:'-0.028em', lineHeight:1, color:'var(--ink)', margin:'0 auto'}}>
          {title}<span style={{color:'var(--coral)'}}>.</span>
        </Reveal>
      </div>
    </section>
  );
}

// ----------------------------------------------------
// APP
// ----------------------------------------------------
export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 16;
  const deckRef = useRef(null);

  // Deck Navigation
  useEffect(() => {
    const go = (n) => {
      setCurrentSlide(prev => Math.max(0, Math.min(totalSlides - 1, typeof n === 'function' ? n(prev) : n)));
    };

    const wheelNavigator = createWheelNavigator({
      onNavigate: (direction) => go(p => p + direction),
    });

    const handleKeyDown = (e) => {
      if (['ArrowRight', 'PageDown', ' ', 'ArrowDown'].includes(e.key)) { e.preventDefault(); go(p => p + 1); } 
      else if (['ArrowLeft', 'PageUp', 'ArrowUp'].includes(e.key)) { e.preventDefault(); go(p => p - 1); } 
      else if (e.key === 'Home') { e.preventDefault(); go(0); } 
      else if (e.key === 'End') { e.preventDefault(); go(totalSlides - 1); }
    };

    const handleWheel = (e) => {
      wheelNavigator.handleWheel(e);
    };

    let tx = 0, ty = 0;
    const handleTouchStart = (e) => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; };
    const handleTouchMove = (e) => { e.preventDefault(); };
    const handleTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - tx;
      const dy = e.changedTouches[0].clientY - ty;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
        go(p => p + (dx < 0 ? 1 : -1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      wheelNavigator.destroy();
    };
  }, [totalSlides]);

  const p = (i) => ({ isActive: currentSlide === i, counter: i + 1, total: totalSlides });

  return (
    <>
      <div id="deck" ref={deckRef} style={{ width: `${totalSlides * 100}vw`, transform: `translateX(-${currentSlide * 100}vw)` }}>
        
        {/* 0. HERO */}
        <section className={`slide s-cover ${currentSlide === 0 ? 'active' : ''}`}>
          <SlideChrome {...p(0)} />
          <div className="slide-inner">
            <div className="copy">
              <Reveal isActive={currentSlide===0} delay={0}><span className="eyebrow">A/W 2026 Pitch Deck</span></Reveal>
              <Reveal isActive={currentSlide===0} delay={100} as="h1">Drobe<em>Share</em><span className="dot">.</span></Reveal>
              <Reveal isActive={currentSlide===0} delay={200} as="p" className="lead">
                Where style meets sustainability. A circular economy platform for high-end fashion and occasion wear.
              </Reveal>
            </div>
            <div className="art">
              <span className="corner tl"></span><span className="corner tr"></span>
              <span className="corner bl"></span><span className="corner br"></span>
              <img src="/giao-dien.jpg" alt="DrobeShare app demo cover" style={{objectFit: 'cover', width: '100%', height: '100%', opacity: 0.92}} />
            </div>
          </div>
        </section>

        {/* 1. DIVIDER: TEAM */}
        <SectionDivider active={currentSlide === 1} index={1} totalSlides={totalSlides} roman="I" title={<>Team &amp; <em style={{color: 'var(--coral)'}}>Roles</em></>} />

        {/* 2. TEAM */}
        <section className={`slide s-content layout-full ${currentSlide === 2 ? 'active' : ''}`}>
          <SlideChrome {...p(2)} />
          <div className="slide-inner" style={{alignContent: 'center'}}>
            <div className="head" style={{marginBottom: '20px'}}>
              <Reveal isActive={currentSlide===2} delay={0}><span className="eyebrow">Our Team</span></Reveal>
              <Reveal isActive={currentSlide===2} delay={100} as="h2">Team &amp; <em>Roles</em><span className="dot">.</span></Reveal>
              <Reveal isActive={currentSlide===2} delay={150} as="p" className="body">6 members · Diverse expertise</Reveal>
            </div>
            <div className="labs-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {team.map((member, idx) => {
                const TIcon = member.icon;
                return (
                  <Reveal isActive={currentSlide===2} delay={200 + (idx * 50)} className="lab" key={idx}>
                    <div style={{display:'flex', alignItems:'center', gap:'16px'}}>
                      <div className="lab-img" style={{width: '64px', height: '64px', flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center', background:'var(--bone)', border:'1px solid var(--line-soft)', borderRadius:'50%', margin:0, aspectRatio:'1/1'}}>
                        <TIcon size={28} color="var(--coral)"/>
                      </div>
                      <div>
                        <div className="num-row" style={{marginBottom:'2px'}}><span style={{color:'var(--coral)', fontWeight:'600'}}>{member.role}</span></div>
                        <h4 style={{fontSize:'16px', marginBottom:'2px'}}>{member.name}</h4>
                        <p style={{fontSize:'11px', margin:0, color:'var(--ink-soft)'}}>{member.id} • {member.field}</p>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* 3. DIVIDER: IDEA */}
        <SectionDivider active={currentSlide === 3} index={3} totalSlides={totalSlides} roman="II" title={<>Idea <em style={{color: 'var(--coral)'}}>Overview</em></>} />

        {/* 4. IDEA */}
        <section className={`slide s-content layout-right ${currentSlide === 4 ? 'active' : ''}`}>
          <SlideChrome {...p(4)} />
          <div className="slide-inner">
            <div className="copy">
              <Reveal isActive={currentSlide===4} delay={0}><span className="eyebrow">Concept</span></Reveal>
              <Reveal isActive={currentSlide===4} delay={100} as="h2">Idea <em>Overview</em><span className="dot">.</span></Reveal>
              <Reveal isActive={currentSlide===4} delay={150} as="p" className="body">DrobeShare extends the lifecycle of fashion by connecting dress owners with those who need premium outfits.</Reveal>
              
              <ul style={{marginTop: '24px'}}>
                <Reveal isActive={currentSlide===4} delay={200} as="li" style={{marginBottom:'12px'}}>
                  <b style={{color:'var(--ink)', fontFamily:'var(--serif)'}}>Product:</b> A peer-to-peer marketplace focused on high-end occasion wear and local designer brands.
                </Reveal>
                <Reveal isActive={currentSlide===4} delay={300} as="li" style={{marginBottom:'12px'}}>
                  <b style={{color:'var(--ink)', fontFamily:'var(--serif)'}}>Target:</b> Gen Z & Millennials, eco-conscious young women.
                </Reveal>
                <Reveal isActive={currentSlide===4} delay={500} as="li">
                  <b style={{color:'var(--ink)', fontFamily:'var(--serif)'}}>Innovation:</b> Combines condition grading, specific body measurements, and occasion-based filters.
                </Reveal>
              </ul>
            </div>
            <div className="art" style={{ alignSelf: 'center', height: '100%' }}>
               <img src="/giao-dien.jpg" alt="DrobeShare marketplace app demo" style={{width:'100%', height:'100%', objectFit: 'cover', borderRadius: '12px'}} />
            </div>
          </div>
        </section>

        {/* 5. DIVIDER: PROBLEM */}
        <SectionDivider active={currentSlide === 5} index={5} totalSlides={totalSlides} roman="III" title={<>The Pain of <em style={{color: 'var(--coral)'}}>One-Time Wear</em></>} />

        {/* 6. PROBLEM */}
        <section className={`slide s-content layout-left ${currentSlide === 6 ? 'active' : ''}`}>
          <SlideChrome {...p(6)} />
          <div className="slide-inner">
            <div className="copy">
              <Reveal isActive={currentSlide===6} delay={0}><span className="eyebrow">Pain Points</span></Reveal>
              <Reveal isActive={currentSlide===6} delay={100} as="h2">The Pain of <em>One-Time Wear</em><span className="dot">.</span></Reveal>
              <Reveal isActive={currentSlide===6} delay={200} as="p" className="lead" style={{fontStyle:'italic', color:'var(--coral)', borderLeft:'4px solid var(--coral)', paddingLeft:'16px'}}>
                Premium dresses are bought for a single event, photographed once, and forgotten because wearing it again means "repeating outfits".
              </Reveal>
              <div style={{display:'flex', gap:'32px', marginTop:'24px'}}>
                <Reveal isActive={currentSlide===6} delay={300} style={{flex:1}}>
                  <h4 style={{fontSize:'12px', textTransform:'uppercase', letterSpacing:'1px', marginBottom:'12px', color:'var(--ink-soft)'}}>For Buyers</h4>
                  <ul style={{fontSize:'12px', paddingLeft:'16px', lineHeight:'1.6'}}>
                    <li>The cost of buying new designer dresses is too high.</li>
                    <li>Sizing anxiety when shopping second-hand online.</li>
                    <li>Hard to find outfits for highly specific occasions.</li>
                  </ul>
                </Reveal>
                <Reveal isActive={currentSlide===6} delay={400} style={{flex:1}}>
                  <h4 style={{fontSize:'12px', textTransform:'uppercase', letterSpacing:'1px', marginBottom:'12px', color:'var(--ink-soft)'}}>For Sellers</h4>
                  <ul style={{fontSize:'12px', paddingLeft:'16px', lineHeight:'1.6'}}>
                    <li>Full closets but "nothing to wear".</li>
                    <li>Throwing away clothes creates immense textile waste.</li>
                    <li>No trusted platform focused purely on occasion wear.</li>
                  </ul>
                </Reveal>
              </div>
            </div>
            <div className="art" style={{ alignSelf: 'center', height: '100%' }}>
              <img src="/problem-demo.jpg" alt="DrobeShare wardrobe and sizing workflow demo" style={{width:'100%', height:'100%', objectFit: 'cover', borderRadius: '12px'}} />
            </div>
          </div>
        </section>

        {/* 7. DIVIDER: SOLUTION */}
        <SectionDivider active={currentSlide === 7} index={7} totalSlides={totalSlides} roman="IV" title={<>Core <em style={{color: 'var(--coral)'}}>Features</em></>} />

        {/* 8. SOLUTION (USP) */}
        <section className={`slide s-stats layout-full ${currentSlide === 8 ? 'active' : ''}`}>
          <SlideChrome {...p(8)} />
          <div className="slide-inner" style={{ gridTemplateColumns: '0.92fr 1.08fr', gap: '36px', alignItems: 'center', justifyContent: 'center' }}>
            <div>
              <div className="head" style={{marginBottom: '20px'}}>
                <Reveal isActive={currentSlide===8} delay={0}><span className="eyebrow">Smart Filtering</span></Reveal>
                <Reveal isActive={currentSlide===8} delay={100} as="h2">Core <em>Features</em><span className="dot">.</span></Reveal>
                <Reveal isActive={currentSlide===8} delay={200} as="p" className="body" style={{maxWidth:'520px'}}>
                  Our MVP demo focuses on discoverability, condition clarity, and sizing confidence for secondhand fashion.
                </Reveal>
              </div>
              
              <div className="grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', paddingTop: '0', borderTop: 'none' }}>
                {uspCards.map((card, idx) => (
                  <Reveal isActive={currentSlide===8} delay={300 + (idx * 100)} className="stat" style={{textAlign:'left', padding:'16px', background:'var(--paper)', border:'1px solid var(--line-soft)', borderRadius: '12px'}} key={idx}>
                    <div style={{fontSize:'28px', opacity:0.3, fontFamily:'var(--mono)', fontWeight:'700', color: 'var(--coral-dark)'}}>0{idx+1}</div>
                    <div className="label" style={{fontSize:'15px', lineHeight:'1.2', marginTop:'10px', marginBottom:'8px', color: 'var(--coral)'}}>{card.title}</div>
                    <div className="sub" style={{whiteSpace:'normal', fontSize:'12px', lineHeight:'1.45'}}>{card.text}</div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal isActive={currentSlide===8} delay={350} className="art" style={{height: '520px', alignSelf: 'center'}}>
              <img src="/giao-dien.jpg" alt="DrobeShare MVP feature screens" style={{width:'100%', height:'100%', objectFit: 'cover', borderRadius: '12px'}} />
            </Reveal>
            </div>
        </section>

        {/* 9. DIVIDER: REVENUE */}
        <SectionDivider active={currentSlide === 9} index={9} totalSlides={totalSlides} roman="V" title={<>Revenue <em style={{color: 'var(--coral)'}}>Model</em></>} />

        {/* 10. REVENUE */}
        <section className={`slide s-stats s-revenue layout-full ${currentSlide === 10 ? 'active' : ''}`}>
          <SlideChrome {...p(10)} />
          <div className="slide-inner" style={{gridTemplateColumns: '0.95fr 1.05fr', gap: '36px', alignItems: 'center'}}>
            <div>
              <div className="head">
                <Reveal isActive={currentSlide===10} delay={0}><span className="eyebrow">Business Model</span></Reveal>
                <Reveal isActive={currentSlide===10} delay={100} as="h2">Revenue <em>Model</em><span className="dot">.</span></Reveal>
                <Reveal isActive={currentSlide===10} delay={200} as="p" className="body" style={{maxWidth:'560px'}}>A diversified income model designed to capture value at every stage of the garment's lifecycle.</Reveal>
              </div>
              
              <div className="grid revenueGrid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '20px'}}>
              <Reveal isActive={currentSlide===10} delay={300} className="stat revenueCard" style={{padding:'20px', background:'var(--paper)', borderRadius:'12px', border:'1px solid var(--line-soft)'}}>
                <div className="revenueNum" style={{fontSize: '48px', color: 'var(--coral-dark)', fontFamily: 'var(--serif)', fontStyle:'italic', lineHeight:1}}>T1</div>
                <div className="label" style={{fontSize:'20px', margin:'12px 0 8px', fontFamily: 'var(--serif)'}}>Commissions</div>
                <div className="sub" style={{whiteSpace:'normal', fontSize:'14px', lineHeight:'1.6'}}>A standard 5-10% transaction fee charged on peer-to-peer sales directly through the platform.</div>
              </Reveal>
              <Reveal isActive={currentSlide===10} delay={400} className="stat revenueCard" style={{padding:'20px', background:'var(--paper)', borderRadius:'12px', border:'1px solid var(--line-soft)'}}>
                <div className="revenueNum" style={{fontSize: '48px', color: 'var(--coral-dark)', fontFamily: 'var(--serif)', fontStyle:'italic', lineHeight:1}}>T2</div>
                <div className="label" style={{fontSize:'20px', margin:'12px 0 8px', fontFamily: 'var(--serif)'}}>Consignment</div>
                <div className="sub" style={{whiteSpace:'normal', fontSize:'14px', lineHeight:'1.6'}}>Premium service (20-30% fee) handling washing, studio photography, listing, and logistics for sellers.</div>
              </Reveal>
              <Reveal isActive={currentSlide===10} delay={500} className="stat revenueCard" style={{padding:'20px', background:'var(--paper)', borderRadius:'12px', border:'1px solid var(--line-soft)'}}>
                <div className="revenueNum" style={{fontSize: '48px', color: 'var(--coral-dark)', fontFamily: 'var(--serif)', fontStyle:'italic', lineHeight:1}}>T3</div>
                <div className="label" style={{fontSize:'20px', margin:'12px 0 8px', fontFamily: 'var(--serif)'}}>Visibility</div>
                <div className="sub" style={{whiteSpace:'normal', fontSize:'14px', lineHeight:'1.6'}}>Featured listings and premium ad placements for sellers wanting to clear inventory quickly.</div>
              </Reveal>
              <Reveal isActive={currentSlide===10} delay={600} className="stat revenueCard" style={{padding:'20px', background:'var(--paper)', borderRadius:'12px', border:'1px solid var(--line-soft)'}}>
                <div className="revenueNum" style={{fontSize: '48px', color: 'var(--coral-dark)', fontFamily: 'var(--serif)', fontStyle:'italic', lineHeight:1}}>T4</div>
                <div className="label" style={{fontSize:'20px', margin:'12px 0 8px', fontFamily: 'var(--serif)'}}>Partners</div>
                <div className="sub" style={{whiteSpace:'normal', fontSize:'14px', lineHeight:'1.6'}}>Revenue sharing with integrated local laundry services and tailoring hubs within the app.</div>
              </Reveal>
              </div>
            </div>
            <Reveal isActive={currentSlide===10} delay={350} className="art" style={{height: '520px', alignSelf: 'center'}}>
              <img src="/revenue-model.jpg" alt="DrobeShare revenue model visual" style={{width:'100%', height:'100%', objectFit: 'cover', borderRadius: '12px'}} />
            </Reveal>
          </div>
        </section>

        {/* 11. DIVIDER: SCALE */}
        <SectionDivider active={currentSlide === 11} index={11} totalSlides={totalSlides} roman="VI" title={<>Scale-Up <em style={{color: 'var(--coral)'}}>Vision</em></>} />

        {/* 12. SCALE */}
        <section className={`slide s-stats layout-full ${currentSlide === 12 ? 'active' : ''}`}>
          <SlideChrome {...p(12)} />
          <div className="slide-inner" style={{gridTemplateColumns: '0.9fr 1.1fr', gap: '36px', alignItems: 'center', justifyContent: 'center'}}>
            <div>
              <div className="head" style={{marginBottom: '24px'}}>
                <Reveal isActive={currentSlide===12} delay={0}><span className="eyebrow">Future Growth</span></Reveal>
                <Reveal isActive={currentSlide===12} delay={100} as="h2">Scale-Up <em>Vision</em><span className="dot">.</span></Reveal>
                <Reveal isActive={currentSlide===12} delay={200} as="p" className="body" style={{maxWidth:'560px'}}>From a niche resale app to a circular fashion platform.</Reveal>
              </div>
              <div className="grid" style={{gridTemplateColumns: '1fr', gap: '14px', paddingTop: 0, borderTop: 'none'}}>
                {[
                  "Building a Circular Fashion Ecosystem",
                  "Expanding Revenue Streams",
                  "Becoming a Sustainable Lifestyle Platform",
                ].map((item, idx) => (
                  <Reveal isActive={currentSlide===12} delay={300 + idx * 100} className="stat" style={{display:'flex', alignItems:'center', gap:'18px', padding:'18px 20px', background:'var(--paper)', border:'1px solid var(--line-soft)', borderRadius:'12px', textAlign:'left'}} key={item}>
                    <div style={{fontSize:'30px', color:'var(--coral-dark)', fontFamily:'var(--serif)', fontStyle:'italic', lineHeight:1}}>0{idx + 1}</div>
                    <div className="label" style={{fontSize:'17px', lineHeight:1.25, color:'var(--ink)', margin:0}}>{item}</div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal isActive={currentSlide===12} delay={350} className="art" style={{height: '520px', alignSelf: 'center'}}>
              <img src="/scale-up.jpg" alt="DrobeShare scale-up visual" style={{width:'100%', height:'100%', objectFit: 'cover', borderRadius: '12px'}} />
            </Reveal>
          </div>
        </section>

        {/* 13. DIVIDER: THE PITCH */}
        <SectionDivider active={currentSlide === 13} index={13} totalSlides={totalSlides} roman="VII" title={<>Drobe<em style={{color: 'var(--coral)'}}>Share</em></>} />

        {/* 14. PITCH */}
        <section className={`slide s-end ${currentSlide === 14 ? 'active' : ''}`}>
          <SlideChrome {...p(14)} />
          <div className="slide-inner" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '100%', width: '100%'}}>
            <div style={{maxWidth: '800px', width: '100%'}}>
              <Reveal isActive={currentSlide===14} delay={0} as="h2" style={{fontFamily:'var(--serif)', fontSize:'clamp(40px, 8vw, 80px)', fontWeight:'900', color:'var(--ink)', margin:'0 0 40px', letterSpacing:'-0.03em'}}>
                Drobe<em style={{color:'var(--coral)', fontStyle:'italic'}}>Share</em>
              </Reveal>
              <Reveal isActive={currentSlide===14} delay={100} as="p" style={{fontSize:'32px', color:'var(--ink-soft)', fontStyle:'italic', margin:'16px 0'}}>Not just a closet.</Reveal>
              <Reveal isActive={currentSlide===14} delay={200} as="p" style={{fontSize:'32px', color:'var(--ink-soft)', fontStyle:'italic', margin:'16px 0'}}>Not just second-hand.</Reveal>
              <Reveal isActive={currentSlide===14} delay={300} as="p" style={{fontSize:'32px', color:'var(--coral)', fontWeight:'600', margin:'16px 0'}}>Find the dress that fits your moment.</Reveal>
              <Reveal isActive={currentSlide===14} delay={400} as="div" style={{fontFamily:'var(--mono)', fontSize:'12px', textTransform:'uppercase', letterSpacing:'0.2em', color:'var(--ink-faint)', marginTop:'60px'}}>
                Where style meets sustainability.
              </Reveal>
            </div>
          </div>
        </section>

        {/* 15. THANKS */}
        <section className={`slide s-end ${currentSlide === 15 ? 'active' : ''}`}>
          <SlideChrome {...p(15)} />
          <div className="slide-inner" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '100%', width: '100%'}}>
            <Reveal isActive={currentSlide===15} delay={0} className="word" style={{fontSize:'clamp(50px, 10vw, 100px)', color:'var(--ink)'}}>Thank <em style={{color:'var(--coral)', fontStyle:'italic'}}>You</em>.</Reveal>
            <Reveal isActive={currentSlide===15} delay={100} className="footer" style={{fontSize:'16px', marginTop:'32px', color:'var(--ink-soft)'}}>Presented by Team DrobeShare</Reveal>
            <Reveal isActive={currentSlide===15} delay={200} as="p" style={{color:'var(--ink-faint)', fontStyle:'italic', marginTop:'16px'}}>Let's build a circular fashion ecosystem.</Reveal>
          </div>
        </section>

      </div>

      {/* Navigation Controls */}
      <div id="nav">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button 
            key={i} 
            className={`dot ${currentSlide === i ? 'active' : ''}`}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
      <div className="deck-progress"><div className="bar" style={{width: `${((currentSlide + 1) / totalSlides) * 100}%`}}></div></div>
    </>
  );
}
