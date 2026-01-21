document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // PROJECT SEARCH (FINAL LOGIC)
  // ===============================
  const searchInput = document.getElementById("projectSearch");
  const projects = document.querySelectorAll(".project-card");
  const notFound = document.getElementById("notFound");

  if (!searchInput || projects.length === 0) return;

  // initial state → show only first 2
  function showInitialProjects() {
    projects.forEach((project, index) => {
      project.style.display = index < 2 ? "block" : "none";
    });
    notFound.classList.add("hidden");
  }

  showInitialProjects();

  // search logic
  searchInput.addEventListener("input", () => {
    const value = searchInput.value.trim().toLowerCase();
    let matchCount = 0;

    if (value === "") {
      showInitialProjects();
      return;
    }

    projects.forEach(project => {
      const text = project.innerText.toLowerCase();

      if (text.includes(value)) {
        project.style.display = "block";
        matchCount++;
      } else {
        project.style.display = "none";
      }
    });

    // show not found if no match
    if (matchCount === 0) {
      notFound.classList.remove("hidden");
    } else {
      notFound.classList.add("hidden");
    }
  });

});
