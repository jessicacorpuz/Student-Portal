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
let slides = [
{
title: "First Floor",
image1: "https://raw.githubusercontent.com/jessicacorpuz/Student-Portal/refs/heads/main/img/1stflr1.jpg",
image2: "https://raw.githubusercontent.com/jessicacorpuz/Student-Portal/refs/heads/main/img/1stflr2.jpg",
image3: "https://raw.githubusercontent.com/jessicacorpuz/Student-Portal/refs/heads/main/img/1stflr3.jpg"
},
{
title: "Second Floor",
image1: "https://raw.githubusercontent.com/jessicacorpuz/Student-Portal/refs/heads/main/img/2ndflr1.jpg",
image2: "https://raw.githubusercontent.com/jessicacorpuz/Student-Portal/refs/heads/main/img/2ndflr2.jpg"
},
{
title: "Third Floor",
image1: "https://raw.githubusercontent.com/jessicacorpuz/Student-Portal/refs/heads/main/img/3rdflr1.jpg",
image2: "https://raw.githubusercontent.com/jessicacorpuz/Student-Portal/refs/heads/main/img/3rdflr2.jpg"
},
{
title: "Gym",
image1: "https://raw.githubusercontent.com/jessicacorpuz/Student-Portal/refs/heads/main/img/gymdown.jpg",
image2: "https://raw.githubusercontent.com/jessicacorpuz/Student-Portal/refs/heads/main/img/gymup.jpg"
},
{
title: "Library",
image1: "https://raw.githubusercontent.com/jessicacorpuz/Student-Portal/refs/heads/main/img/library1.jpg",
image2: "https://raw.githubusercontent.com/jessicacorpuz/Student-Portal/refs/heads/main/img/library2.jpg"
}
];

let current = 0;

function showSlide(){
    document.getElementById("title").innerHTML = slides[current].title;
    document.getElementById("img1").src = slides[current].image1;
    document.getElementById("img2").src = slides[current].image2;

    if(slides[current].image3){
        document.getElementById("img3").src = slides[current].image3;
        document.getElementById("img3").style.display = "inline";
    }else{
        document.getElementById("img3").style.display = "none";
    }
}

function nextSlide(){
    current++;
    if(current >= slides.length){
        current = 0;
    }
    showSlide();
}

function prevSlide(){
    current--;
    if(current < 0){
        current = slides.length - 1;
    }
    showSlide();
}

showSlide();
