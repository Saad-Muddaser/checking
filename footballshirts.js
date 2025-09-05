          function darkMode() {
                const body = document.getElementById("body");
                body.classList.toggle("dark-mode")
            }

            let nav = document.getElementById("nav1");
            let slideNav = document.getElementById("slide-nav");
            nav.addEventListener("click", ()=> {
            
            slideNav.classList.toggle("toggle");
            nav.classList.toggle("cancelBtn")
            })
          
            document.addEventListener("DOMContentLoaded", function () { // domcontentloaded means that it covers whole webpage
                const sections = document.querySelectorAll("div");//query is like getelementbyid but it covers more like classes and ids etc

                const observer = new IntersectionObserver((entries, observer) => {//intersectionobserver checks whether a div or anything enters a viewport
                    entries.forEach(entry => {// foreach starts a loop for entry
                    if (entry.isIntersecting) {//isintersecting works under intersectionobserver. it checks that is this element viewed or not
                        entry.target.classList.add("visible");//entry.taregt checks which element is being observed at the time
                        observer.unobserve(entry.target);
                    }
                    });
                }, {
                    threshold: 0.11//it checks if the 10% of the area is covered over scrolling than it will show the div
                });
                
                sections.forEach(section => {
                    observer.observe(section);// .observe means it tells the observer variable to look it/track it
                });
                });

                function myfunc() {
                    document.getElementById("demo").innerHTML= "Free Shipping On Rs.5,000 Or Above!";
                }
                function myfunc2() {
                    document.getElementById("demo").innerHTML= "Cash On Delivery - All Over Pakistan!";
                }
                function myfunc3() {
                    document.getElementById("demo").innerHTML= "14-Days Easy Return And Exchange Policy!";
                }
        
                let currentIdx = 0;

                function updateSlide() {
                    const slider = document.getElementById("in-flex");
                    slider.style.transform = `translateX(-${currentIdx * 34.5}%)`;
                }
                function updateSlideReset() {
                    const slider = document.getElementById("in-flex");
                    slider.style.transform = `translateX(-${currentIdx * 0}%)`;
                }
                function nextSlide() {
                    const totalSlides = document.querySelectorAll('.comment').length;
                    if (currentIdx < totalSlides - 3 ) {
                    currentIdx++;
                    updateSlide();
                    }
                }

                function prevSlide() {
                    if (currentIdx > 0) {
                    currentIdx--;
                    updateSlide();
                    }
                }
                function lastSlide() {
                    const totalSlides = document.querySelectorAll(".comment").length;
                    if (currentIdx === totalSlides - 3) {
                        updateSlideReset();
                        currentIdx = 0;
                    }
                }
                setInterval(()=> {
                    nextSlide();
                }, 30000);                

                // setTimeout(() => {
                //     window.open("laliga.htm","_self")
                // }, 5000);

                function goBack() {
                    window.open("laliga.htm","_self")
                }
let imageHome = document.getElementById("image2");
let mainSearch = document.getElementById("main-search-bar");
let search = document.getElementById("searchpopup").addEventListener("click", ()=> {
        mainSearch.style.display = "flex";
        imageHome.style.opacity = "0.8";
    });
let cancelSearch = document.getElementById("cancelSearch").addEventListener("click", ()=> {
    mainSearch.style.display = "none";
    imageHome.style.opacity = "1";
})
