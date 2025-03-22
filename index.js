document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();
});


document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
});
let currentInd=0
let images=[]

function openPopup(title,imgSrc,description){
    images=imgSrc
    currentInd=0
    updatePopup()
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-desc').textContent = description;
    document.getElementById('popup').style.display = 'flex';
}

function updatePopup(){
    document.getElementById('popup-img').src=images[currentInd]
}

function closePopup(){
    document.getElementById('popup').style.display='none'
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      // Close the popup
      popup.style.display = 'none'; // Or use whatever method you're using to hide the popup
    }
  });

function changeImage(direction) {
    currentInd += direction;

    if (currentInd >= images.length) {
        currentInd = 0;
    } else if (currentInd < 0) {
        currentInd = images.length - 1;
    }

    updatePopup();
}

function scrollToAbout(event){
    event.preventDefault()//prevent default anchor link behavior
    const target=document.getElementById('about')
    // Adjust the scroll position by offsetting for the fixed header (assuming 100px height for the header)
    const headerHeight = document.querySelector('header').offsetHeight;
    window.scrollTo({
        top:target.offsetTop-headerHeight,
        behavior:'smooth'
    })
}

function scrollToSkills(event){
    event.preventDefault()//prevent default anchor link behavior
    const target=document.getElementById('skills')
    // Adjust the scroll position by offsetting for the fixed header (assuming 100px height for the header)
    const headerHeight = document.querySelector('header').offsetHeight;
    window.scrollTo({
        top:target.offsetTop-headerHeight,
        behavior:'smooth'
    })
}

function scrollToProjects(event){
    event.preventDefault()//prevent default anchor link behavior
    const target=document.getElementById('projects')
    // Adjust the scroll position by offsetting for the fixed header (assuming 100px height for the header)
    const headerHeight = document.querySelector('header').offsetHeight;
    window.scrollTo({
        top:target.offsetTop-headerHeight,
        behavior:'smooth'
    })
}

function scrollToSocials(event){
    event.preventDefault()//prevent default anchor link behavior
    const target=document.getElementById('socials')
    // Adjust the scroll position by offsetting for the fixed header (assuming 100px height for the header)
    const headerHeight = document.querySelector('header').offsetHeight;
    window.scrollTo({
        top:target.offsetTop-headerHeight,
        behavior:'smooth'
    })
}