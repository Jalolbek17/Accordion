const steps = document.querySelectorAll(".step");

steps.forEach(e => e.addEventListener("click", function() {
    var step = this;
    steps.forEach(s => {
        if (s !== step) {
            s.classList.remove("active");
        }
    });
    step.classList.toggle("active");
}));