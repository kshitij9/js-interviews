class Carousel {
    constructor(carouselElem) {
        this.carousel = carouselElem;
        this.carouselItems = carouselElem.getElementsByClassName('carousel-item');
        this.nextBtn = carouselElem.querySelector('.carousel-control-next');
        this.prevBtn = carouselElem.querySelector('.carousel-control-prev');
        this.currentIndex = 0;
        this.prevItemIndex = this.carouselItems.length - 1;
        this.nextItemIndex = 1;
        this.isSliding = false; //Need to track when the carousel is sliding, so the carousel controls only change when the carousel is done sliding

        this.setEventListeners();
    }

    setEventListeners() {
        this.prevBtn.addEventListener('click', () => {
            this.prev();
        });

        this.nextBtn.addEventListener('click', () => {
            this.next();
        })
    }

    next() {
        if(this.isSliding) {
            return;
        }

        this.isSliding = true;

        this.carouselItems[this.nextItemIndex].classList.add('next-item');

        setTimeout(() => {
            this.carouselItems[this.currentIndex].classList.add('slide-next');
            this.carouselItems[this.nextItemIndex].classList.add('slide-end');
            this.carouselItems[this.nextItemIndex].classList.add('active');
        }, 20);

        setTimeout(() => {
            this.carouselItems[this.currentIndex].classList.remove('active', 'slide-next');
            this.carouselItems[this.nextItemIndex].classList.remove('next-item', 'slide-end');
            this.isSliding = false;
            this.setIndices("NEXT");
        }, 400);
    }

    prev() {
        if(this.isSliding) {
            return;
        }

        this.isSliding = true;

        this.carouselItems[this.prevItemIndex].classList.add('prev-item');

        setTimeout(() => {
            this.carouselItems[this.currentIndex].classList.add('slide-prev');
            this.carouselItems[this.prevItemIndex].classList.add('slide-end');
            this.carouselItems[this.prevItemIndex].classList.add('active');
        }, 20);

        setTimeout(() => {
            this.carouselItems[this.currentIndex].classList.remove('active', 'slide-prev');
            this.carouselItems[this.prevItemIndex].classList.remove('prev-item', 'slide-end');
            this.isSliding = false;
            this.setIndices("PREV");
        }, 400);

    }

    setIndices(direction) { 
        let index;
        if (direction === "NEXT") {
            index = this.currentIndex === this.carouselItems.length - 1 ? 0 : this.currentIndex + 1;
        } 
        if (direction === "PREV") {
            index = this.currentIndex === 0 ? this.carouselItems.length - 1 : this.currentIndex - 1;
        }
        if (index === 0) {
            this.currentIndex = index;
            this.nextItemIndex = index + 1;
            this.prevItemIndex = this.carouselItems.length - 1;
        } else if (index === this.carouselItems.length - 1) {
            this.currentIndex = this.carouselItems.length - 1;
            this.nextItemIndex = 0;
            this.prevItemIndex = this.carouselItems - 1;
        } else {
            this.currentIndex = index;
            this.nextItemIndex = index + 1;
            this.prevItemIndex = index - 1;
        }
    }
}

const slider = new Carousel(
    document.querySelector(".carousel")
);