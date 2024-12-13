

function showMoreLinks(){
    //This line gets all the links Under the class name .hidden-links
    const hiddenLinks = document.querySelectorAll('.hidden-link');

    //Shows up to 5 more links at a time
    let showCount = 0;
    hiddenLinks.forEach(link => {
        if (link.style.display === 'none' && showCount < 5){
            link.style.display = 'block';
            showCount++;
        }
    });

    // Hides the show more link when there is no more links to show
    if ([...hiddenLinks].every(link => link.style.display === 'block')) {
        document.getElementById('show-more').style.display = 'none';
    }

}

document.addEventListener("DOMContentLoaded", () => {
   document.querySelectorAll('.hidden-link').forEach(link =>{
       link.style.display = 'none';
   });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.body.classList.add("no-scroll");
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.classList.remove("no-scroll");
}


window.onscroll = function() {
    var button = document.getElementById("banner-stick");
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};


const carousel = document.querySelector('.carousel-track');

// Pause on hover
carousel.addEventListener('mouseover', () => {
    carousel.style.animationPlayState = 'paused';
});

// Resume on mouse leave
carousel.addEventListener('mouseout', () => {
    carousel.style.animationPlayState = 'running';
});