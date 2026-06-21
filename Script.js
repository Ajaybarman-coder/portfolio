const buttons = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    cards.forEach(card => {
      const category = card.dataset.category;
      const show = filter === "all" || category === filter;
      card.style.display = show ? "block" : "none";
    });
  });
});
