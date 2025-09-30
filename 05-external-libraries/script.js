// Gentle "highlight" when a card is clicked
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".card").forEach(card => {
      card.addEventListener("click", () => {
        card.classList.add("active");
        setTimeout(() => card.classList.remove("active"), 600); // fade after 0.6s
      });
    });
  
    // Greeting message that changes with time of day
    const hours = new Date().getHours();
    let greeting = "Welcome!";
    if (hours < 12) greeting = "Good morning, coffee lover";
    else if (hours < 18) greeting = "Good afternoon, flower friend";
    else greeting = "Sorry we are currently close :(";
  
    document.querySelector("header h1")
      .insertAdjacentHTML("afterend", `<p>${greeting}</p>`);
  });
  