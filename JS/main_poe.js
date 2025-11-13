// FAQ Accordion
const acc = document.querySelectorAll(".accordion-btn");
acc.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

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
function.updateTime() {
  const timeElement = document.getElementById("currentTime")
  const now = new Date();
  
  // format: Day, Date Month Year | HH:MM:SS
  const options = {weekda: "long", year: "numeric", month: "long", day: "numeric"}
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