// Open Service Selection Modal
function openServiceModal() {
    document.getElementById("serviceSelectionModal").style.display = "flex";
}

// Close Service Selection Modal
function closeServiceModal() {
    document.getElementById("serviceSelectionModal").style.display = "none";
}

// Open Booking Form Modal
function openForm() {
    document.getElementById("bookingForm").style.display = "flex";
}

// Close Booking Form Modal
function closeForm() {
    document.getElementById("bookingForm").style.display = "none";
}

function bookService(service) {
    document.getElementById("service").value = service;
    openForm();
}

// Select a Service
function selectService(service) {
    document.getElementById("service").value = service; // Set the selected service
    closeServiceModal(); // Close the service selection modal
    openForm(); // Open the booking form
}

// Submit Booking Form
function submitForm(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Send email using EmailJS (replace with your EmailJS credentials)
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data)
        .then(() => {
            alert("Booking submitted successfully! We'll contact you soon.");
            closeForm();
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            alert("Something went wrong. Please try again.");
        });
}

document.getElementById("hamburger").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});



let currentReview = 1;
const totalReviews = 3;

function showReview(index) {
    for (let i = 1; i <= totalReviews; i++) {
        document.getElementById(`review-${i}`).style.display = 'none';
    }
    document.getElementById(`review-${index}`).style.display = 'block';
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentReview = currentReview > 1 ? currentReview - 1 : totalReviews;
    showReview(currentReview);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentReview = currentReview < totalReviews ? currentReview + 1 : 1;
    showReview(currentReview);
});

// Show the first review initially
showReview(currentReview);
