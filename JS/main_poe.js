// FAQ Accordion
const acc = document.querySelectorAll(".accordion-btn");
acc.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    const content = button.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

//validated form
<script>
// =========================
// VALIDATED CONTACT FORM
// =========================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();
        const status = document.getElementById("formStatus");

        // Validation patterns
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{10}$/;

        status.innerHTML = "";
        status.style.color = "red";

        if (name === "") return status.innerHTML = "Please enter your name.";
        if (!emailPattern.test(email)) return status.innerHTML = "Please enter a valid email address.";
        if (!phonePattern.test(phone)) return status.innerHTML = "Phone number must be 10 digits.";
        if (message.length < 10) return status.innerHTML = "Message must be at least 10 characters.";

        // Success
        status.style.color = "green";
        status.innerHTML = "Form submitted successfully!";
        contactForm.reset();
    });
}
</script>


// Enquiry Form
const enquiryForm = document.getElementById("enquiryForm");
if (enquiryForm) {
  enquiryForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const interest = document.getElementById("interest").value;
    const result = document.getElementById("enquiryResult");
    if (!name || !interest) {
      result.textContent = "Please complete all required fields.";
      result.style.color = "red";
    } else {
      result.textContent = `Thank you ${name}! We’ll contact you soon regarding your ${interest} enquiry.`;
      result.style.color = "green";
      enquiryForm.reset();
    }
  });
}

// Contact Form
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("cname").value;
    const result = document.getElementById("contactResult");
    result.textContent = `Thank you, ${name}. Your message has been sent successfully.`;
    result.style.color = "green";
    contactForm.reset();
  });
}
//--Display current time--
function displayTime() {
  const timeElement = document.getElementById("currentTime")
  const now = new Date();
  
  // format: Day, Date Month Year | HH:MM:SS
  const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"}
  const datestr = now.toLocaleDateString("en-ZA", options);
  const timestr = now.toLocaleTimeString("en-ZA");

  timeElement.textContent = `${datestr} | ${timestr}`;
}

//update every second
setInterval(updateTime, 1000)
updateTime();

// Leaflet Map
if (document.getElementById("map")) {
  const map = L.map("map").setView([-33.9249, 18.4241], 10);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);
  L.marker([-33.9249, 18.4241]).addTo(map).bindPopup("Tectonic Energy HQ").openPopup();
}


// =========================
// SEARCH BAR FUNCTION
// =========================
function searchFunction() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const items = document.querySelectorAll("#searchlist li");

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(input) ? "" : "none";
    });
}