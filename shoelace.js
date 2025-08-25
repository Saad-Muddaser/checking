
        document.addEventListener("DOMContentLoaded", function () { // domcontentloaded means that it covers whole webpage
                const sections = document.querySelectorAll(".div");//query is like getelementbyid but it covers more like classes and ids etc

                const observer = new IntersectionObserver((entries, observer) => {//intersectionobserver checks whether a div or anything enters a viewport
                    entries.forEach(entry => {// foreach starts a loop for entry
                    if (entry.isIntersecting) {//isintersecting works under intersectionobserver. it checks that is this element viewed or not
                        entry.target.classList.add("visible");//entry.taregt checks which element is being observed at the time
                        observer.unobserve(entry.target);
                    }
                    });
                }, {
                    threshold: 0.01//it checks if the 10% of the area is covered over scrolling than it will show the div
                });
                
                sections.forEach(section => {
                    observer.observe(section);// .observe means it tells the observer variable to look it/track it
                });
                });

            document.addEventListener("DOMContentLoaded", function () { // domcontentloaded means that it covers whole webpage
                const sections = document.querySelectorAll(".head");//query is like getelementbyid but it covers more like classes and ids etc

                const observer = new IntersectionObserver((entries, observer) => {//intersectionobserver checks whether a div or anything enters a viewport
                    entries.forEach(entry => {// foreach starts a loop for entry
                    if (entry.isIntersecting) {//isintersecting works under intersectionobserver. it checks that is this element viewed or not
                        entry.target.classList.add("headvis");//entry.taregt checks which element is being observed at the time
                        observer.unobserve(entry.target);
                    }
                    });
                }, {
                    threshold: 0.01//it checks if the 10% of the area is covered over scrolling than it will show the div
                });
                
                sections.forEach(section => {
                    observer.observe(section);// .observe means it tells the observer variable to look it/track it
                });
                });

            document.addEventListener("DOMContentLoaded", function () { // domcontentloaded means that it covers whole webpage
                const sections = document.querySelectorAll(".img1");//query is like getelementbyid but it covers more like classes and ids etc

                const observer = new IntersectionObserver((entries, observer) => {//intersectionobserver checks whether a div or anything enters a viewport
                    entries.forEach(entry => {// foreach starts a loop for entry
                    if (entry.isIntersecting) {//isintersecting works under intersectionobserver. it checks that is this element viewed or not
                        entry.target.classList.add("playvis");//entry.taregt checks which element is being observed at the time
                        observer.unobserve(entry.target);
                    }
                    });
                }, {
                    threshold: 0.01//it checks if the 10% of the area is covered over scrolling than it will show the div
                });
                
                sections.forEach(section => {
                    observer.observe(section);// .observe means it tells the observer variable to look it/track it
                });
                });

            document.addEventListener("DOMContentLoaded", function () { // domcontentloaded means that it covers whole webpage
                const sections = document.querySelectorAll(".btn1");//query is like getelementbyid but it covers more like classes and ids etc

                const observer = new IntersectionObserver((entries, observer) => {//intersectionobserver checks whether a div or anything enters a viewport
                    entries.forEach(entry => {// foreach starts a loop for entry
                    if (entry.isIntersecting) {//isintersecting works under intersectionobserver. it checks that is this element viewed or not
                        entry.target.classList.add("btnvis");//entry.taregt checks which element is being observed at the time
                        observer.unobserve(entry.target);
                    }
                    });
                }, {
                    threshold: 0.01//it checks if the 10% of the area is covered over scrolling than it will show the div
                });
                
                sections.forEach(section => {
                    observer.observe(section);// .observe means it tells the observer variable to look it/track it
                });
                });

            document.addEventListener("DOMContentLoaded", function () { // domcontentloaded means that it covers whole webpage
                const sections = document.querySelectorAll(".div-img-inside");//query is like getelementbyid but it covers more like classes and ids etc

                const observer = new IntersectionObserver((entries, observer) => {//intersectionobserver checks whether a div or anything enters a viewport
                    entries.forEach(entry => {// foreach starts a loop for entry
                    if (entry.isIntersecting) {//isintersecting works under intersectionobserver. it checks that is this element viewed or not
                        entry.target.classList.add("chardiv-vis");//entry.taregt checks which element is being observed at the time
                        observer.unobserve(entry.target);
                    }
                    });
                }, {
                    threshold: 0.01//it checks if the 10% of the area is covered over scrolling than it will show the div
                });
                
                sections.forEach(section => {
                    observer.observe(section);// .observe means it tells the observer variable to look it/track it
                });
                });
            document.addEventListener("DOMContentLoaded", function () { // domcontentloaded means that it covers whole webpage
                const sections = document.querySelectorAll(".otherbtn");//query is like getelementbyid but it covers more like classes and ids etc

                const observer = new IntersectionObserver((entries, observer) => {//intersectionobserver checks whether a div or anything enters a viewport
                    entries.forEach(entry => {// foreach starts a loop for entry
                    if (entry.isIntersecting) {//isintersecting works under intersectionobserver. it checks that is this element viewed or not
                        entry.target.classList.add("othervis");//entry.taregt checks which element is being observed at the time
                        observer.unobserve(entry.target);
                    }
                    });
                }, {
                    threshold: 0.01//it checks if the 10% of the area is covered over scrolling than it will show the div
                });
                
                sections.forEach(section => {
                    observer.observe(section);// .observe means it tells the observer variable to look it/track it
                });
                });
            document.addEventListener("DOMContentLoaded", function () { // domcontentloaded means that it covers whole webpage
                const sections = document.querySelectorAll(".divimg-hover");//query is like getelementbyid but it covers more like classes and ids etc

                const observer = new IntersectionObserver((entries, observer) => {//intersectionobserver checks whether a div or anything enters a viewport
                    entries.forEach(entry => {// foreach starts a loop for entry
                    if (entry.isIntersecting) {//isintersecting works under intersectionobserver. it checks that is this element viewed or not
                        entry.target.classList.add("divimghovervis");//entry.taregt checks which element is being observed at the time
                        observer.unobserve(entry.target);
                    }
                    });
                }, {
                    threshold: 0.01//it checks if the 10% of the area is covered over scrolling than it will show the div
                });
                
                sections.forEach(section => {
                    observer.observe(section);// .observe means it tells the observer variable to look it/track it
                });
                });
            document.addEventListener("DOMContentLoaded", function () { // domcontentloaded means that it covers whole webpage
                const sections = document.querySelectorAll(".counterdiv");//query is like getelementbyid but it covers more like classes and ids etc

                const observer = new IntersectionObserver((entries, observer) => {//intersectionobserver checks whether a div or anything enters a viewport
                    entries.forEach(entry => {// foreach starts a loop for entry
                    if (entry.isIntersecting) {//isintersecting works under intersectionobserver. it checks that is this element viewed or not
                        entry.target.classList.add("counterdivvis");//entry.taregt checks which element is being observed at the time
                        observer.unobserve(entry.target);
                    }
                    });
                }, {
                    threshold: 0.01//it checks if the 10% of the area is covered over scrolling than it will show the div
                });
                
                sections.forEach(section => {
                    observer.observe(section);// .observe means it tells the observer variable to look it/track it
                });
                });
            
            /* // document.addEventListener("DOMContentLoaded", () => {
            //     const counter = document.querySelectorAll("#counter");
            //     let count = 0;
            //     let target = 100;
            //     let speed = 20;
            //     function inc() {
            //          for(let count; count < target; count++) {
            //             counter.textContent = count;
            //         setTimeout(inc, speed);
            //     };
            // };
            // inc()
            // }); }*/

                let currentIndex = 0;

                  function updateSlide() {
                      const slider = document.getElementById("slider-support");
                      slider.style.transform = `translateX(-${currentIndex * 37}%)`;
                  }
                  function nextSlide() {
                      const totalSlides = document.querySelectorAll('.slide1').length;
                      if (currentIndex < totalSlides - 3 ) {
                      currentIndex++;
                      updateSlide();
                      }
                  }

                  setInterval(()=> {
                      nextSlide();
                  }, 5000);

                  let shadow = document.querySelector(".mouse-shadow");

                  document.addEventListener("mousemove", (e)=>{
                    shadow.style.left = `${e.clientX}px`;
                    shadow.style.top = `${e.clientY}px`;
                  });
