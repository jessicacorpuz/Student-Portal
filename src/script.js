function handleLogin() {

    const studentId = document.getElementById("studentId").value;
    const password = document.getElementById("password").value;

    if(studentId === "" || password === "") {
        alert("Please enter your Student ID and Password.");
        return;
    }

    document.querySelector(".page").style.display = "none";
    document.getElementById("portal").style.display = "block";

    showSection("home");
}

function showSection(sectionId) {

    document.querySelectorAll(".portal-section").forEach(section => {
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";
}
