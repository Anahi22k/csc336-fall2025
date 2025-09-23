document.addEventListener("DOMContentLoaded", () => {
    const days = {
      Monday: "7AM - 8PM",
      Tuesday: "7AM - 8PM",
      Wednesday: "7AM - 8PM",
      Thursday: "7AM - 8PM",
      Friday: "7AM - 8PM",
      Saturday: "8AM - 8PM",
      Sunday: "8AM - 8PM"
    };
  
    const listItems = document.querySelectorAll(".weekday-list li");
    const display = document.querySelector(".hours-display");
  
    listItems.forEach(item => {
      item.addEventListener("click", () => {
        // remove "active" from all, then add to clicked
        listItems.forEach(li => li.classList.remove("active"));
        item.classList.add("active");
  
        // show hours for clicked day
        const day = item.getAttribute("data-day");
        display.innerHTML = `<p><strong>${day}:</strong> ${days[day]}</p>`;
      });
    });
  });
  


  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#bookingForm");
    const resultsDiv = document.querySelector("#bookingResults");
  
    // store all bookings to displau in empty tag
    const bookings = [];
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Get values
      const name = document.querySelector("#name").value.trim();
      const email = document.querySelector("#email").value.trim();
      const people = parseInt(document.querySelector("#people").value.trim());
      const date = document.querySelector("#date").value;
      const seating = document.querySelector("input[name='seating']:checked");
  
      // Validation
      let errors = [];
      if (name.length < 3) errors.push("Name must be at least 3 characters.");
      if (!email.includes("@")) errors.push("Email must be valid.");
      if (isNaN(people) || people < 1 || people > 4) errors.push("Number of people must be between 1 and 4.");
      if (!date) errors.push("Please select a booking date.");

  
      if (errors.length > 0) {
        resultsDiv.innerHTML = `<p style="color:red;"><strong>Error:</strong> ${errors.join(" ")}</p>`;
        return;
      }
  
      // booking object
      const booking = {
        name,
        email,
        people,
        date,
        seating: seating.value,
      };
  
      // Add to array
      bookings.push(booking);
  
      // Show success + all bookings
      resultsDiv.innerHTML = "<h3>Current Bookings:</h3><ul>" +
        bookings.map(b => `<li>${b.name} booked for ${b.people} on ${b.date} (${b.seating}) ${b.coffee ? "☕ with coffee" : ""}</li>`).join("") +
        "</ul>";
  
      // Reset form
      form.reset();
    });
  });
  