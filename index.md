---
layout: default
title: INTERNSURF
---

<!-- Link to the CSS file -->
<link rel="stylesheet" href="/assets/style.css">

<!-- Custom Navbar -->
<nav class="navbar">
  <div class="container">
    <div class="logo">
      <a href="#">INTERNSURF</a>
    </div>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Internships</a></li>
      <li><a href="#">Companies</a></li>
      <li><a href="#">About Us</a></li>
      <li class="nav-item">
        <a class="nav-link {% if page.url == '/profile/' %}active{% endif %}" href="#profile-section">Profile</a>
      </li>
    </ul>
  </div>
</nav>

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <h1>Find Your Ideal Internship Opportunity</h1>
    <p>Connect with top companies and kickstart your career today.</p>
    <a href="#" class="btn">Get Started</a>
  </div>
</section>

<!-- Main Content -->
<section class="internship-listings">
  <div class="container">
    <h2>Latest Internship Opportunities</h2>
    <div class="internship-grid">
      <div class="internship-card">
        <h3>Software Engineering Intern</h3>
        <p>Join a leading tech company and gain hands-on experience with real-world projects.</p>
        <a href="/apply/?position=software" class="btn">Apply Now</a>
      </div>
      <div class="internship-card">
        <h3>Marketing Intern</h3>
        <p>Work with a dynamic marketing team and help execute campaigns for top brands.</p>
        <a href="/apply/?position=marketing" class="btn">Apply Now</a>
      </div>
      <div class="internship-card">
        <h3>Product Design Intern</h3>
        <p>Get creative and design cutting-edge products for a fast-paced startup.</p>
        <a href="/apply/?position=design" class="btn">Apply Now</a>
      </div>
    </div>
  </div>
</section>

<!-- Profile Section -->
<section id="profile-section" class="container mt-5">
  <div class="card mb-3" style="max-width: 100%;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="{{ '/assets/images/profile-pic.jpg' | relative_url }}" class="img-fluid rounded-start" alt="Profile Picture">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h2 class="card-title">Damola's Profile</h2>
          
          <h5>About Me</h5>
          <p>Hi, I’m Damola, an RA and supporter of student initiatives...</p>

          <h5>Contact Information</h5>
          <p><strong>Email:</strong> <a href="mailto:damola@example.com">damola@example.com</a></p>

          <h5>Achievements</h5>
          <ul>
            <li>Organized and hosted community events</li>
          </ul>

          <h5>Skills</h5>
          <ul>
            <li>Leadership</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer>
  <div class="container">
    <p>&copy; 2024 INTERNSURF. All rights reserved.</p>
    <div>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Contact Us</a>
    </div>
  </div>
</footer>
