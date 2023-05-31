// Button Functions
const githubButton = function githubClick() {
    window.open("https://github.com/antoniofike45?tab=repositories", "_blank");
}
document.getElementById("gitButton").addEventListener("click", githubButton);

const portfolioButton = function portfolioClick() {
    window.open("./portfolio.html", "_blank");
}
document.getElementById("portButton").addEventListener("click", portfolioButton);



// THIS IS FOR THE COPYRIGHT IN THE FOOTER OF THE WEBSITE //
const currentYear = new Date().getFullYear();
  document.getElementById('currentYear').textContent = currentYear;


