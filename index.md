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
      <a href="/">INTERNSURF</a> <!-- Updated link to go to the home page -->
    </div>
    <ul class="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/internships/">Internships</a></li>
      <li><a href="/companies/">Companies</a></li>
      <li><a href="/about/">About Us</a></li>
      <li class="nav-item">
        <a class="nav-link {% if page.url == '/profile/' %}active{% endif %}" href="{{ '/profile/' | relative_url }}">Profile</a>
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
