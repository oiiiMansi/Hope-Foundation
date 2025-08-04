import React, { useState } from 'react';
import billyImage from './billy.jpg';
import jonImage from './jon.jpg';
import robbImage from './robb.jpg';

// The CSS for the entire application is defined here.
// This is a single-file approach to keep all the code together.
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

  body {
    font-family: 'Inter', sans-serif;
    background-color: #f8fafc; /* bg-gray-50 */
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* This line hides the horizontal scrollbar */
  }

  .container {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
  
  .navbar {
    background-color: #fff;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
  }

  .logo {
    font-size: 1.5rem; /* text-2xl */
    font-weight: 700;
    color: #0d9488; /* text-teal-600 */
    cursor: pointer;
  }
  
  .logo-strong {
    font-size: 1.875rem; /* text-3xl */
    font-weight: 800;
  }

  .desktop-nav {
    display: none;
    gap: 1.5rem; /* space-x-6 */
  }

  .nav-link {
    color: #4b5563; /* text-gray-600 */
    transition: color 0.2s ease-in-out;
    cursor: pointer;
    font-size: 1.125rem; /* text-lg */
    font-weight: 500;
  }

  .nav-link:hover {
    color: #0d9488; /* hover:text-teal-600 */
  }

  .mobile-menu-button {
    padding: 0.5rem;
    color: #4b5563; /* text-gray-600 */
    border-radius: 0.375rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .mobile-nav {
    display: none;
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
    background-color: #f9fafb; /* bg-gray-50 */
  }

  .mobile-nav .nav-link {
    padding: 0.5rem;
    width: 100%;
    text-align: left;
  }

  .hero-section {
    text-align: center;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .hero-title {
    font-size: 2.25rem; /* text-4xl */
    line-height: 1.25;
    font-weight: 800;
    color: #111827; /* text-gray-900 */
    margin-bottom: 1rem;
  }

  .hero-title-teal {
    color: #0d9488; /* text-teal-600 */
  }

  .hero-subtitle {
    font-size: 1.125rem; /* text-lg */
    color: #4b5563; /* text-gray-600 */
    margin-bottom: 2rem;
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;
  }

  .button-group {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .button {
    font-weight: 700;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px; /* rounded-full */
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
  }

  .button:hover {
    transform: scale(1.05);
  }

  .button-primary {
    background-color: #0d9488;
    color: #fff;
  }

  .button-primary:hover {
    background-color: #0f766e; /* hover:bg-teal-700 */
  }

  .button-secondary {
    background-color: #fff;
    color: #0d9488;
    border: 1px solid #0d9488;
  }
  
  .learn-more-section {
    text-align: center;
    padding: 4rem 1rem;
    background-color: #e2f4f2; /* A light teal background to distinguish it */
    border-radius: 0.5rem;
    margin-top: 2rem;
  }

  .learn-more-title {
    font-size: 2rem; /* text-3xl */
    font-weight: 700;
    color: #0d9488; /* text-teal-600 */
    margin-bottom: 1rem;
  }

  .learn-more-text {
    font-size: 1.125rem; /* text-lg */
    color: #1f2937; /* text-gray-800 */
    max-width: 56rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.5rem;
  }

  .page-section {
    background-color: #fff;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
  }

  .section-title {
    font-size: 1.875rem; /* text-3xl */
    font-weight: 700;
    color: #111827; /* text-gray-900 */
    margin-bottom: 1.5rem;
    border-bottom: 2px solid #2dd4bf; /* border-teal-500 */
    padding-bottom: 0.5rem;
  }

  .section-content {
    color: #374151; /* text-gray-700 */
    margin-bottom: 1.5rem;
    line-height: 1.625;
  }
  
  .team-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem;
  }

  .team-member {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .team-member-image {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    border-radius: 9999px; /* rounded-full */
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    margin-bottom: 1rem;
  }

  .team-member-name {
    font-size: 1.25rem; /* text-xl */
    font-weight: 600;
    color: #1f2937; /* text-gray-800 */
  }

  .team-member-title {
    font-size: 0.875rem; /* text-sm */
    color: #0d9488; /* text-teal-600 */
  }

  .form-container {
    background-color: #fff;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
  }

  .form-success-message {
    text-align: center;
    padding: 2.5rem;
    background-color: #f0fdf4; /* bg-green-50 */
    color: #166534; /* text-green-700 */
    border-radius: 0.375rem;
  }

  .form-success-message p {
    font-size: 1.125rem;
    font-weight: 600;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151; /* text-gray-700 */
    margin-bottom: 0.25rem;
  }

  .form-input,
  .form-textarea {
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }

  .form-input:focus,
  .form-textarea:focus {
    outline: none;
    ring: 2px solid #0d9488;
    border-color: #0d9488;
  }

  .form-submit-button {
    width: 100%;
    background-color: #0d9488;
    color: #fff;
    font-weight: 700;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    border: none;
  }

  .form-submit-button:hover {
    background-color: #0f766e;
    transform: scale(1.05);
  }

  .footer {
    background-color: #1f2937; /* bg-gray-800 */
    color: #fff;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    margin-top: 2rem;
  }

  .footer-content {
    text-align: center;
  }

  .footer-links {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #9ca3af; /* text-gray-400 */
  }

  .footer-links a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }

  .footer-links a:hover {
    color: #fff;
  }
  
  /* Responsive Styles using Media Queries */
  @media (min-width: 768px) {
    .desktop-nav {
      display: flex;
    }

    .mobile-menu-button {
      display: none;
    }
    
    .hero-title {
        font-size: 3rem; /* sm:text-5xl */
    }

    .hero-subtitle {
        font-size: 1.25rem; /* sm:text-xl */
    }

    .team-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1024px) {
    .hero-title {
        font-size: 3.75rem; /* lg:text-6xl */
    }
    .team-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
`;

// Main App component that manages the state and displays the correct page
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Renders the appropriate component based on the current state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutUs />;
      case 'volunteer':
        return <VolunteerForm />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <style>{styles}</style>
      <Navbar setCurrentPage={setCurrentPage} />
      <main className="container" style={{ padding: '2rem 1rem' }}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

// Navbar component with responsive design
const Navbar = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-content container">
        <a onClick={() => setCurrentPage('home')} className="logo">
          <span className="logo-strong">Hope</span>Foundation
        </a>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <NavLink text="Home" onClick={() => setCurrentPage('home')} />
          <NavLink text="About Us" onClick={() => setCurrentPage('about')} />
          <NavLink text="Volunteer" onClick={() => setCurrentPage('volunteer')} />
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-button">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '1.5rem', height: '1.5rem' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav">
          <NavLink text="Home" onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} />
          <NavLink text="About Us" onClick={() => { setCurrentPage('about'); setIsMenuOpen(false); }} />
          <NavLink text="Volunteer" onClick={() => { setCurrentPage('volunteer'); setIsMenuOpen(false); }} />
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ text, onClick }) => (
  <a onClick={onClick} className="nav-link">
    {text}
  </a>
);

// Home Page component with a hero section
const HomePage = ({ setCurrentPage }) => {
  return (
    <>
      <div className="hero-section">
        <h1 className="hero-title">
          Making a Difference, <span className="hero-title-teal">One Step at a Time</span>
        </h1>
        <p className="hero-subtitle">
          Join us in our mission to create a brighter future for communities around the world.
        </p>
        <div className="button-group">
          <a onClick={() => setCurrentPage('volunteer')} className="button button-primary">
            Join Us
          </a>
          <a onClick={() => setCurrentPage('about')} className="button button-secondary">
            Learn More
          </a>
        </div>
      </div>

      {/* New 'Learn More' section */}
      <div className="learn-more-section">
        <h2 className="learn-more-title">Who We Are</h2>
        <p className="learn-more-text">
          We are a passionate team dedicated to creating a lasting impact. Our work focuses on three core pillars: providing quality education, improving public health, and protecting our environment. Discover the stories of the communities we serve and the incredible volunteers who make it all possible.
        </p>
        <button onClick={() => setCurrentPage('about')} className="button button-primary">
          Read Our Full Story
        </button>
      </div>
    </>
  );
};

// About Us component with a clean layout
const AboutUs = () => {
  return (
    <div className="page-section">
      <h2 className="section-title">Our Mission</h2>
      <p className="section-content">
        Our mission is to empower underprivileged communities through sustainable projects focused on education, health, and environmental conservation. We believe that every person deserves a chance to thrive, and we work tirelessly to provide the resources and support needed to make that a reality.
      </p>

      <h2 className="section-title">Our Vision</h2>
      <p className="section-content">
        We envision a world where every community has the tools and knowledge to build a better future for themselves and for generations to come. We strive to be a catalyst for positive change, fostering resilience, self-reliance, and hope.
      </p>

      <h2 className="section-title">Our Team</h2>
      <div className="team-grid">
        <TeamMember name="Billy Butcher" title="Founder & CEO" imageUrl={billyImage} />
        <TeamMember name="Jon Snow" title="Lead Project Manager" imageUrl={jonImage} />
        <TeamMember name="robb" title="Community Outreach" imageUrl={robbImage} />
      </div>
    </div>
  );
};

const TeamMember = ({ name, title, imageUrl }) => (
  <div className="team-member">
    <img src={imageUrl} alt={name} className="team-member-image" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/38b2ac/ffffff?text=Member"; }} />
    <h3 className="team-member-name">{name}</h3>
    <p className="team-member-title">{title}</p>
  </div>
);

// Volunteer Form component with state management
const VolunteerForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend.
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="form-container">
      <h2 className="section-title">Become a Volunteer</h2>

      {isSubmitted ? (
        <div className="form-success-message">
          <p>Thank you for your interest! We'll be in touch soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Tell us a little about yourself</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
            ></textarea>
          </div>
          <button
            type="submit"
            className="form-submit-button"
          >
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <p>&copy; 2025 Hope Foundation. All rights reserved.</p>
        <p className="footer-links">
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};
