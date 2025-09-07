import Image from "next/image";
import { useTranslations } from "next-intl";

const ImageText = () => {
  const t = useTranslations("IntroPage");

  return (
    <section className="hero-section">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-particles">
          <div className="particle-field">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`floating-particle particle-${i % 5}`}></div>
            ))}
          </div>
        </div>
        <div className="hero-grid"></div>
      </div>

      {/* Main Content Container */}
      <div className="hero-container">
        {/* Left Side: Content */}
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <span className="badge-icon">🚀</span>
            <span className="badge-text">Next Generation Payment</span>
            <div className="badge-glow"></div>
          </div>

          {/* Main Title */}
          <div className="hero-title-wrapper">
            <h1 className="hero-title">
              <span className="title-brand">Bantu Pay</span>
              <span className="title-main">{t("title")}</span>
              <span className="title-accent">{t("title2")}</span>
            </h1>
            <div className="title-underline"></div>
          </div>

          {/* Description */}
          <p className="hero-description">
            {t("description")}
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <button className="cta-primary">
              <span className="cta-text">Get Started</span>
              <div className="cta-glow"></div>
              <div className="cta-ripple"></div>
            </button>
            <button className="cta-secondary">
              <span className="cta-text">Learn More</span>
              <svg className="cta-arrow" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>

        {/* Right Side: Visual */}
        <div className="hero-visual">
          <div className="image-container">
            <div className="image-glow"></div>
            <div className="image-frame">
              <Image
                src="/Artboard.webp"
                alt={t("title")}
                width={900}
                height={700}
                priority={true}
                className="hero-image"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="floating-elements">
              <div className="floating-card card-1">
                <div className="card-icon">💳</div>
                <div className="card-text">Secure Payments</div>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">⚡</div>
                <div className="card-text">Instant Transfer</div>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">🌍</div>
                <div className="card-text">Global Reach</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll to explore</div>
        <div className="scroll-arrow">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M7 13L12 18L17 13M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ImageText;
