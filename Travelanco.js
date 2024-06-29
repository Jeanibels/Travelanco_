/*Preloader*/
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 2000);
});
// Navigation bar
let navbar = document.querySelector('.navbar')

document.querySelector('#button3').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}
// log in Form
let loginForm = document.querySelector('.login-form')

document.querySelector('#button2').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}
// NavBar Icons
let themeBtn = document.querySelector('#button1');

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }

};

// explore Button
document.getElementById('exploreBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of following the link
    
    // Replace '#' with the URL you want to navigate to
    window.location.href = 'https://www.shangri-la.com/boracay/boracayresort/about/local-guide/'; 
});

document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of following the link
    
    // Replace '#' with the URL you want to navigate to
    window.location.href = 'https://www.traveloka.com/en-ph/explore/destination/vacation-in-boracay-philippines-a-complete-guide-to-the-tourist-hotspot-acc/257164'; 
});


// Reservation Form
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('reservation-form');
    var message = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Show submission message
        message.textContent = 'Your Reservation has been submitted';
        message.classList.add('show'); // Show the message

        // Optional: Clear the form fields after submission
        form.reset();
    });
});
// Reservation Form
// Example of updating content dynamically
document.addEventListener('DOMContentLoaded', function() {
    // Simulate delay before changing content
    setTimeout(function() {
        var heading = document.getElementById('message-heading');
        var content = document.getElementById('message-content');

        // Example of changing content
        heading.textContent = 'Your Reservation Has Been Submitted';
        content.textContent = 'Thank you for your reservation';
        content.textContent = 'We will get back to you shortly.';
    }, 3000); // Change content after 3 seconds (3000 milliseconds)
});

//Destinations
document.addEventListener("DOMContentLoaded", function() {
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');

    let carouselDom = document.querySelector('.carousel');
    let SliderDom = carouselDom.querySelector('.carousel .list');
    let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    let timeDom = document.querySelector('.carousel .time');

    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

    let timeRunning = 3000;
    let timeAutoNext = 7000;

    nextDom.onclick = function() {
        showSlider('next');
    }

    prevDom.onclick = function() {
        showSlider('prev');
    }

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);

    function showSlider(type) {
        let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
        let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

        if (type === 'next') {
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add('next');
        } else {
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom.classList.add('prev');
        }

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext);
    }
});



