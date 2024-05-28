// get guest name from url
document.addEventListener('DOMContentLoaded', function() {
    // Get the guest name from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('guest');

    // Display the guest name if it exists
    if (guestName) {
        document.getElementById('guest-name').textContent = `Dear ${guestName},`;
    }

// Smooth scroll to invitation section
    document.querySelector('.open-invitation').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// open invitation

document.getElementById('open-invitation').addEventListener('click', function() {
    // Open the HTML file in a new window
    window.location.href = 'invitation.html';
    // window.open('invitation.html', '_blank');
});


