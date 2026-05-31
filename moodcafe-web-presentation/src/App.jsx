import React, { useEffect, useState, useRef } from "react";
import {
  Coffee,
  MapPin,
  Search,
  Star,
  Users,
  Megaphone,
  Code2,
  Crown,
  Compass,
  Smartphone,
  CheckCircle2,
  Sparkles,
  MousePointerClick,
  BarChart3,
  BadgeDollarSign,
  CalendarCheck,
  Rocket,
  Heart,
  Camera,
  Moon,
  BookOpen,
  BriefcaseBusiness,
  Gamepad2,
  ArrowRight,
} from "lucide-react";
import { createWheelNavigator } from "./navigation.js";
import "./styles.css";

// ----------------------------------------------------
// DATA
// ----------------------------------------------------
const team = [
  {
    name: "Nguyen Ngoc Dong Hy",
    id: "SS196257",
    field: "Business Admin",
    role: "CEO & CFO",
    icon: Crown,
  },
  {
    name: "Nguyen Thanh Tung",
    id: "SS193945",
    field: "Business Admin",
    role: "COO",
    icon: Compass,
  },
  {
    name: "Phan Ngan Ha",
    id: "SS196281",
    field: "Multimedia",
    role: "CMO",
    icon: Megaphone,
  },
  {
    name: "Mai Van Tien Phat",
    id: "SE190838",
    field: "Software Eng",
    role: "CIO",
    icon: Code2,
  },
  {
    name: "Bui Ngoc Duy Khang",
    id: "SE190710",
    field: "Software Eng",
    role: "CPO",
    icon: Smartphone,
  },
  {
    name: "Nguyen Quang Nhat Nam",
    id: "SE192962",
    field: "Software Eng",
    role: "CTO",
    icon: Rocket,
  },
];

const moods = {
  Study: {
    icon: BookOpen,
    cafe: "Quiet Corner Café",
    tags: ["Quiet", "Wi-Fi", "Power Outlets"],
    ratingLabel: "Study Rating",
    rating: "4.8",
    message:
      "Best for focused study sessions. Quiet environment with fast Wi-Fi and plenty of power outlets.",
  },
  Work: {
    icon: BriefcaseBusiness,
    cafe: "The Productive Roast",
    tags: ["Fast Wi-Fi", "Spacious Desks", "A/C"],
    ratingLabel: "Work Rating",
    rating: "4.7",
    message:
      "Perfect for remote work and long focus hours. Great coffee, reliable Wi-Fi, and professional atmosphere.",
  },
  Date: {
    icon: Heart,
    cafe: "Sunset Latte House",
    tags: ["Cozy", "Romantic", "Dessert"],
    ratingLabel: "Date Rating",
    rating: "4.7",
    message:
      "Best for soft lighting and private conversations. Intimate seating and a beautiful golden-hour view.",
  },
  Photo: {
    icon: Camera,
    cafe: "Aesthetic Brew Studio",
    tags: ["Natural Light", "Minimal Décor", "Photo Spot"],
    ratingLabel: "Photo Rating",
    rating: "4.9",
    message:
      "Best for content creators and Instagram photos. Natural light, pastel tones, and curated aesthetics.",
  },
  Friends: {
    icon: Users,
    cafe: "The Social Grind",
    tags: ["Group Tables", "Loud OK", "Party Snacks"],
    ratingLabel: "Group Rating",
    rating: "4.6",
    message:
      "Best for large groups and casual hangouts. Big tables, fun vibes, and a menu everyone will enjoy.",
  },
  "Board Games": {
    icon: Gamepad2,
    cafe: "Game Night Café",
    tags: ["Group-friendly", "Board Games", "Large Tables"],
    ratingLabel: "Group Rating",
    rating: "4.8",
    message:
      "Best for friends and weekend hangouts. Hundreds of board games available for rent with snacks and drinks.",
  },
  "Open Late": {
    icon: Moon,
    cafe: "Midnight Coffee Lab",
    tags: ["Open Late", "Work-friendly", "Calm"],
    ratingLabel: "Late Night Rating",
    rating: "4.6",
    message:
      "Best for night study and deadline sessions. Stays open until 2 AM with strong espresso and a quiet vibe.",
  },
};

const uspCards = [
  {
    title: "PURPOSE-BASED SEARCH",
    text: "Users can search cafés for studying, working, dating, taking photos, group hangouts, board games, or late-night visits.",
  },
  {
    title: "DEEP EXPERIENCE FILTERS",
    text: "Filter by quietness, power outlets, Wi-Fi, large tables, décor, view, student-friendly price, parking, opening hours, solo-friendly, or group-friendly spaces.",
  },
  {
    title: "Verified Reviews",
    text: "Reviews can be verified through GPS check-in, QR code, booking history, receipt upload, or real experience photos. This helps reduce fake reviews and disguised advertising.",
  },
  {
    title: "Purpose-Based Ratings",
    text: "A café can have separate ratings for study, dates, photos, and group visits — not just one general score.",
  },
  {
    title: "Better Discovery for Cafés",
    text: "MoodCafe helps cafés reach users with real intent. This is especially useful for local cafés with strong concepts but limited social media visibility.",
  },
];

// ----------------------------------------------------
// HELPERS
// ----------------------------------------------------
function Reveal({
  as: Component = "div",
  children,
  animation = "rise",
  delay = 0,
  className = "",
  isActive = true,
  ...props
}) {
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

function SlideChrome({
  title = "MoodCaFé",
  subtitle = "Startup Pitch",
  counter,
  total,
}) {
  return (
    <>
      <div className="slide-chrome">
        <div className="left">
          <span className="mark">M</span>
          <span>
            <b>{title}</b> · {subtitle}
          </span>
        </div>
        <div className="right">
          <span className="coral">•</span>
          <span>EXE101 · Presenter: Team</span>
        </div>
      </div>
      <div className="slide-foot">
        <span>V1.0 · Ho Chi Minh / Earth</span>
        <span className="counter">
          {String(counter).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
    </>
  );
}

function SectionDivider({ active, index, totalSlides, roman, title }) {
  return (
    <section className={`slide s-section ${active ? "active" : ""}`}>
      <SlideChrome counter={index + 1} total={totalSlides} />
      <div
        className="slide-inner"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "28px",
          minHeight: "100%",
          width: "100%",
        }}
      >
        <Reveal
          isActive={active}
          delay={0}
          as="div"
          style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "clamp(80px, 10vw, 160px)",
            color: "var(--coral)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          {roman}.
        </Reveal>
        <Reveal
          isActive={active}
          delay={100}
          as="h2"
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 800,
            fontSize: "clamp(54px, 7vw, 110px)",
            letterSpacing: "-0.028em",
            lineHeight: 1,
            color: "var(--ink)",
            margin: "0 auto",
          }}
        >
          {title}
          <span style={{ color: "var(--coral)" }}>.</span>
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
  const [selectedMood, setSelectedMood] = useState("Study");
  const totalSlides = 19;
  const moodKeys = Object.keys(moods);
  const activeMoodData = moods[selectedMood];
  const ActiveIcon = activeMoodData.icon;

  const deckRef = useRef(null);

  // Deck Navigation
  useEffect(() => {
    const go = (n) => {
      setCurrentSlide((prev) =>
        Math.max(
          0,
          Math.min(totalSlides - 1, typeof n === "function" ? n(prev) : n),
        ),
      );
    };

    const wheelNavigator = createWheelNavigator({
      onNavigate: (direction) => go((p) => p + direction),
    });

    const handleKeyDown = (e) => {
      if (["ArrowRight", "PageDown", " ", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
        go((p) => p + 1);
      } else if (["ArrowLeft", "PageUp", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
        go((p) => p - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        go(0);
      } else if (e.key === "End") {
        e.preventDefault();
        go(totalSlides - 1);
      }
    };

    const handleWheel = (e) => {
      wheelNavigator.handleWheel(e);
    };

    let tx = 0,
      ty = 0;
    const handleTouchStart = (e) => {
      tx = e.touches[0].clientX;
      ty = e.touches[0].clientY;
    };
    const handleTouchMove = (e) => {
      e.preventDefault();
    };
    const handleTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - tx;
      const dy = e.changedTouches[0].clientY - ty;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
        go((p) => p + (dx < 0 ? 1 : -1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      wheelNavigator.destroy();
    };
  }, [totalSlides]);

  const p = (i) => ({
    isActive: currentSlide === i,
    counter: i + 1,
    total: totalSlides,
  });

  return (
    <>
      <div
        id="deck"
        ref={deckRef}
        style={{
          width: `${totalSlides * 100}vw`,
          transform: `translateX(-${currentSlide * 100}vw)`,
        }}
      >
        {/* 0. HERO */}
        <section
          className={`slide s-cover ${currentSlide === 0 ? "active" : ""}`}
        >
          <SlideChrome {...p(0)} />
          <div className="slide-inner">
            <div className="copy">
              <Reveal isActive={currentSlide === 0} delay={0}>
                <span className="eyebrow">Startup Pitch · 2026</span>
              </Reveal>
              <Reveal isActive={currentSlide === 0} delay={100} as="h1">
                Mood<em>CaFé</em>
                <span className="dot">.</span>
              </Reveal>
              <Reveal
                isActive={currentSlide === 0}
                delay={200}
                as="p"
                className="lead"
              >
                Find the right café for every mood. A café discovery app that
                helps users find cafés by mood, purpose, and area.
              </Reveal>
            </div>
            <div className="art">
              <span className="corner tl"></span>
              <span className="corner tr"></span>
              <span className="corner bl"></span>
              <span className="corner br"></span>
              <img src="/1.jpg" alt="MoodCafe Abstract Hero" />
            </div>
          </div>
        </section>

        {/* 1. DIVIDER: TEAM */}
        <SectionDivider
          active={currentSlide === 1}
          index={1}
          totalSlides={totalSlides}
          roman="I"
          title={
            <>
              Team &amp; <em>Roles</em>
            </>
          }
        />

        {/* 2. TEAM */}
        <section
          className={`slide s-content layout-full ${currentSlide === 2 ? "active" : ""}`}
        >
          <SlideChrome {...p(2)} />
          <div className="slide-inner" style={{ alignContent: "center" }}>
            <div className="head" style={{ marginBottom: "40px" }}>
              <Reveal isActive={currentSlide === 2} delay={0}>
                <span className="eyebrow">Our Team</span>
              </Reveal>
              <Reveal isActive={currentSlide === 2} delay={100} as="h2">
                Team &amp; <em>Roles</em>
                <span className="dot">.</span>
              </Reveal>
              <Reveal
                isActive={currentSlide === 2}
                delay={150}
                as="p"
                className="body"
              >
                6 members · 3 specialties
              </Reveal>
            </div>
            <div
              className="labs-grid"
              style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}
            >
              {team.map((member, idx) => {
                const TIcon = member.icon;
                return (
                  <Reveal
                    isActive={currentSlide === 2}
                    delay={200 + idx * 50}
                    className="lab"
                    key={idx}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                      }}
                    >
                      <div
                        className="lab-img"
                        style={{
                          width: "64px",
                          height: "64px",
                          flexShrink: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "var(--bone)",
                          border: "1px solid var(--line-soft)",
                          borderRadius: "50%",
                          margin: 0,
                          aspectRatio: "1/1",
                        }}
                      >
                        <TIcon size={28} color="var(--coral)" />
                      </div>
                      <div>
                        <div
                          className="num-row"
                          style={{ marginBottom: "2px" }}
                        >
                          <span
                            style={{ color: "var(--coral)", fontWeight: "600" }}
                          >
                            {member.role}
                          </span>
                        </div>
                        <h4 style={{ fontSize: "16px", marginBottom: "2px" }}>
                          {member.name}
                        </h4>
                        <p style={{ fontSize: "11px", margin: 0 }}>
                          {member.id} • {member.field}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. DIVIDER: IDEA */}
        <SectionDivider
          active={currentSlide === 3}
          index={3}
          totalSlides={totalSlides}
          roman="II"
          title={
            <>
              Idea <em>Overview</em>
            </>
          }
        />

        {/* 4. IDEA */}
        <section
          className={`slide s-content layout-right ${currentSlide === 4 ? "active" : ""}`}
        >
          <SlideChrome {...p(4)} />
          <div className="slide-inner">
            <div className="copy">
              <Reveal isActive={currentSlide === 4} delay={0}>
                <span className="eyebrow">Concept</span>
              </Reveal>
              <Reveal isActive={currentSlide === 4} delay={100} as="h2">
                Idea <em>Overview</em>
                <span className="dot">.</span>
              </Reveal>
              <Reveal
                isActive={currentSlide === 4}
                delay={150}
                as="p"
                className="body"
              >
                MoodCaFé helps users discover cafés that match their real needs,
                not just their location.
              </Reveal>

              <ul style={{ marginTop: "24px" }}>
                <Reveal
                  isActive={currentSlide === 4}
                  delay={200}
                  as="li"
                  style={{ marginBottom: "12px" }}
                >
                  <b
                    style={{ color: "var(--ink)", fontFamily: "var(--serif)" }}
                  >
                    Product:
                  </b>{" "}
                  A café discovery app that helps users find cafés by mood,
                  purpose, and area.
                </Reveal>
                <Reveal
                  isActive={currentSlide === 4}
                  delay={300}
                  as="li"
                  style={{ marginBottom: "12px" }}
                >
                  <b
                    style={{ color: "var(--ink)", fontFamily: "var(--serif)" }}
                  >
                    Target:
                  </b>{" "}
                  Gen Z students and young office workers in HCMC.
                </Reveal>
                <Reveal
                  isActive={currentSlide === 4}
                  delay={400}
                  as="li"
                  style={{ marginBottom: "12px" }}
                >
                  <b
                    style={{ color: "var(--ink)", fontFamily: "var(--serif)" }}
                  >
                    Secondary:
                  </b>{" "}
                  Freelancers, content creators, groups, and tourists.
                </Reveal>
                <Reveal
                  isActive={currentSlide === 4}
                  delay={300}
                  as="li"
                  style={{ marginBottom: "12px" }}
                >
                  <b
                    style={{ color: "var(--ink)", fontFamily: "var(--serif)" }}
                  >
                    Innovation:
                  </b>{" "}
                  MoodCafe shifts café discovery from location-based search to
                  intention-based discovery.
                </Reveal>
                <Reveal
                  isActive={currentSlide === 4}
                  delay={400}
                  as="li"
                  style={{ marginBottom: "12px" }}
                >
                  <b
                    style={{ color: "var(--ink)", fontFamily: "var(--serif)" }}
                  >
                    How It Works:
                  </b>{" "}
                  It helps users find cafés based on 4 layers: Planned area,
                  Purpose, Experience filters, Verified reviews.
                </Reveal>
              </ul>
            </div>
            <div className="art" style={{ alignSelf: "center" }}>
              <img src="/2.jpg" alt="Concept abstract" />
            </div>
          </div>
        </section>

        {/* 5. DIVIDER: PROBLEM */}
        <SectionDivider
          active={currentSlide === 5}
          index={5}
          totalSlides={totalSlides}
          roman="III"
          title={
            <>
              Problem <em>Statement</em>
            </>
          }
        />

        {/* 6. PROBLEM */}
        <section
          className={`slide s-content layout-left ${currentSlide === 6 ? "active" : ""}`}
        >
          <SlideChrome {...p(6)} />
          <div className="slide-inner">
            <div className="copy">
              <Reveal isActive={currentSlide === 6} delay={0}>
                <span className="eyebrow">Pain Points</span>
              </Reveal>
              <Reveal isActive={currentSlide === 6} delay={100} as="h2">
                Problem <em>Statement</em>
                <span className="dot">.</span>
              </Reveal>
              <Reveal
                isActive={currentSlide === 6}
                delay={200}
                as="p"
                className="lead"
                style={{
                  fontStyle: "italic",
                  color: "var(--coral)",
                  borderLeft: "4px solid var(--coral)",
                  paddingLeft: "16px",
                }}
              >
                Users spend too much time finding the right café, while good
                cafés struggle to reach the right audience.
              </Reveal>
              <div style={{ display: "flex", gap: "32px", marginTop: "24px" }}>
                <Reveal
                  isActive={currentSlide === 6}
                  delay={300}
                  style={{ flex: 1 }}
                >
                  <h4
                    style={{
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginBottom: "12px",
                      color: "var(--ink-soft)",
                    }}
                  >
                    User Pain Points
                  </h4>
                  <ul
                    style={{
                      fontSize: "12px",
                      paddingLeft: "16px",
                      lineHeight: "1.6",
                    }}
                  >
                    <li>
                      Short-video reviews are inspiring, but hard to filter.
                    </li>
                    <li>
                      Map apps are strong for directions, but weak in mood
                      discovery.
                    </li>
                    <li>Overall ratings are too general.</li>
                    <li>
                      Users don't know if reviews are trustworthy or sponsored.
                    </li>
                  </ul>
                </Reveal>
                <Reveal
                  isActive={currentSlide === 6}
                  delay={400}
                  style={{ flex: 1 }}
                >
                  <h4
                    style={{
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginBottom: "12px",
                      color: "var(--ink-soft)",
                    }}
                  >
                    Café Pain Points
                  </h4>
                  <ul
                    style={{
                      fontSize: "12px",
                      paddingLeft: "16px",
                      lineHeight: "1.6",
                    }}
                  >
                    <li>
                      Many cafés with strong concepts are hard to discover.
                    </li>
                    <li>
                      Depend heavily on social media trends or paid promotion.
                    </li>
                    <li>
                      Lack data about what users are actually searching for.
                    </li>
                    <li>Difficult to reach audience with real intent.</li>
                  </ul>
                </Reveal>
              </div>
            </div>
            <div className="art" style={{ alignSelf: "center" }}>
              <img src="/problem-statement.jpg" alt="Problem abstract" />
            </div>
          </div>
        </section>

        {/* 7. DIVIDER: SOLUTION */}
        <SectionDivider
          active={currentSlide === 7}
          index={7}
          totalSlides={totalSlides}
          roman="IV"
          title={
            <>
              Solution &amp; <em>USP</em>
            </>
          }
        />

        {/* 8. SOLUTION (USP) */}
        <section
          className={`slide s-stats layout-full ${currentSlide === 8 ? "active" : ""}`}
        >
          <SlideChrome {...p(8)} />
          <div className="slide-inner">
            <div className="head" style={{ marginBottom: "30px" }}>
              <Reveal isActive={currentSlide === 8} delay={0}>
                <span className="eyebrow">Differentiation</span>
              </Reveal>
              <Reveal isActive={currentSlide === 8} delay={100} as="h2">
                Solution &amp; <em>USP</em>
                <span className="dot">.</span>
              </Reveal>

              <Reveal
                isActive={currentSlide === 8}
                delay={200}
                style={{ display: "flex", gap: "16px", marginTop: "20px" }}
              >
                <div
                  style={{
                    flex: 1,
                    padding: "16px",
                    background: "var(--paper)",
                    border: "1px solid var(--line-soft)",
                    borderRadius: "8px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "10px",
                      textTransform: "uppercase",
                      opacity: 0.6,
                    }}
                  >
                    Google Maps
                  </div>
                  <h4
                    style={{
                      fontSize: "20px",
                      margin: "8px 0",
                      fontFamily: "var(--serif)",
                    }}
                  >
                    Where
                  </h4>
                  <div style={{ color: "var(--coral)", fontSize: "12px" }}>
                    Location & directions
                  </div>
                </div>
                <div
                  style={{
                    flex: 1,
                    padding: "16px",
                    background: "var(--paper)",
                    border: "1px solid var(--line-soft)",
                    borderRadius: "8px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "10px",
                      textTransform: "uppercase",
                      opacity: 0.6,
                    }}
                  >
                    TikTok/IG
                  </div>
                  <h4
                    style={{
                      fontSize: "20px",
                      margin: "8px 0",
                      fontFamily: "var(--serif)",
                    }}
                  >
                    Trending
                  </h4>
                  <div style={{ color: "var(--coral)", fontSize: "12px" }}>
                    Viral, but hard to filter
                  </div>
                </div>
                <div
                  style={{
                    flex: 1,
                    padding: "16px",
                    background: "var(--coral)",
                    color: "#fff",
                    borderRadius: "8px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "10px",
                      textTransform: "uppercase",
                      opacity: 0.8,
                    }}
                  >
                    MoodCaFé
                  </div>
                  <h4
                    style={{
                      fontSize: "20px",
                      margin: "8px 0",
                      fontFamily: "var(--serif)",
                    }}
                  >
                    Best Fit
                  </h4>
                  <div style={{ color: "#f0e6d3", fontSize: "12px" }}>
                    Mood · Purpose · Experience · Verified
                  </div>
                </div>
              </Reveal>
            </div>

            <div
              className="grid"
              style={{ gridTemplateColumns: "repeat(5, 1fr)", gap: "16px" }}
            >
              {uspCards.map((card, idx) => (
                <Reveal
                  isActive={currentSlide === 8}
                  delay={300 + idx * 100}
                  className="stat"
                  style={{
                    textAlign: "left",
                    padding: "16px",
                    background: "var(--paper)",
                    border: "1px solid var(--line-soft)",
                  }}
                  key={idx}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      opacity: 0.3,
                      fontFamily: "var(--mono)",
                      fontWeight: "700",
                    }}
                  >
                    0{idx + 1}
                  </div>
                  <div
                    className="label"
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.2",
                      marginTop: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    {card.title}
                  </div>
                  <div
                    className="sub"
                    style={{
                      whiteSpace: "normal",
                      fontSize: "12px",
                      lineHeight: "1.5",
                    }}
                  >
                    {card.text}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 9. DIVIDER: DEMO */}
        <SectionDivider
          active={currentSlide === 9}
          index={9}
          totalSlides={totalSlides}
          roman="V"
          title={
            <>
              Interactive <em>Demo</em>
            </>
          }
        />

        {/* 10. DEMO */}
        <section
          className={`slide s-content layout-full ${currentSlide === 10 ? "active" : ""}`}
        >
          <SlideChrome {...p(10)} />
          <div className="slide-inner" style={{ gridTemplateColumns: "1fr" }}>
            <div
              className="demoLayout"
              style={{ marginTop: "0", height: "100%", alignItems: "center" }}
            >
              <div className="demoPanel">
                <Reveal isActive={currentSlide === 10} delay={0}>
                  <span className="eyebrow">Interactive Demo</span>
                </Reveal>
                <Reveal
                  isActive={currentSlide === 10}
                  delay={100}
                  as="h3"
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "32px",
                    fontWeight: "800",
                    marginBottom: "16px",
                  }}
                >
                  How MoodCaFé Works.
                </Reveal>
                <Reveal
                  isActive={currentSlide === 10}
                  delay={200}
                  as="p"
                  className="lead"
                >
                  Tap a mood to see a live café recommendation change in real
                  time.
                </Reveal>
                <Reveal
                  isActive={currentSlide === 10}
                  delay={300}
                  className="demoButtons"
                >
                  {moodKeys.map((mood) => {
                    const MIcon = moods[mood].icon;
                    return (
                      <button
                        key={mood}
                        onClick={() => setSelectedMood(mood)}
                        className={
                          selectedMood === mood
                            ? "demoButton active"
                            : "demoButton"
                        }
                      >
                        <MIcon size={16} /> {mood}
                      </button>
                    );
                  })}
                </Reveal>
              </div>

              <div
                className="appMockup"
                style={{
                  transform: "scale(0.85)",
                  transformOrigin: "center right",
                }}
              >
                <div className="screen">
                  <div className="appTop">
                    <div>
                      <h3>MoodCaFé</h3>
                      <p>District 1 • Tonight</p>
                    </div>
                    <Coffee size={20} />
                  </div>
                  <div className="searchBox">
                    <Search size={18} />
                    <span>Find cafés for {selectedMood.toLowerCase()}</span>
                  </div>
                  <div className="appChipGrid">
                    {moodKeys.map((mood) => (
                      <button
                        key={mood}
                        onClick={() => setSelectedMood(mood)}
                        className={
                          selectedMood === mood ? "appChip active" : "appChip"
                        }
                      >
                        {mood}
                      </button>
                    ))}
                  </div>
                  <div className="demoResult" style={{ padding: "24px" }}>
                    <span className="miniLabel">Top Match</span>
                    <ActiveIcon size={32} color="var(--coral)" />
                    <h3 style={{ fontSize: "20px", marginTop: "12px" }}>
                      {activeMoodData.cafe}
                    </h3>
                    <div className="tagRow">
                      {activeMoodData.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        margin: "12px 0",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "28px",
                          color: "var(--coral)",
                          fontWeight: "700",
                        }}
                      >
                        {activeMoodData.rating}
                      </div>
                      <div style={{ fontSize: "12px", lineHeight: "1.2" }}>
                        <b>{activeMoodData.ratingLabel}</b>
                        <br />
                        <span style={{ opacity: 0.6 }}>
                          Based on verified check-ins
                        </span>
                      </div>
                    </div>
                    <p style={{ fontSize: "12px", marginTop: "8px" }}>
                      {activeMoodData.message}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. DIVIDER: MVP */}
        <SectionDivider
          active={currentSlide === 11}
          index={11}
          totalSlides={totalSlides}
          roman="VI"
          title={
            <>
              MVP <em>Features</em>
            </>
          }
        />

        {/* 12. MVP */}
        <section
          className={`slide s-content layout-right ${currentSlide === 12 ? "active" : ""}`}
        >
          <SlideChrome {...p(12)} />
          <div className="slide-inner">
            <div className="copy">
              <Reveal isActive={currentSlide === 12} delay={0}>
                <span className="eyebrow">Roadmap</span>
              </Reveal>
              <Reveal isActive={currentSlide === 12} delay={100} as="h2">
                MVP <em>Features</em>
                <span className="dot">.</span>
              </Reveal>
              <Reveal
                isActive={currentSlide === 12}
                delay={200}
                as="p"
                className="body"
              >
                MoodCaFé will start with the most essential features for café
                discovery.
              </Reveal>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                  marginTop: "20px",
                }}
              >
                <Reveal
                  isActive={currentSlide === 12}
                  delay={300}
                  style={{
                    padding: "16px",
                    background: "var(--paper)",
                    border: "1px solid var(--line-soft)",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "9px",
                      textTransform: "uppercase",
                      opacity: 0.6,
                      marginBottom: "6px",
                    }}
                  >
                    Phase 1 · User
                  </div>
                  <h3 style={{ fontSize: "15px", marginBottom: "8px" }}>
                    MVP – User
                  </h3>
                  <ul
                    style={{
                      fontSize: "11.5px",
                      paddingLeft: "16px",
                      margin: 0,
                      lineHeight: "1.4",
                    }}
                  >
                    <li>Search by planned area</li>
                    <li>Filter by mood & purpose</li>
                    <li>Profiles (photos, menu)</li>
                    <li>See verified reviews</li>
                    <li>Save favorite cafés</li>
                    <li>Get directions</li>
                  </ul>
                </Reveal>
                <Reveal
                  isActive={currentSlide === 12}
                  delay={400}
                  style={{
                    padding: "16px",
                    background: "var(--paper)",
                    border: "1px solid var(--line-soft)",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "9px",
                      textTransform: "uppercase",
                      opacity: 0.6,
                      marginBottom: "6px",
                    }}
                  >
                    Phase 1 · Café
                  </div>
                  <h3 style={{ fontSize: "15px", marginBottom: "8px" }}>
                    MVP – Café
                  </h3>
                  <ul
                    style={{
                      fontSize: "11.5px",
                      paddingLeft: "16px",
                      margin: 0,
                      lineHeight: "1.4",
                    }}
                  >
                    <li>Create & manage profile</li>
                    <li>
                      Update photos, menu & amenities (Wi-Fi, power outlets,
                      parking, seating)
                    </li>
                    <li>Display concept & opening hours</li>
                    <li>
                      Tags: study-friendly, date spot, aesthetic, open late,
                      group-friendly
                    </li>
                  </ul>
                </Reveal>
                <Reveal
                  isActive={currentSlide === 12}
                  delay={450}
                  style={{
                    gridColumn: "1 / -1",
                    padding: "16px",
                    background: "var(--paper)",
                    border: "1px solid var(--line-soft)",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "9px",
                      textTransform: "uppercase",
                      opacity: 0.6,
                      marginBottom: "6px",
                    }}
                  >
                    Phase 2 · Extended
                  </div>
                  <h3 style={{ fontSize: "15px", marginBottom: "8px" }}>
                    Scale Features
                  </h3>
                  <ul
                    style={{
                      fontSize: "11.5px",
                      paddingLeft: "16px",
                      margin: 0,
                      lineHeight: "1.4",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "4px",
                    }}
                  >
                    <li>Table booking</li>
                    <li>Vouchers and offers</li>
                    <li>Café dashboard</li>
                    <li>Analytics: views, saves, clicks</li>
                  </ul>
                </Reveal>
                <Reveal
                  isActive={currentSlide === 12}
                  delay={500}
                  style={{
                    gridColumn: "1 / -1",
                    padding: "12px 16px",
                    background: "var(--coral)",
                    color: "#fff",
                    borderRadius: "8px",
                    fontSize: "11px",
                    lineHeight: "1.4",
                  }}
                >
                  <b>Note:</b> We start with search, filters, profiles, and
                  reviews — expanding to booking and analytics after gaining
                  users and partners.
                </Reveal>
              </div>
            </div>
            <div className="art" style={{ alignSelf: "center" }}>
              <img src="/mvp.jpg" alt="MVP Concept abstract" />
            </div>
          </div>
        </section>

        {/* 13. DIVIDER: REVENUE */}
        <SectionDivider
          active={currentSlide === 13}
          index={13}
          totalSlides={totalSlides}
          roman="VII"
          title={
            <>
              Revenue <em>Model</em>
            </>
          }
        />

        {/* 14. REVENUE */}
        <section
          className={`slide s-stats s-revenue layout-full ${currentSlide === 14 ? "active" : ""}`}
        >
          <SlideChrome {...p(14)} />
          <div className="slide-inner">
            <div className="head">
              <Reveal isActive={currentSlide === 14} delay={0}>
                <span className="eyebrow">Business Model</span>
              </Reveal>
              <Reveal isActive={currentSlide === 14} delay={100} as="h2">
                Revenue <em>Model</em>
                <span className="dot">.</span>
              </Reveal>
              <Reveal
                isActive={currentSlide === 14}
                delay={200}
                as="p"
                className="body"
                style={{ maxWidth: "600px" }}
              >
                MoodCaFé follows a B2B2C, two-sided platform model. Users access
                the app for free — revenue mainly comes from cafés and partner
                brands.
              </Reveal>
            </div>

            <div className="grid revenueGrid">
              <Reveal
                isActive={currentSlide === 14}
                delay={300}
                className="stat revenueCard"
              >
                <div className="revenueNum">01</div>
                <div className="label">Subscription for Cafés</div>
                <div
                  className="sub"
                  style={{
                    whiteSpace: "normal",
                    fontSize: "13px",
                    lineHeight: "1.5",
                  }}
                >
                  Cafés pay monthly/yearly for advanced tools: more photos,
                  profile customization, vouchers, analytics, booking.
                </div>
              </Reveal>
              <Reveal
                isActive={currentSlide === 14}
                delay={400}
                className="stat revenueCard"
              >
                <div className="revenueNum">02</div>
                <div className="label">Commission from Bookings</div>
                <div
                  className="sub"
                  style={{
                    whiteSpace: "normal",
                    fontSize: "13px",
                    lineHeight: "1.5",
                  }}
                >
                  A fixed fee or percentage from each successful table booking —
                  especially for date spots or group-friendly spaces.
                </div>
              </Reveal>
              <Reveal
                isActive={currentSlide === 14}
                delay={500}
                className="stat revenueCard"
              >
                <div className="revenueNum">03</div>
                <div className="label">Sponsored Listings</div>
                <div
                  className="sub"
                  style={{
                    whiteSpace: "normal",
                    fontSize: "13px",
                    lineHeight: "1.5",
                  }}
                >
                  Cafés can pay for featured placements: top study cafés, date
                  spots, etc. Sponsored content is always clearly labeled.
                </div>
              </Reveal>
              <Reveal
                isActive={currentSlide === 14}
                delay={600}
                className="stat revenueCard"
              >
                <div className="revenueNum">04</div>
                <div className="label">Third-Party Advertising</div>
                <div
                  className="sub"
                  style={{
                    whiteSpace: "normal",
                    fontSize: "13px",
                    lineHeight: "1.5",
                  }}
                >
                  Contextual ads from e-wallets, ride-hailing apps, banks,
                  fashion, or Gen Z lifestyle services.
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 15. DIVIDER: SCALE */}
        <SectionDivider
          active={currentSlide === 15}
          index={15}
          totalSlides={totalSlides}
          roman="VIII"
          title={
            <>
              Scale-Up <em>Vision</em>
            </>
          }
        />

        {/* 16. SCALE */}
        <section
          className={`slide s-content layout-right ${currentSlide === 16 ? "active" : ""}`}
        >
          <SlideChrome {...p(16)} />
          <div className="slide-inner">
            <div className="copy">
              <Reveal isActive={currentSlide === 16} delay={0}>
                <span className="eyebrow">Vision</span>
              </Reveal>
              <Reveal isActive={currentSlide === 16} delay={100} as="h2">
                Scale-Up <em>Vision</em>
                <span className="dot">.</span>
              </Reveal>
              <Reveal
                isActive={currentSlide === 16}
                delay={200}
                as="p"
                className="body"
                style={{ maxWidth: "600px" }}
              >
                From one city to a national lifestyle discovery platform.
              </Reveal>

              <div
                className="grid"
                style={{
                  gridTemplateColumns: "1fr",
                  gap: "16px",
                  marginTop: "24px",
                }}
              >
                <Reveal
                  isActive={currentSlide === 16}
                  delay={300}
                  className="stat"
                  style={{
                    textAlign: "left",
                    padding: "16px",
                    background: "var(--paper)",
                    border: "1px solid var(--line-soft)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "32px",
                      opacity: 0.3,
                      fontFamily: "var(--serif)",
                      fontWeight: "900",
                    }}
                  >
                    01
                  </div>
                  <div
                    className="label"
                    style={{
                      fontSize: "14px",
                      marginTop: "4px",
                      marginBottom: "4px",
                    }}
                  >
                    Geographic Expansion
                  </div>
                  <div
                    className="sub"
                    style={{
                      whiteSpace: "normal",
                      fontSize: "12px",
                      lineHeight: "1.5",
                    }}
                  >
                    Start in Ho Chi Minh City, then expand to Hanoi, Da Nang, Da
                    Lat, Nha Trang, and Hoi An.
                  </div>
                </Reveal>
                <Reveal
                  isActive={currentSlide === 16}
                  delay={400}
                  className="stat"
                  style={{
                    textAlign: "left",
                    padding: "16px",
                    background: "var(--paper)",
                    border: "1px solid var(--line-soft)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "32px",
                      opacity: 0.3,
                      fontFamily: "var(--serif)",
                      fontWeight: "900",
                    }}
                  >
                    02
                  </div>
                  <div
                    className="label"
                    style={{
                      fontSize: "14px",
                      marginTop: "4px",
                      marginBottom: "4px",
                    }}
                  >
                    Category Expansion
                  </div>
                  <div
                    className="sub"
                    style={{
                      whiteSpace: "normal",
                      fontSize: "12px",
                      lineHeight: "1.5",
                    }}
                  >
                    After cafés, extend to milk tea, dessert, brunch, coworking
                    spaces, workshops, and lifestyle venues.
                  </div>
                </Reveal>
                <Reveal
                  isActive={currentSlide === 16}
                  delay={500}
                  className="stat"
                  style={{
                    textAlign: "left",
                    padding: "16px",
                    background: "var(--paper)",
                    border: "1px solid var(--line-soft)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "32px",
                      opacity: 0.3,
                      fontFamily: "var(--serif)",
                      fontWeight: "900",
                    }}
                  >
                    03
                  </div>
                  <div
                    className="label"
                    style={{
                      fontSize: "14px",
                      marginTop: "4px",
                      marginBottom: "4px",
                    }}
                  >
                    Data & Personalization
                  </div>
                  <div
                    className="sub"
                    style={{
                      whiteSpace: "normal",
                      fontSize: "12px",
                      lineHeight: "1.5",
                    }}
                  >
                    With more user behaviour data, recommend places based on
                    habits, mood, location, budget, and time of day.
                  </div>
                </Reveal>
              </div>
            </div>
            <div className="art" style={{ alignSelf: "center" }}>
              <img src="/scale-up.jpg" alt="Scale Up Vision Map" />
            </div>
          </div>
        </section>

        {/* 17. PITCH */}
        <section
          className={`slide s-end ${currentSlide === 17 ? "active" : ""}`}
        >
          <SlideChrome {...p(17)} />
          <div
            className="slide-inner"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              minHeight: "100%",
              width: "100%",
            }}
          >
            <div style={{ maxWidth: "800px", width: "100%" }}>
              <Reveal
                isActive={currentSlide === 17}
                delay={0}
                as="h2"
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(40px, 8vw, 80px)",
                  fontWeight: "900",
                  color: "var(--ink)",
                  margin: "0 0 40px",
                  letterSpacing: "-0.03em",
                }}
              >
                Mood
                <em style={{ color: "var(--coral)", fontStyle: "italic" }}>
                  CaFé
                </em>
              </Reveal>
              <Reveal
                isActive={currentSlide === 17}
                delay={100}
                as="p"
                style={{
                  fontSize: "32px",
                  color: "var(--ink-soft)",
                  fontStyle: "italic",
                  margin: "16px 0",
                }}
              >
                Not just nearby.
              </Reveal>
              <Reveal
                isActive={currentSlide === 17}
                delay={200}
                as="p"
                style={{
                  fontSize: "32px",
                  color: "var(--ink-soft)",
                  fontStyle: "italic",
                  margin: "16px 0",
                }}
              >
                Not just trending.
              </Reveal>
              <Reveal
                isActive={currentSlide === 17}
                delay={300}
                as="p"
                style={{
                  fontSize: "32px",
                  color: "var(--coral)",
                  fontWeight: "600",
                  margin: "16px 0",
                }}
              >
                Find the café that fits your mood.
              </Reveal>
              <Reveal
                isActive={currentSlide === 17}
                delay={400}
                as="div"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "var(--ink-faint)",
                  marginTop: "60px",
                }}
              >
                From café search to lifestyle discovery.
              </Reveal>
            </div>
          </div>
        </section>

        {/* 18. THANKS */}
        <section
          className={`slide s-end ${currentSlide === 18 ? "active" : ""}`}
        >
          <SlideChrome {...p(18)} />
          <div
            className="slide-inner"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              minHeight: "100%",
              width: "100%",
            }}
          >
            <Reveal
              isActive={currentSlide === 18}
              delay={0}
              className="word"
              style={{
                fontSize: "clamp(50px, 10vw, 100px)",
                color: "var(--ink)",
              }}
            >
              Thank{" "}
              <em style={{ color: "var(--coral)", fontStyle: "italic" }}>
                You
              </em>
              .
            </Reveal>
            <Reveal
              isActive={currentSlide === 18}
              delay={100}
              className="footer"
              style={{
                fontSize: "16px",
                marginTop: "32px",
                color: "var(--ink-soft)",
              }}
            >
              Presented by Team MoodCaFé
            </Reveal>
            <Reveal
              isActive={currentSlide === 18}
              delay={200}
              as="p"
              style={{
                color: "var(--ink-faint)",
                fontStyle: "italic",
                marginTop: "16px",
              }}
            >
              Let's make café discovery smarter, faster, and more personal.
            </Reveal>
          </div>
        </section>
      </div>

      {/* Navigation Controls */}
      <div id="nav">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            className={`dot ${currentSlide === i ? "active" : ""}`}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
      <div className="deck-progress">
        <div
          className="bar"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        ></div>
      </div>
    </>
  );
}
