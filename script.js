// Demo summary generation
function generateSummary() {
  const fileInput = document.getElementById("pdfFile");
  const output = document.getElementById("output");

  if (!fileInput.files.length) {
    alert("Please upload a PDF file");
    return;
  }

  output.classList.remove("hidden");
}

// Counter animation
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
  let value = 0;
  const target = +counter.dataset.target;
  const step = target / 100;

  function update() {
    value += step;
    if (value < target) {
      counter.innerText = Math.ceil(value);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  }
  update();
});

// FAQ toggle
function toggleFaq(btn) {
  const p = btn.nextElementSibling;
  p.style.display = p.style.display === "block" ? "none" : "block";
}
