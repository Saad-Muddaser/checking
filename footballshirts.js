            //dark mode
            function darkMode() {
                const body = document.getElementById("body");
                body.classList.toggle("dark-mode")
            }
            
            //fade effect of each div
            document.addEventListener("DOMContentLoaded", function () { // domcontentloaded means that it covers whole webpage
                const sections = document.querySelectorAll("div, #image2");//query is like getelementbyid but it covers more like classes and ids etc

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

                //main buttons
                function myfunc() {
                    document.getElementById("demo").innerHTML= "Free Shipping On Rs.5,000 Or Above!";
                }
                function myfunc2() {
                    document.getElementById("demo").innerHTML= "Cash On Delivery - All Over Pakistan!";
                }
                function myfunc3() {
                    document.getElementById("demo").innerHTML= "14-Days Easy Return And Exchange Policy!";
                }

                //comments js
                let currentIndex = 0;

                function updateSlide() {
                    const slider = document.getElementById("in-flex");
                    slider.style.transform = `translateX(-${currentIndex * 34.5}%)`;
                }
                function updateSlideReset() {
                    const slider = document.getElementById("in-flex");
                    slider.style.transform = `translateX(-${currentIndex * 0}%)`;
                }
                function nextSlide() {
                    const totalSlides = document.querySelectorAll('.comment').length;
                    if (currentIndex < totalSlides - 3 ) {
                    currentIndex++;
                    updateSlide();
                    }
                }

                function prevSlide() {
                    if (currentIndex > 0) {
                    currentIndex--;
                    updateSlide();
                    }
                }
                function lastSlide() {
                    const totalSlides = document.querySelectorAll(".comment").length;
                    if (currentIndex === totalSlides - 3) {
                        updateSlideReset();
                        currentIndex = 0;
                    }
                }
                //   function backSlide() {
                //     if (currentIndex == totalSlides - 3) {
                //         slider.style.transform = `translateX(10%)`;
                //     }
                //   }
                setInterval(()=> {
                    nextSlide();
                    // if (currentIndex == totalSlides - 2) {
                    //     currentIndex = 0;
                    //     setTimeout(() => {
                    //         lastSlide();
                    //     }, 3000);
                    // }
                }, 30000);

                //for open and close popups on screen
                 function showPopup() {
                    document.getElementById("popupModal").style.display = "flex";
                }

                function closePopup() {
                    document.getElementById("popupModal").style.display = "none";
                }

                //multiple focuses in multiple divs 
                function setupButtonGroup(groupId) {
                const group = document.getElementById(groupId);
                const buttons = group.querySelectorAll('button');

                buttons.forEach(button => {
                    button.addEventListener('click', () => {
                    // Remove focus class from all in this group
                    buttons.forEach(btn => btn.classList.remove('focused'));
                    // Add to clicked button
                    button.classList.add('focused');
                    });
                });
                }

                // Setup both groups
                setupButtonGroup('group1');
                setupButtonGroup('group2');
                setupButtonGroup('group3');
                
                //increases a value inside input text
                function increaseInputValue() {
                        const input = document.getElementById("score");
                        let currVal = parseFloat(input.value);//it increases the number in inputs value
                        if (isNaN(currVal)) {// checks if the inputs value is a number or not
                            currVal = 1;
                        }
                        // if (currVal === 10) {// if placed here than it goes to 10 than places 1
                        //     currVal = 0;
                        // }
                        currVal += 1;
                        if (currVal === 10) {//if placed here than it goes to 9 than places 0
                            currVal = 1;
                        }
                        input.value = currVal;

                    }
                    function decreaseInputValue() {
                        const input = document.getElementById("score");
                        let currVal = parseFloat(input.value);//it increases the number in inputs value
                        if (isNaN(currVal)) {// checks if the inputs value is a number or not
                            currVal = 1;
                        }
                        
                        currVal -= 1;
                        if (currVal === 0) {//if placed here than it goes to 9 than places 0
                            currVal = 1;
                        }
                        input.value = currVal;

                    }
                
                    //increases the value inside any html tag
                function increaseScore() {
                        const score = document.getElementById('score');
                        let value1 = parseInt(score.textContent);//parseInt & parseFloat converts strings to numbers both ingore non-numeric values after the number
                        //but if any word is present before the number then it gives isNan parseFloat also includes decimal
                        value1 += 1;
                        score.textContent = value1;//textcontent adds the vlaue to score
                        if (value1 === 10) {
                            score.textContent = 1;// if value = 10 then back to 1
                        }
                    }