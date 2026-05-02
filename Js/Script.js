// Event select
function selectEvent(eventName) {
  alert("You selected: " + eventName);
  localStorage.setItem("event", eventName);
  window.location.href = "contact.html";
}

// Form validation
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let date = document.getElementById("date").value;
  let event = document.getElementById("event").value;
  alert("Booking Submitted Sucessfully!");
  return true;

  if (name === "" || email === "" || date === "" || event === "") {
    alert("Please fill all fields");
    return false;
  }

  alert("🎉 Booking Confirmed!");
  return true;
}

// Auto fill selected event
window.onload = function () {
  let savedEvent = localStorage.getItem("event");
  if (savedEvent) {
    document.getElementById("event").value = savedEvent;
  }
};