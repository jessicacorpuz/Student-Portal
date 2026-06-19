console.log("Script loaded");

const supabaseUrl = "https://jdtwbiiuimbhozdqrcvn.supabase.co";
const supabaseKey = "YOUR_ANON_KEY_HERE";

const supabase = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);

console.log("Supabase loaded");

async function handleLogin() {

    const studentId =
        document.getElementById("studentId").value.trim();

    const password =
        document.getElementById("password").value;

    const { data, error } = await supabase
        .from("students")
        .select("*")
        .eq("student_id", studentId)
        .eq("password", password)
        .single();

    if (error || !data) {
        alert("Invalid ID or password");
        return;
    }

    document.getElementById("userName").textContent =
        data.full_name;

    document.querySelector(".page").style.display = "none";
    document.getElementById("portal").style.display = "block";

    showSection("home");
}

function showRegister() {
    document.querySelector(".page").style.display = "none";
    document.getElementById("registerPage").style.display = "block";
}

function showLogin() {
    document.getElementById("registerPage").style.display = "none";
    document.querySelector(".page").style.display = "flex";
}

async function handleRegister() {

    const studentId =
        document.getElementById("regStudentId").value.trim();

    const fullname =
        document.getElementById("regFullname").value.trim();

    const email =
        document.getElementById("regEmail").value.trim();

    const password =
        document.getElementById("regPassword").value;

    const confirmPassword =
        document.getElementById("regConfirmPassword").value;

    const department =
        document.getElementById("regDepartment").value.trim();

    if (
        !studentId ||
        !fullname ||
        !email ||
        !password ||
        !department
    ) {
        alert("Please complete all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

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
        console.error(error);
        alert(error.message);
        return;
    }

    alert("Account created successfully!");

    document.getElementById("regStudentId").value = "";
    document.getElementById("regFullname").value = "";
    document.getElementById("regEmail").value = "";
    document.getElementById("regPassword").value = "";
    document.getElementById("regConfirmPassword").value = "";
    document.getElementById("regDepartment").value = "";

    showLogin();
}

function showSection(sectionId) {

    document.querySelectorAll(".portal-section")
        .forEach(section => {
            section.style.display = "none";
        });

    const selectedSection =
        document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.style.display = "block";
    }

    document.querySelectorAll(".sidebar button")
        .forEach(btn => {
            btn.classList.remove("active");
        });
}

const notifBtn =
    document.getElementById("notifBtn");

const notificationPopup =
    document.getElementById("notificationPopup");

if (notifBtn && notificationPopup) {

    notifBtn.addEventListener("click", () => {

        if (notificationPopup.style.display === "block") {
            notificationPopup.style.display = "none";
        } else {
            notificationPopup.style.display = "block";
        }

    });

    document.addEventListener("click", (e) => {

        if (!e.target.closest(".notification-container")) {
            notificationPopup.style.display = "none";
        }

    });
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

function showSlide() {

    const title =
        document.getElementById("title");

    const img1 =
        document.getElementById("img1");

    const img2 =
        document.getElementById("img2");

    const img3 =
        document.getElementById("img3");

    if (!title || !img1 || !img2 || !img3) {
        return;
    }

    title.innerHTML = slides[current].title;
    img1.src = slides[current].image1;
    img2.src = slides[current].image2;

    if (slides[current].image3) {

        img3.src = slides[current].image3;
        img3.style.display = "inline";

    } else {

        img3.style.display = "none";

    }
}

function nextSlide() {

    current++;

    if (current >= slides.length) {
        current = 0;
    }

    showSlide();
}

function prevSlide() {

    current--;

    if (current < 0) {
        current = slides.length - 1;
    }

    showSlide();
}

showSlide();
