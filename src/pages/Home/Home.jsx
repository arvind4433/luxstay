import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { EXPERIENCES } from "../../data/experiences";
import "./Home.css";

export default function Home() {
  const heroSectionRef = useRef(null);
  const revealSectionRef = useRef(null);
  const experienceSectionRef = useRef(null);
  const [heroProgress, setHeroProgress] = useState(0);
  const [revealProgress, setRevealProgress] = useState(0);
  const [experienceProgress, setExperienceProgress] = useState(0);
  const [activePanel, setActivePanel] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (heroSectionRef.current) {
        const heroRect = heroSectionRef.current.getBoundingClientRect();
        const heroHeight = heroRect.height || window.innerHeight || 1;
        const heroVisible = Math.min(Math.max((-heroRect.top) / Math.max(heroHeight - window.innerHeight, 1), 0), 1);
        setHeroProgress(heroVisible);
      }

      if (!revealSectionRef.current) return;

      const rect = revealSectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const sectionHeight = rect.height || viewportHeight;
      const visibleProgress = (viewportHeight - rect.top) / (sectionHeight + viewportHeight * 0.2);
      const clamped = Math.min(Math.max(visibleProgress, 0), 1);
      setRevealProgress(clamped);

      if (experienceSectionRef.current) {
        const experienceRect = experienceSectionRef.current.getBoundingClientRect();
        const experienceHeight = experienceRect.height || viewportHeight;
        const experienceVisible = (viewportHeight - experienceRect.top) / (experienceHeight + viewportHeight * 0.15);
        setExperienceProgress(Math.min(Math.max(experienceVisible, 0), 1));
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const revealOpacity = Math.min(Math.max(revealProgress * 1.4, 0.18), 1);

  const revealScale = 0.985 + revealOpacity * 0.015;
  const heroOpacity = Math.max(0, 1 - heroProgress * 1.15);
  const heroScale = 1 + heroProgress * 0.015;
  const heroTextTranslate = heroProgress * -70;
  const experienceOpacity = experienceProgress < 0.02
    ? experienceProgress / 0.02
    : 1;
  const introTranslate = 24 - Math.min(experienceProgress, 1) * 24;

  return (
    <section className="home home--fullscreen">
      <section ref={heroSectionRef} className="home-hero-scene">
        <div className="home-hero-base">
          <video
            className="home-hero-base__video"
            src="/videos/homepagevideo.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{ transform: `scale(${heroScale})` }}
          />
          <img
            className="home-hero-base__image"
            src="/images/homepage/HOME%20MAIN%20PIC.png"
            alt="LuxStay skyline view"
            style={{ transform: `scale(${heroScale})` }}
          />

          <div className="home-hero-base__overlay" />

          <div
            className="home-hero-base__content"
            style={{
              opacity: heroOpacity,
              transform: `translate(-50%, ${heroTextTranslate}px)`,
            }}
          >
            <div className="home-hero-base__eyebrow">LuxStay</div>
            <h1>Discover a world where luxury feels effortless.</h1>
            <p>
              A full-screen homepage base is ready. Next changes hum step by step iske upar build karenge.
            </p>
          </div>

          <div
            className="home-hero-base__scroll"
            style={{ opacity: Math.max(0, 1 - heroProgress * 1.8) }}
          >
            <span />
            <small>Scroll</small>
          </div>
        </div>
      </section>

      <section ref={revealSectionRef} className="home-reveal-scene">
        <div className="home-reveal-scene__sticky">
          <div
            className="home-reveal-card"
            style={{
              opacity: revealOpacity,
              transform: `scale(${revealScale})`,
            }}
          >
            <div className="home-reveal-card__eyebrow">An elevated arrival</div>
            <p>
              Discover a world where luxury
              <br />
              meets the sky, and dreams take
              <br />
              flight.
            </p>
            <span>at</span>
            <h2>LuxStay</h2>
            <div className="home-reveal-card__glow" />
          </div>
        </div>
      </section>

      <section ref={experienceSectionRef} className="home-experience-scene">
        <div
          className="home-experience-scene__sticky"
          style={{ opacity: experienceOpacity }}
        >
          <div
            className="home-experience-scene__intro"
            style={{
              opacity: Math.min(1, experienceProgress * 1.5),
              transform: `translateY(${introTranslate}px)`,
            }}
          >
            <span>Curated experiences</span>
            <h3>Four signature escapes, crafted to leave one unforgettable impression.</h3>
          </div>

          <div className="home-experience-grid">
            {EXPERIENCES.map((panel, index) => (
              (() => {
                const staggerStart = index * 0.12;
                const cardProgress = Math.min(
                  Math.max((experienceProgress - staggerStart) / 0.42, 0),
                  1
                );

                return (
                  <Link
                    key={panel.title}
                    to={`/experiences/${panel.slug}`}
                    className={`home-experience-card${activePanel === index ? " is-active" : ""}`}
                    onMouseEnter={() => setActivePanel(index)}
                    onFocus={() => setActivePanel(index)}
                    style={{
                      opacity: cardProgress,
                    }}
                  >
                    <img src={panel.image} alt={panel.title} className="home-experience-card__image" />
                    <div className="home-experience-card__overlay" />

                    <div className="home-experience-card__content">
                      <h4>{panel.title}</h4>
                      <div className="home-experience-card__details">
                        <p>{panel.description}</p>
                        <span className="home-experience-card__cta">Explore more</span>
                      </div>
                    </div>
                  </Link>
                );
              })()
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
