function openGradeModal(semester) {
    const modal = document.getElementById("modal");
    const gradeDetails = document.getElementById("grade-details");
    if (semester === 1) {
        gradeDetails.innerHTML = "<p>Semester 2023/2024-1: Course 1 - A, Course 2 - B+</p>";
    } else if (semester === 2) {
        gradeDetails.innerHTML = "<p>Semester 2023/2024-2: Course 1 - A-, Course 2 - B</p>";
    }
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
