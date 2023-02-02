let init = () => {
    let container = document.getElementsByClassName("jumbo-slider__container")[0],
    slides = document.getElementsByClassName("jumbo-slider__slide"),
    circles = document.getElementsByClassName("jumbo-slider__circle"),
    links = document.getElementsByClassName("jumbo-slider__link"),
    current = 1,
    time = 6000;

    //add animation class to slide
    slides[current-1].classList.add("jumbo-slider__slide--active");
    links[current-1].classList.add("jumbo-slider__link--active");
    circles[current-1].classList.add('jumbo-slider__circle--active');

    //update elipsis and name links
    let updateNav = (current) => {
        // console.log(`current: ${current}`);
        for (let index = 0; index < slides.length; index++) {
            links[index].classList.remove("jumbo-slider__link--active");
            circles[index].classList.remove("jumbo-slider__circle--active");
        }

        links[current-1].classList.add("jumbo-slider__link--active");
        circles[current-1].classList.add("jumbo-slider__circle--active");
    }

    let startSliding = () => {
        setInterval(() => {
            // console.log(`current: ${current}`);
            slides[1].classList.add("jumbo-slider__slide--active");
            slides[0].classList.remove("jumbo-slider__slide--active");

            //makes a copy of all the child elements inside container of ul
            container.appendChild(slides[0].cloneNode([true]));
            container.removeChild(slides[0]);

            if (current < slides.length) {
                current++;
                updateNav(current);
            } else {
                current = 1;
                updateNav(current);
            }
        }, time);
    }
    startSliding();
}

init();