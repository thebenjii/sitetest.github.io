// Track saved applications
const savedApplications = [];

document.addEventListener("DOMContentLoaded", () => {
  const applyButtons = document.querySelectorAll(".apply-btn");
  const savedAppsBtn = document.getElementById("saved-apps-btn");

  // Save application when an "Apply Now" link is clicked
  applyButtons.forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      const jobLink = event.target.href;
      const jobTitle = event.target.dataset.title;

      // Check if the application is already saved
      const alreadySaved = savedApplications.some(app => app.link === jobLink);
      if (!alreadySaved) {
        savedApplications.push({ title: jobTitle, link: jobLink });
        alert(`Application for "${jobTitle}" has been saved.`);
      } else {
        alert(`Application for "${jobTitle}" is already saved.`);
      }

      // Open the job application link in the iframe
      document.getElementById("job-frame").src = jobLink;
    });
  });

  // Show saved applications when the save icon is clicked
  savedAppsBtn.addEventListener("click", () => {
    if (savedApplications.length === 0) {
      alert("No applications saved yet.");
    } else {
      let savedList = "Saved Applications:\n";
      savedApplications.forEach((app, index) => {
        savedList += `${index + 1}. ${app.title} - ${app.link}\n`;
      });
      alert(savedList);
    }
  });
});
