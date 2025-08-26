            //dark mode
            function darkMode() {
                const body = document.getElementById("body");
                body.classList.toggle("dark-mode")
            }
            
            //for displaying and hiding any div ,image, etc
            document.getElementById('link2').addEventListener('click', function(event) {
                            event.preventDefault(); // prevent page jump
                            const div = document.getElementById('hiddendiv2');
                            div.style.display = div.style.display === 'none' ? 'block' : 'none';
                        });

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

                //main buttons on footballshirts homepage
                function myfunc() {
                    document.getElementById("demo").innerHTML= "Free Shipping On Rs.5,000 Or Above!";
                }
                function myfunc2() {
                    document.getElementById("demo").innerHTML= "Cash On Delivery - All Over Pakistan!";
                }
                function myfunc3() {
                    document.getElementById("demo").innerHTML= "14-Days Easy Return And Exchange Policy!";
                }

                // slider comments js
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
                
                //increment counter on a div
                document.addEventListener("DOMContentLoaded", () => {
                const counterDiv = document.getElementById("counter");
                let count = 0;
                const target = 100; // Target number
                const speed = 20;   // Lower = faster

                const increment = () => {
                    if (count < target) {
                    count++;
                    counterDiv.textContent = count;
                    setTimeout(increment, speed);
                    }
                };

                increment(); // Start the counter
                });

                //mouse shadow 
                 const shadow = document.querySelector('.mouse-shadow');//id of a div

                document.addEventListener('mousemove', (e) => {//mousemove event
                  shadow.style.left = `${e.clientX}px`;//client takes the coords of mouse movement in horizontal and vertical direction
                  shadow.style.top = `${e.clientY}px`;//then it moves the div same as the position of mouse
                });
                //for smoothness
                let mouseX = 0, mouseY = 0;
                  let shadowX = 0, shadowY = 0;

                  document.addEventListener('mousemove', (e) => {
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                  });

                  function animate() {
                    shadowX += (mouseX - shadowX) * 0.1;
                    shadowY += (mouseY - shadowY) * 0.1;
                    shadow.style.left = `${shadowX}px`;
                    shadow.style.top = `${shadowY}px`;

                    requestAnimationFrame(animate);
                  }

                  animate();

                  //popup screen
                  function openNewPopup() {
                    // Define the URL to load in the new window (can be an empty string for a blank window)
                    const url = ""; // Or "" for a blank window

                    // Define the name of the new window (can be used to target existing windows)
                    const name = "myPopup";

                    // Define window parameters (size, position, features)
                    const params = "width=600,height=400,left=100,top=100,resizable=yes,scrollbars=yes";

                    // Open the new window
                    const newWindow = window.open(url, name, params);

                    // Optional: Focus the new window if it opened successfully
                    if (newWindow) {
                        newWindow.focus();
                    }
                    }