import { Link, useParams } from "react-router-dom";
import { EXPERIENCES, EXPERIENCES_BY_SLUG } from "../../data/experiences";
import "./ExperienceDetail.css";

export default function ExperienceDetail() {
  const { slug } = useParams();
  const experience = EXPERIENCES_BY_SLUG[slug];

  if (!experience) {
    return (
      <section className="experience-page">
        <div className="experience-shell">
          <section className="experience-panel">
            <span className="experience-kicker">Experience not found</span>
            <h3>This curated page is not available right now.</h3>
            <div className="experience-links">
              <Link to="/" className="experience-link-card">
                <strong>Go to Homepage</strong>
                <span>Back to curated experiences</span>
              </Link>
              <Link to="/hotels" className="experience-link-card">
                <strong>Browse Hotels</strong>
                <span>Open hotel listings</span>
              </Link>
            </div>
          </section>
        </div>
      </section>
    );
  }

  const relatedExperiences = EXPERIENCES.filter((item) => item.slug !== experience.slug).slice(0, 3);

  return (
    <section className="experience-page">
      <div className="experience-hero">
        <img src={experience.image} alt={experience.title} className="experience-hero__image" />
        <div className="experience-hero__overlay" />
        <div className="experience-hero__content">
          <span className="experience-hero__eyebrow">{experience.eyebrow}</span>
          <h1>{experience.title}</h1>
          <p>{experience.intro}</p>
          <div className="experience-hero__actions">
            {experience.ctas.slice(0, 2).map((cta) => (
              <Link key={cta.to} to={cta.to} className="experience-btn experience-btn--primary">
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="experience-shell">
        <section className="experience-section experience-section--intro">
          <div>
            <span className="experience-kicker">Why choose this experience</span>
            <h2>Everything on this page is tailored to {experience.title.toLowerCase()} guests.</h2>
          </div>
          <p>{experience.description}</p>
        </section>

        <section className="experience-stats">
          {experience.stats.map((stat) => (
            <article key={stat.label} className="experience-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </section>

        <section className="experience-grid">
          <article className="experience-panel">
            <span className="experience-kicker">Highlights</span>
            <h3>What to expect</h3>
            <ul className="experience-list">
              {experience.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="experience-panel">
            <span className="experience-kicker">Plan next steps</span>
            <h3>Continue your booking journey</h3>
            <div className="experience-links">
              {experience.ctas.map((cta) => (
                <Link key={cta.to} to={cta.to} className="experience-link-card">
                  <strong>{cta.label}</strong>
                  <span>Open related page</span>
                </Link>
              ))}
            </div>
          </article>
        </section>

        <section className="experience-features">
          <div className="experience-section-heading">
            <span className="experience-kicker">What makes it work</span>
            <h3>Built to be useful, not just pretty</h3>
          </div>
          <div className="experience-feature-grid">
            {experience.features.map((feature) => (
              <article key={feature.title} className="experience-feature-card">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-related">
          <div className="experience-section-heading">
            <span className="experience-kicker">Explore more</span>
            <h3>Other curated experiences</h3>
          </div>
          <div className="experience-related-grid">
            {relatedExperiences.map((item) => (
              <Link key={item.slug} to={`/experiences/${item.slug}`} className="experience-related-card">
                <img src={item.image} alt={item.title} />
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
