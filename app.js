document.addEventListener("DOMContentLoaded", function() {
    console.log(navigator.userAgent);
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });


    const audio = document.getElementById('background-audio');
const muteButton = document.querySelector('.mute-button');

muteButton.addEventListener('click', toggleMute);


function toggleMute() {

    console.log("hello");
    if (audio.muted) {
        audio.muted = false;
        muteButton.textContent = 'Mute';
    } else {
        audio.muted = true;
        muteButton.textContent = 'Unmute';
    }
}
});


