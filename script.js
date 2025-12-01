  const toggleBtn = document.getElementById("theme-toggle");

  // Carrega a preferência salva
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Salvar estado
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

