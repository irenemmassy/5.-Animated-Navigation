const menuToggle = document.querySelector("#menu-toggle");
const activeElements = document.querySelectorAll(".active-element");

menuToggle.addEventListener("click", function () {
    for (let active = 0; active < activeElements.length; active++) {
        activeElements[active].classList.toggle("active");

    }

    const navBtnMenu = menuToggle.childNodes[1];
    navBtnMenu.classList.toggle("fa-times");

    const pageBg = document.querySelector(".main-container");
    if (navBtnMenu.classList.contains("fa-times")) {
        pageBg.style.filter = "blur(3px)";
    } else {
        setTimeout(function () {
            pageBg.style.filter = "blur(0px)";
        }, 500)
    }

    const listItems = document.querySelectorAll(".main-nav-list a");
    // console.log(listItems)

    listItems.forEach(function (item, index) {
        // console.log(index)
        // item.style.transition = `all .5s linear${index * 0.3}s`;
        console.log((item.style.transition = `all .5s linear ${index * 0.3}s`))
    });
    // console.log((item.style.transition = `all .5s linear ${index * 0.3}s`))
});