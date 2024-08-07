document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 600,
        easing: 'ease-out-cubic',
        once: true
    });

    const form = document.getElementById('job-application-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Application submitted successfully!');
        form.reset();
    });
});
