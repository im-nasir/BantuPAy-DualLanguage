"use client";

import Head from "next/head";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function About() {
  const t = useTranslations("AboutPage");

  return (
    <>
      {/* SEO Optimization */}
      <Head>
        <title>Bantu Pay - {t("title")}</title>
        <meta name="description" content={t("description")} />
        <meta property="og:title" content={`Bantu Pay - ${t("title")}`} />
        <meta property="og:description" content={t("description")} />
        <meta property="og:image" content="/About.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Modern About Section */}
      <section className="about-page">
        {/* Geometric Background */}
        <div className="about-bg">
          <div className="geometric-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
          <div className="mesh-gradient"></div>
        </div>

        {/* Header Section */}
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="header-badge">
            <span className="badge-dot"></span>
            <span className="badge-label">{t("title")}</span>
          </div>
          <h1 className="about-main-title">
            <span className="title-line">Empowering Financial</span>
            <span className="title-line highlight">Freedom</span>
          </h1>
          <p className="about-subtitle">{t("description")}</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="about-grid">
          {/* Left Column - Content */}
          <motion.div 
            className="content-column"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Mission Card */}
            <div className="info-card mission-card">
              <div className="card-header">
                <div className="card-icon">🎯</div>
                <h3 className="card-title">Our Mission</h3>
              </div>
              <p className="card-content">{t("solution")}</p>
            </div>

            {/* Values Grid */}
            <div className="values-grid">
              <motion.div 
                className="value-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="value-icon">🔐</div>
                <h4 className="value-title">Security First</h4>
                <p className="value-desc">{t("point1")}</p>
              </motion.div>

              <motion.div 
                className="value-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="value-icon">🌐</div>
                <h4 className="value-title">Global Access</h4>
                <p className="value-desc">{t("point2")}</p>
              </motion.div>

              <motion.div 
                className="value-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="value-icon">⚡</div>
                <h4 className="value-title">Speed & Efficiency</h4>
                <p className="value-desc">{t("point3")}</p>
              </motion.div>
            </div>

            {/* Story Section */}
            <div className="story-section">
              <h3 className="story-title">Our Story</h3>
              <div className="story-content">
                <p className="story-text">{t("paragraph1")}</p>
                <p className="story-text">{t("paragraph2")}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual & Additional Content */}
          <motion.div 
            className="visual-column"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Image Showcase */}
            <div className="image-showcase">
              <div className="main-image-container">
                <div className="image-border"></div>
                <Image
                  src="/About.png"
                  alt="Bantu Pay - About Us"
                  fill
                  className="showcase-image"
                  loading="lazy"
                />
                <div className="image-caption-overlay">
                  <span className="caption-text">{t("image_caption")}</span>
                </div>
              </div>

              {/* Tech Stack Indicators */}
              <div className="tech-indicators">
                <motion.div 
                  className="tech-badge"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <span className="tech-icon">🛡️</span>
                  <span className="tech-label">Secure</span>
                </motion.div>

                <motion.div 
                  className="tech-badge"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="tech-icon">🚀</span>
                  <span className="tech-label">Fast</span>
                </motion.div>

                <motion.div 
                  className="tech-badge"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="tech-icon">💎</span>
                  <span className="tech-label">Premium</span>
                </motion.div>
              </div>
            </div>

            {/* Additional Content Cards */}
            <div className="additional-content">
              {/* Vision Card */}
              <motion.div 
                className="info-card vision-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="card-header">
                  <div className="card-icon">🔮</div>
                  <h3 className="card-title">{t("vision_title")}</h3>
                </div>
                <p className="card-content">{t("vision_content")}</p>
              </motion.div>

              {/* Impact Card */}
              <motion.div 
                className="info-card impact-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="card-header">
                  <div className="card-icon">🌍</div>
                  <h3 className="card-title">{t("impact_title")}</h3>
                </div>
                <p className="card-content">{t("impact_content")}</p>
              </motion.div>

              {/* Team & Innovation Cards Side by Side */}
              <div className="side-by-side-cards">
                <motion.div 
                  className="info-card team-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="card-header">
                    <div className="card-icon">👥</div>
                    <h3 className="card-title">{t("team_title")}</h3>
                  </div>
                  <p className="card-content">{t("team_content")}</p>
                </motion.div>

                <motion.div 
                  className="info-card innovation-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <div className="card-header">
                    <div className="card-icon">💡</div>
                    <h3 className="card-title">{t("innovation_title")}</h3>
                  </div>
                  <p className="card-content">{t("innovation_content")}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Metrics */}
        <motion.div 
          className="metrics-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="metrics-container">
            <div className="metric-item">
              <div className="metric-value">2019</div>
              <div className="metric-label">Founded</div>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <div className="metric-value">150+</div>
              <div className="metric-label">Team Members</div>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <div className="metric-value">$2M+</div>
              <div className="metric-label">Transactions</div>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <div className="metric-value">5★</div>
              <div className="metric-label">Rating</div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
