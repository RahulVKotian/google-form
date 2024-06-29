// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('multiStepForm');
    const formSteps = Array.from(document.querySelectorAll('.form-step'));
    const nextBtns = Array.from(document.querySelectorAll('.next-btn'));
    const prevBtns = Array.from(document.querySelectorAll('.prev-btn'));
    
    let currentStep = 0;

    function showStep(step) {
        formSteps.forEach((formStep, index) => {
            formStep.classList.toggle('active', index === step);
        });
    }

    nextBtns.forEach(button => {
        button.addEventListener('click', () => {
            currentStep++;
            showStep(currentStep);
        });
    });

    prevBtns.forEach(button => {
        button.addEventListener('click', () => {
            currentStep--;
            showStep(currentStep);
        });
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted!');
        // Handle form submission here (e.g., send data to server)
    });

    showStep(currentStep);
});
