---
layout: internship
title: CRCP Intern
company: JAMInc.
location: New York, NY
description: Creativity.
permalink: /internships/marketing-intern/
---

# {{ page.title }}

**Company**: {{ page.company }}

**Location**: {{ page.location }}

**Description:**

{{ page.description }}

---

## Apply for This Position

<form action="https://formspree.io/f/xldrqyoq" method="POST">
  <!-- Include a hidden field with the internship title -->
  <input type="hidden" name="internship" value="{{ page.title }}">

  <!-- Applicant's Name -->
  <label for="name">Name:</label><br>
  <input type="text" id="name" name="name" required><br><br>

  <!-- Applicant's Email -->
  <label for="email">Email:</label><br>
  <input type="email" id="email" name="_replyto" required><br><br>

  <!-- Applicant's Major -->
  <label for="major">Major:</label><br>
  <input type="text" id="major" name="major"><br><br>

  <!-- Applicant's Contact Information -->
  <label for="contact">Contact Information:</label><br>
  <textarea id="contact" name="contact" rows="4" cols="50"></textarea><br><br>

  <!-- Submit Button -->
  <input type="submit" value="Submit Application">
</form>
