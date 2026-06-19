const supabaseUrl = "https://jdtwbiiuimbhozdqrcvn.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkdHdiaWl1aW1iaG96ZHFyY3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4MTE5NDIsImV4cCI6MjA5NzM4Nzk0Mn0.8qDaxtDB7H0lr3bkIdZpMIC7Mwqx2BtMXiIbGIv8fa0";
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function handleRegister() {

const studentId = document.getElementById("regStudentId").value;

const fullname = document.getElementById("regFullname").value;

const email = document.getElementById("regEmail").value;

const password = document.getElementById("regPassword").value;

const department = document.getElementById("regDepartment").value;

const { data, error } = await supabase

.from("students")

.insert([{

student_id: studentId,

full_name: fullname,

email: email,

password: password,

department: department

}])

.select();

console.log("DATA:", data);

console.log("ERROR:", error);

if (error) {

alert(error.message);

return;

}

alert("Account created successfully!");

showLogin();

}
    document.getElementById("userName").textContent =
        data.full_name;

    document.querySelector(".page").style.display = "none";
    document.getElementById("portal").style.display = "block";

    showSection("home");
}

function showRegister(){
    document.querySelector(".page").style.display = "none";
    document.getElementById("registerPage").style.display = "block";
}

function showLogin(){
    document.getElementById("registerPage").style.display = "none";
    document.querySelector(".page").style.display = "flex";
}

async function handleRegister() {

    const studentId =
        document.getElementById("regStudentId").value;

    const fullname =
        document.getElementById("regFullname").value;

    const email =
        document.getElementById("regEmail").value;

    const password =
        document.getElementById("regPassword").value;

    const department =
        document.getElementById("regDepartment").value;

    const { error } = await supabase
        .from("students")
        .insert([
            {
                student_id: studentId,
                full_name: fullname,
                email: email,
                password: password,
                department: department
            }
        ]);

    if (error) {
        alert(error.message);
        return;
    }

    alert("Account created successfully!");
    showLogin();
}

function showSection(sectionId){

    document.querySelectorAll(".portal-section").forEach(section=>{
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";

    document.querySelectorAll(".sidebar button").forEach(btn=>{
        btn.classList.remove("active");
    });

    event.target.classList.add("active");
}

const notifBtn = document.getElementById("notifBtn");
const notificationPopup = document.getElementById("notificationPopup");

notifBtn.addEventListener("click", () => {

    if(notificationPopup.style.display === "block"){
        notificationPopup.style.display = "none";
    } else {
        notificationPopup.style.display = "block";
    }

});

document.addEventListener("click", (e) => {

    if(!e.target.closest(".notification-container")){
        notificationPopup.style.display = "none";
    }

});

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
