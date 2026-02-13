const surpriseBtn = document.getElementById("surpriseBtn");
const loveNote = document.getElementById("loveNote");

surpriseBtn.addEventListener("click", () => {
    loveNote.style.display = "block";
    surpriseBtn.style.display = "none";

    // Optional romantic effect
    document.body.style.background = "linear-gradient(135deg, #ff758c, #ff7eb3)";
});
