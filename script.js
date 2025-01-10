document.addEventListener('DOMContentLoaded', () => {
    console.log('Volleyball Club website loaded!');
});
// Get references to the videos
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');

    // Play the first video automatically
    video1.play();

    // When the first video ends, play the second one
    video1.addEventListener('ended', () => {
        video1.style.display = 'none'; // Hide the first video
        video2.style.display = 'block'; // Show the second video
        video2.play(); // Play the second video
    });
