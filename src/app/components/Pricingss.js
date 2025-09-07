"use client";

import { FaCheckCircle, FaTimesCircle, FaCrown, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const plans = [
  { 
    name: "GOLD", 
    price: "3.00 USD", 
    features: [true, true, true, true, true, true, true, true, true],
    popular: true,
    icon: "👑",
    gradient: "from-yellow-400 to-yellow-600"
  },
  { 
    name: "PREMIUM", 
    price: "2.00 USD", 
    features: [true, true, false, true, true, true, true, false, false],
    popular: false,
    icon: "💎",
    gradient: "from-purple-400 to-purple-600"
  },
  { 
    name: "DIASPORA", 
    price: "0.00 USD", 
    features: [true, true, false, true, true, false, true, true, false],
    popular: false,
    icon: "🌍",
    gradient: "from-blue-400 to-blue-600"
  },
  { 
    name: "SILVER", 
    price: "1.00 USD", 
    features: [true, true, false, true, false, true, true, false, false],
    popular: false,
    icon: "🥈",
    gradient: "from-gray-400 to-gray-600"
  },
  { 
    name: "DIASPORA+", 
    price: "3.00 USD", 
    features: [true, true, false, true, true, true, true, true, true],
    popular: false,
    icon: "🚀",
    gradient: "from-green-400 to-green-600"
  },
  { 
    name: "BASIC", 
    price: "0.00 USD", 
    features: [true, true, false, true, false, true, true, false, false],
    popular: false,
    icon: "📱",
    gradient: "from-orange-400 to-orange-600"
  },
];

const featuresList = [
  "CURRENT ACC",
  "SAVINGS ACC",
  "VIRTUAL VISA",
  "Withdraw from Agent",
  "Top up VISA",
  "Topup Mobile Money",
  "Marketplace",
  "VISA Payouts",
  "2nd Number + OTP",
];

export default function Pricing() {
  return (
    <section className="pricing-section">
      {/* Modern Background */}
      <div className="pricing-background">
        <div className="pricing-gradient"></div>
        <div className="pricing-mesh"></div>
        <div className="pricing-shapes">
          <div className="pricing-shape shape-1"></div>
          <div className="pricing-shape shape-2"></div>
          <div className="pricing-shape shape-3"></div>
          <div className="pricing-shape shape-4"></div>
        </div>
      </div>

      <div className="pricing-container">
        {/* Header Section */}
        <motion.div 
          className="pricing-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="pricing-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Pricing Plans</span>
          </div>
          <h2 className="pricing-title">Choose Your Plan</h2>
          <p className="pricing-subtitle">
            Select the perfect plan that fits your financial needs and goals
          </p>
        </motion.div>

        {/* Pricing Table */}
        <div className="pricing-table-wrapper">
          <div className="pricing-table">
            {/* Features Column */}
            <motion.div 
              className="features-column"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="features-header">
                <div className="features-icon">⚡</div>
                <h3 className="features-title">Features</h3>
              </div>

              <div className="features-list">
                {featuresList.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="feature-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  >
                    <span className="feature-text">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="features-footer">
                <div className="features-icon">💰</div>
                <h3 className="features-title">Pricing</h3>
              </div>
            </motion.div>

            {/* Plan Cards */}
            <div className="plans-grid">
              {plans.map((plan, index) => (
                <motion.div 
                  key={index} 
                  className={`plan-card ${plan.popular ? 'popular' : ''}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.4 + (index * 0.1),
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  {plan.popular && (
                    <div className="popular-badge">
                      <FaStar className="popular-icon" />
                      <span>Most Popular</span>
                    </div>
                  )}

                  <div className="plan-card-glow"></div>

                  {/* Plan Header */}
                  <div className="plan-header">
                    <div className="plan-icon-bg">
                      <span className="plan-emoji">{plan.icon}</span>
                    </div>
                    <h3 className="plan-name">{plan.name}</h3>
                  </div>

                  {/* Features List */}
                  <div className="plan-features">
                    {plan.features.map((included, featureIndex) => (
                      <div key={featureIndex} className="plan-feature-item">
                        <div className="feature-icon-wrapper">
                          {included ? (
                            <FaCheckCircle className="feature-icon included" />
                          ) : (
                            <FaTimesCircle className="feature-icon excluded" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Plan Price */}
                  <div className="plan-price">
                    <div className="price-bg">
                      <span className="price-text">{plan.price}</span>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="plan-hover-effect"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
