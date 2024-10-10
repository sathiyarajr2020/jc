import React, {useState} from "react";
import { motion } from "framer-motion";
import "../Blue.css";
import bgVideo from "../Assets/sample.mp4";
import logo from "../Assets/logo.png";
import youngPartnerImage from "../Assets/yp.jpg";
import familyBlessingImage from "../Assets/fbp.jpg";
import businessBlessingImage from "../Assets/bbp.jpg";
import demo1 from "../Assets/jbp.jpg";
import demo2 from "../Assets/tvc.jpg";
// import graphic from "../Assets/graphic.jpeg";  // Add a decorative graphic

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-image" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">About</li>
          <li className="nav-item">Blessing Plans</li>
          <li className="nav-item">Prayer Towers</li>
          <li className="nav-item">Job Opportunities</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">Programs</li>
        </ul>
      </nav>
    </header>
  );
};
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="logo" className="logo-image" />
          
          <p>
            Jesus Calls is a global ministry founded by Late Brother D.G.S. Dhinakaran and led by Dr. Paul Dhinakaran. Jesus Calls serves to bring comfort and healing to the broken-hearted without distinction through prayer offered all 24/7 throughout the year.
          </p>
        </div>
        <div className="footer-right">
          <h2>Want to know more?</h2>
          <p>24*7 Prayers</p>
          <p>
            <strong>Phone:</strong> 8546999000
          </p>
          <p>
            <strong>For Queries, Call:</strong> 0442345677
          </p>
          </div>  
          <div className="footer-right">
          <h2>Contact Details</h2>
          <p>
            <strong>Address:</strong> Jesus Calls, 16, Dr. D.G.S Dhinakaran Road, R.A.Puram, Chennai - 600 028.
          </p>
          <p>
            <strong>Email:</strong> admin@jesuscalls.org
          </p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [fullscreenFeature, setFullscreenFeature] = useState(null);

  const handleFeatureClick = (feature) => {
    setFullscreenFeature(fullscreenFeature === feature ? null : feature);
  };

  const isFullscreen = (feature) => fullscreenFeature === feature;
  return (
    <div className="landing-page">
      {/* Header Section */}
      <Header />

      {/* Video Background Section */}
      <motion.div
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <video autoPlay muted loop className="bg-video">
          <source src={bgVideo} type="video/mp4" />
        </video>
      </motion.div>


      {/* Features Section (Blessing Plans in Motion) */}
      <motion.div
        className="features-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 10 }}
      >
        <h2 style={{ color: "white" }}>Blessing Plans</h2>

        <motion.div
  className="features-grid"
  initial={{ x: "100%" }} // Start off-screen to the right
  animate={{ x: ["100%", "0%", "-100%"] }} // Move from right to left
  transition={{
    duration: 20, // Duration for one complete loop
    ease: "easeInOut",
    repeat: Infinity, // Repeat indefinitely
    times: [2, 2, 2, 2], // Control timing of each keyframe
  }}
>
          {/* Blessing Plans */}
          <motion.div
            className={`feature-box ${isFullscreen("youngPartner") ? "fullscreen" : ""}`}
            onClick={() => handleFeatureClick("youngPartner")}
          >
            <h3 className="para">Young Partner Plan</h3>
            <img
              src={youngPartnerImage}
              alt="Young Partner Plan"
              className="feature-image"
            />
            <p className="para">
            In the world today, each child and young person face great temptations and vicious allurements, which destroy their life. In order to protect them from all the evil influences, it is essential to keep them before the Lord in prayer till they enter into adulthood. So for this purpose, the Young Partners plan has been operated in Jesus Calls since 1985 for the protection and blessing of each child who is enrolled in this plan.
            </p>
          </motion.div>

          <motion.div
            className={`feature-box ${isFullscreen("youngPartner") ? "fullscreen" : ""}`}
            onClick={() => handleFeatureClick("youngPartner")}
          >
            <h3 className="para">Family Blessing Plan</h3>
            <img
              src={familyBlessingImage}
              alt="Family Blessing Plan"
              className="feature-image"
            />
            <p className="para">
            Family Blessing Plan is an exceptional Plan given by the Lord to Dr. Paul Dhinakaran, for families to be blessed, to live in unity and to prosper. Prayers are offered in Jesus Calls Prayer Tower for the families who have subscribed to this Plan, to be blessed, to enjoy peace and for every member of the family to be in good health.
            </p>
          </motion.div>

          <motion.div className="feature-box">
            <h3 className="para">Business Blessing Plan</h3>
            <img
              src={businessBlessingImage}
              alt="Business Blessing Plan"
              className="feature-image"
            />
            <p className="para">
            Even as you enroll your shop, trade, business, or industry in this plan, the Almighty Lord will surely grant you and your business divine protection and prosperity. The Lord will teach you to be profitable and expand your business. If it’s a new enterprise that you invested in or an ongoing activity, trust the Lord, He will not let you face a loss.
            </p>
          </motion.div>

          {/* Demo Blessing Plans */}
          <motion.div className="feature-box">
            <h3 className="para">Job Blessing Plan</h3>
            <img src={demo1} alt="Demo Plan 1" className="feature-image" />
            <p className="para">
            Even as you come forward to bless others as a partner in this facet, the Almighty Lord who lifted up Joseph and who blessed his job and made him a ruler will surely grant you the suitable job and He will bless your employer, your office and your co-employees just for your sake.
            </p>
          </motion.div>

          <motion.div className="feature-box">
            <h3 className="para">Jesus Calls TV Club</h3>
            <img src={demo2} alt="Demo Plan 2" className="feature-image" />
            <p className="para">Priya's elder sister Jothi lived in Ashok Nagar, Chennai. Her husband Mr. Balaji worked abroad. Priya was very upset that even though Jothi had all the other blessings in her life she was not blessed with a child. So, Priya kept praying with a burden for her sister to be blessed with the gift of a child. </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Updated Section for Upcoming Prayer Meetings */}
      <motion.div
        className="upcoming-prayer-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <div className="upcoming-title">
          <h2>Upcoming Prayer Meetings</h2>
          <motion.button
            className="view-all-button"
            whileHover={{ scale: 1.05, backgroundColor: "#ff6347" }}
            transition={{ duration: 0.3 }}
          >
            View all
          </motion.button>
        </div>
        <motion.div
          className="prayer-meetings"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, staggerChildren: 0.2 }}
        >
          <motion.div
            className="prayer-card"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
          >
            <div className="date-box">
              <h3>12</h3>
              <p>Oct '24</p>
              <p>Saturday</p>
            </div>
            <div className="meeting-info">
              <h4>Miracle Fasting Prayer</h4>
              <p>
                <strong>From:</strong> 12-10-24 - 10:00 AM
              </p>
              <p>
                <strong>To:</strong> 12-10-24 - 02:00 PM
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i> Vanagaram Prayer Tower,
                JC Garden, Chennai-600095
              </p>
            </div>
          </motion.div>

          <motion.div
            className="prayer-card"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
          >
            <div className="date-box">
              <h3>20</h3>
              <p>Oct '24</p>
              <p>Sunday</p>
            </div>
            <div className="meeting-info">
              <h4>Special Prayer Meet</h4>
              <p>
                <strong>From:</strong> 20-10-24 - 11:00 AM
              </p>
              <p>
                <strong>To:</strong> 20-10-24 - 01:00 PM
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i> Egmore Prayer Tower,
                Chennai-600008
              </p>
            </div>
          </motion.div>

          {/* Add more cards as needed */}
        </motion.div>
        <h2 className="section-title">Testimonies</h2>
      </motion.div>
{/* Testimonials Section */}
<motion.div
  className="features-grid"
  initial={{ x: "100%" }} // Start off-screen to the right
  animate={{ x: ["100%", "0%", "-100%"] }} // Move from right to left
  transition={{
    duration: 10, // Duration for one complete loop
    ease: "easeInOut",
    repeat: Infinity, // Repeat indefinitely
  }}
>
  
  
  <div className="testimonials-background">
    {/* Add decorative graphic or background image here */}
  </div>
  
  <div className="testimonials-grid">
    {/* Testimonial 1 */}
    <motion.div
      className="testimonial-box"
      whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="testimonial-avatar">
        <i className="fas fa-user-circle"></i>
      </div>
      <div className="testimonial-content">
        <img src={demo2} alt="Demo Plan 2" className="feature-image" />
        <p className="para">
          “I am a young partner in Jesus Calls Ministry. During my 11th and 12th grades, I struggled to keep up with my academics and often contacted the Jesus Calls prayer helpline for support. In one conversation with a prayer intercessor, he mentioned that God would use me to comfort people and uplift the broken-hearted in the future.”
        </p>
        <span className="testimonial-author">- Nisha Veronica, Chennai</span>
      </div>
    </motion.div>

    {/* Testimonial 2 */}
    <motion.div
      className="testimonial-box"
      whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="testimonial-avatar">
        <i className="fas fa-user-circle"></i>
      </div>
      <div className="testimonial-content">
        <img src={demo2} alt="Demo Plan 2" className="feature-image" />
        <p className="para">
          “My husband's name is Dheeraj Singh. We got married four years ago, but we were unable to have a child. Despite consulting many doctors, no one could determine the cause or provide a cure. But we didn't give up and continued to pray and even visited the Jesus Calls National Prayer Tower.”
        </p>
        <span className="testimonial-author">- John Samuel, Bangalore</span>
      </div>
    </motion.div>

    {/* Add more testimonials as needed */}
  </div>
</motion.div>


      {/* Footer Section */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
