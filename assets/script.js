document.addEventListener("DOMContentLoaded", () => {
  const applyButtons = document.querySelectorAll(".apply-btn");
  const savedApplications = [];
  const savedAppsButton = document.getElementById("saved-apps-btn");
  const iframe = document.getElementById("job-frame");

  // Open job link in iframe and save application
  applyButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const jobLink = e.target.href;
      const jobTitle = e.target.dataset.title;

      // Open link in iframe
      iframe.src = jobLink;

      // Save application
      if (!savedApplications.find((app) => app.link === jobLink)) {
        savedApplications.push({ title: jobTitle, link: jobLink });
        alert(`Saved application for "${jobTitle}".`);
      } else {
        alert(`"${jobTitle}" is already saved.`);
      }
    });
  });

  // Show saved applications
  savedAppsButton.addEventListener("click", () => {
    if (savedApplications.length === 0) {
      alert("No applications saved yet.");
    } else {
      const appList = savedApplications
        .map((app, index) => `${index + 1}. ${app.title} - ${app.link}`)
        .join("\n");
      alert(`Saved Applications:\n${appList}`);
    }
  });
});
