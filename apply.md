---
layout: default
title: Internship Application
---

<!-- Application Form -->
<section class="application-form">
  <div class="container">
    <h1>Apply for the Internship</h1>
    <p>Please fill out the form below to apply for the internship position.</p>
    
    <form action="/submit" method="POST">
      <label for="name">Full Name:</label>
      <input type="text" id="name" name="name" required>
      
      <label for="email">Email Address:</label>
      <input type="email" id="email" name="email" required>
      
      <label for="position">Position Applying For:</label>
      <select id="position" name="position" required>
        <option value="software">Software Engineering Intern</option>
        <option value="marketing">Marketing Intern</option>
        <option value="design">Product Design Intern</option>
      </select>
      
      <label for="resume">Upload Resume:</label>
      <input type="file" id="resume" name="resume" required>
      
      <label for="message">Cover Letter:</label>
      <textarea id="message" name="message" rows="5"></textarea>
      
      <input type="submit" value="Submit Application">
    </form>
  </div>
</section>
