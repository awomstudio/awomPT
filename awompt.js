class awomPT {
    constructor(type = "slide", params = {}) {
        this.type = type;
        this.parameters = {
            col: 6,
            duration: 0.5,
            durationClosing: false,
            gapDelay: 0.02,
            delay: 0,
            ease: "ease-out",
            easeClosing: false,
            direction: "bottom",
            ...params,
        };
        this.init();
    }
    init() {
        this.startAnimation();
        this.endAnimation();
    }
    startAnimation() {
        var awompt = document.querySelector(".awompt");
        var awomptZoom;
        var awomptBox;
        var awomptOtherBoxes;
        var delay = 0;
        var color = getComputedStyle(awompt).backgroundColor;
        awompt.classList.add("awompt_remove_bg");
        switch (this.type) {
            case "slide":
                for (let i = 0; i < this.parameters.col; i++) {
                    awomptBox = document.createElement("div");
                    awomptBox.classList.add("awompt_box");
                    awomptBox.classList.add("awompt_box_" + i);
                    awompt.appendChild(awomptBox);
                    awomptBox.classList.add("start_animation_slide");
                    if (this.parameters.direction === "top") {
                        awompt.style.transform = "rotate(180deg)";
                    } else if (this.parameters.direction === "alternate") {
                        awompt.style.transform = "rotate(180deg)";
                    }
                    awomptBox.style.backgroundColor = color;
                    awomptBox.style.width = `${100 / this.parameters.col}%`;
                    awomptBox.style.animationDuration = `${this.parameters.duration}s`;
                    awomptBox.style.animationDelay = `${(delay +=
                        i === 0
                            ? this.parameters.delay
                            : this.parameters.gapDelay)}s`;
                    awomptBox.style.animationTimingFunction =
                        this.parameters.ease;
                }
                break;
            case "horizontalSlide":
                for (let i = 0; i < this.parameters.col; i++) {
                    awomptBox = document.createElement("div");
                    awomptBox.classList.add("awompt_box");
                    awomptBox.classList.add("horizontal");
                    awompt.classList.add("horizontal");
                    awomptBox.classList.add("awompt_box_" + i);
                    awompt.appendChild(awomptBox);
                    awomptBox.classList.add("start_animation_horizontal_slide");
                    if (this.parameters.direction === "left") {
                        awompt.style.transform = "rotate(180deg)";
                    } else if (this.parameters.direction === "alternate") {
                        awompt.style.transform = "rotate(180deg)";
                    } else {
                        awompt.style.transform = "rotate(180deg)";
                    }
                    awomptBox.style.backgroundColor = color;
                    awomptBox.style.height = `${100 / this.parameters.col}%`;
                    awomptBox.style.animationDuration = `${this.parameters.duration}s`;
                    awomptBox.style.animationDelay = `${(delay +=
                        i === 0
                            ? this.parameters.delay
                            : this.parameters.gapDelay)}s`;
                    awomptBox.style.animationTimingFunction =
                        this.parameters.ease;
                }
                break;
            // TODO - background-color of awomptOtherBoxes is not working!
            // case "crossSlide":
            //     awompt.style.transform = "scale(-1)";
            //     awomptBox = document.createElement("div");
            //     awomptBox.classList.add("awompt_box");
            //     awomptBox.classList.add("cross_slide");
            //     awompt.appendChild(awomptBox);
            //     awomptBox.classList.add("start_animation_cross_slide");
            //     for (let i = 0; i < 3; i++) {
            //         awomptOtherBoxes = document.createElement("div");
            //         awomptOtherBoxes.classList.add(`cross_slide_boxes_${i}`);
            //         awomptBox.appendChild(awomptOtherBoxes);
            //         awomptOtherBoxes.style.backgroundColor = color;
            //     }
            //     awomptBox.style.backgroundColor = color;
            //     awomptBox.style.animationDuration = `${this.parameters.duration}s`;
            //     awomptBox.style.animationDelay = `${this.parameters.delay}s`;
            //     awomptBox.style.animationTimingFunction = this.parameters.ease;
            //     break;
            case "fade":
                awomptBox = document.createElement("div");
                awomptBox.classList.add("awompt_box");
                awompt.appendChild(awomptBox);
                awomptBox.classList.add("start_animation_fade");
                awomptBox.style.backgroundColor = color;
                awomptBox.style.animationDuration = `${this.parameters.duration}s`;
                awomptBox.style.animationDelay = `${this.parameters.delay}s`;
                awomptBox.style.animationTimingFunction = this.parameters.ease;
                break;
            case "zoom":
                document.querySelector(".awompt").style.display = "none";
                awomptZoom = document.createElement("div");
                awomptZoom.classList.add("awompt_zoom");
                while (document.body.firstChild) {
                    awomptZoom.appendChild(document.body.firstChild);
                }
                document.body.appendChild(awomptZoom);
                awomptZoom.classList.add("start_animation_zoom");
                awomptZoom.style.animationDuration = `${this.parameters.duration}s`;
                awomptZoom.style.animationDelay = `${this.parameters.delay}s`;
                awomptZoom.style.animationTimingFunction = this.parameters.ease;
                break;
            case "zoomAndSlideUp":
                document.querySelector(".awompt").style.display = "none";
                awomptZoom = document.createElement("div");
                awomptZoom.classList.add("awompt_zoom");
                while (document.body.firstChild) {
                    awomptZoom.appendChild(document.body.firstChild);
                }
                document.body.appendChild(awomptZoom);
                awomptZoom.classList.add("start_animation_zoom_slide_up");
                awomptZoom.style.animationDuration = `${this.parameters.duration}s`;
                awomptZoom.style.animationDelay = `${
                    this.parameters.delay + 0.25
                }s`;
                awomptZoom.style.animationTimingFunction = this.parameters.ease;
                break;
            case "slideUp":
                document.querySelector(".awompt").style.display = "none";
                awomptZoom = document.createElement("div");
                awomptZoom.classList.add("awompt_zoom");
                while (document.body.firstChild) {
                    awomptZoom.appendChild(document.body.firstChild);
                }
                document.body.appendChild(awomptZoom);
                awomptZoom.classList.add("start_animation_slide_up");
                awomptZoom.style.animationDuration = `${this.parameters.duration}s`;
                awomptZoom.style.animationDelay = `${
                    this.parameters.delay + 0.25
                }s`;
                awomptZoom.style.animationTimingFunction = this.parameters.ease;
                break;
            case "line":
                var awomptBoxLeft;
                var awomptBoxRight;
                awompt.classList.add("line_animation");
                awomptBoxLeft = document.createElement("div");
                awomptBoxRight = document.createElement("div");
                awomptBoxLeft.classList.add("awompt_box_left");
                awomptBoxRight.classList.add("awompt_box_right");
                awompt.appendChild(awomptBoxLeft);
                awompt.appendChild(awomptBoxRight);
                awomptBoxLeft.classList.add("start_animation_line_left");
                awomptBoxRight.classList.add("start_animation_line_right");
                awomptBoxLeft.style.backgroundColor = color;
                awomptBoxLeft.style.animationDuration = `${this.parameters.duration}s`;
                awomptBoxLeft.style.animationDelay = `${this.parameters.delay}s`;
                awomptBoxLeft.style.animationTimingFunction =
                    this.parameters.ease;
                awomptBoxRight.style.backgroundColor = color;
                awomptBoxRight.style.animationDuration = `${this.parameters.duration}s`;
                awomptBoxRight.style.animationDelay = `${this.parameters.delay}s`;
                awomptBoxRight.style.animationTimingFunction =
                    this.parameters.ease;
                break;
        }
    }
    endAnimation() {
        var awompt = document.querySelector(".awompt");
        var awomptZoom = document.querySelector(".awompt_zoom");
        var awomptBoxes = document.querySelectorAll(".awompt_box");
        var awomptLineLeft = document.querySelector(".awompt_box_left");
        var awomptLineRight = document.querySelector(".awompt_box_right");
        var allLinks = document.querySelectorAll("a");
        allLinks.forEach((link) => {
            link.addEventListener("click", (e) => {
                if (link.classList.contains("no_awompt")) {
                    return;
                } else {
                    e.preventDefault();
                    const href = link.getAttribute("href");
                    const endDuration =
                        this.parameters.durationClosing === false
                            ? this.parameters.duration
                            : this.parameters.durationClosing;
                    switch (this.type) {
                        case "slide":
                            var delay = 0;
                            if (this.parameters.direction === "bottom") {
                                awompt.classList.add(
                                    "container_end_animation_slide"
                                );
                            } else if (this.parameters.direction === "top") {
                                awompt.classList.add(
                                    "container_end_animation_slide_2"
                                );
                            } else if (
                                this.parameters.direction === "alternate"
                            ) {
                                awompt.classList.add(
                                    "container_end_animation_slide_alternate"
                                );
                            } else if (
                                this.parameters.direction === "alternate top"
                            ) {
                                awompt.classList.add(
                                    "container_end_animation_slide_alternate_top"
                                );
                            } else {
                                awompt.classList.add(
                                    "container_end_animation_slide"
                                );
                            }
                            awomptBoxes.forEach((awomptBox) => {
                                awomptBox.classList.add("end_animation_slide");
                                awomptBox.style.animationDuration =
                                    this.parameters.durationClosing === false
                                        ? `${this.parameters.duration}s`
                                        : `${this.parameters.durationClosing}s`;
                                awomptBox.style.animationTimingFunction =
                                    this.parameters.easeClosing === false
                                        ? this.parameters.ease
                                        : this.parameters.easeClosing;
                                awomptBox.style.animationDelay = `${(delay +=
                                    this.parameters.gapDelay)}s`;
                            });
                            setTimeout(() => {
                                window.location.href = href;
                            }, (this.parameters.gapDelay * this.parameters.col + endDuration) * 1000);
                            break;
                        case "horizontalSlide":
                            var delay = 0;
                            if (this.parameters.direction === "left") {
                                awompt.classList.add(
                                    "container_end_animation_horizontal_slide"
                                );
                            } else if (this.parameters.direction === "right") {
                                awompt.classList.add(
                                    "container_end_animation_horizontal_slide_2"
                                );
                            } else if (
                                this.parameters.direction === "alternate"
                            ) {
                                awompt.classList.add(
                                    "container_end_animation_horizontal_slide_alternate"
                                );
                            } else if (
                                this.parameters.direction === "alternate left"
                            ) {
                                awompt.classList.add(
                                    "container_end_animation_horizontal_slide_alternate_top"
                                );
                            } else {
                                awompt.classList.add(
                                    "container_end_animation_horizontal_slide"
                                );
                            }
                            awomptBoxes.forEach((awomptBox) => {
                                awomptBox.classList.add(
                                    "end_animation_horizontal_slide"
                                );
                                awomptBox.style.animationDuration =
                                    this.parameters.durationClosing === false
                                        ? `${this.parameters.duration}s`
                                        : `${this.parameters.durationClosing}s`;
                                awomptBox.style.animationTimingFunction =
                                    this.parameters.easeClosing === false
                                        ? this.parameters.ease
                                        : this.parameters.easeClosing;
                                awomptBox.style.animationDelay = `${(delay +=
                                    this.parameters.gapDelay)}s`;
                            });
                            setTimeout(() => {
                                window.location.href = href;
                            }, (this.parameters.gapDelay * this.parameters.col + endDuration) * 1000);
                            break;
                        // TODO - background-color of awomptOtherBoxes is not working!
                        // case "crossSlide":
                        //     awompt.classList.add(
                        //         "container_end_animation_cross_slide"
                        //     );
                        //     awomptBoxes.forEach((awomptBox) => {
                        //         awomptBox.classList.add(
                        //             "end_animation_cross_slide"
                        //         );
                        //         awomptBox.style.animationDuration =
                        //             this.parameters.durationClosing === false
                        //                 ? `${this.parameters.duration}s`
                        //                 : `${this.parameters.durationClosing}s`;
                        //         awomptBox.style.animationTimingFunction =
                        //             this.parameters.easeClosing === false
                        //                 ? this.parameters.ease
                        //                 : this.parameters.easeClosing;
                        //         awomptBox.style.animationDelay = "0s";
                        //     });
                        //     setTimeout(() => {
                        //         window.location.href = href;
                        //     }, endDuration * 1000);
                        //     break;
                        case "fade":
                            awomptBoxes.forEach((awomptBox) => {
                                awomptBox.classList.add("end_animation_fade");
                                awomptBox.style.animationDuration =
                                    this.parameters.durationClosing === false
                                        ? `${this.parameters.duration}s`
                                        : `${this.parameters.durationClosing}s`;
                                awomptBox.style.animationTimingFunction =
                                    this.parameters.easeClosing === false
                                        ? this.parameters.ease
                                        : this.parameters.easeClosing;
                                awomptBox.style.animationDelay = "0s";
                            });
                            setTimeout(() => {
                                window.location.href = href;
                            }, endDuration * 1000);
                            break;
                        case "zoom":
                            awomptZoom.classList.add("end_animation_zoom");
                            awomptZoom.style.animationDuration =
                                this.parameters.durationClosing === false
                                    ? `${this.parameters.duration}s`
                                    : `${this.parameters.durationClosing}s`;
                            awomptZoom.style.animationTimingFunction =
                                this.parameters.easeClosing === false
                                    ? this.parameters.ease
                                    : this.parameters.easeClosing;
                            awomptZoom.style.animationDelay = "0s";
                            setTimeout(() => {
                                window.location.href = href;
                            }, this.parameters.duration * 1000);
                            break;
                        case "zoomAndSlideUp":
                            awomptZoom.classList.add(
                                "end_animation_zoom_slide_up"
                            );
                            awomptZoom.style.animationDuration =
                                this.parameters.durationClosing === false
                                    ? `${this.parameters.duration}s`
                                    : `${this.parameters.durationClosing}s`;
                            awomptZoom.style.animationDelay = `${this.parameters.delay}s`;
                            awomptZoom.style.animationTimingFunction =
                                this.parameters.easeClosing === false
                                    ? this.parameters.ease
                                    : this.parameters.easeClosing;
                            awomptZoom.style.animationDelay = "0s";
                            setTimeout(() => {
                                window.location.href = href;
                            }, endDuration * 1000);
                            break;
                        case "slideUp":
                            awomptZoom.classList.add("end_animation_slide_up");
                            awomptZoom.style.animationDuration =
                                this.parameters.durationClosing === false
                                    ? `${this.parameters.duration}s`
                                    : `${this.parameters.durationClosing}s`;
                            awomptZoom.style.animationDelay = `${this.parameters.delay}s`;
                            awomptZoom.style.animationTimingFunction =
                                this.parameters.easeClosing === false
                                    ? this.parameters.ease
                                    : this.parameters.easeClosing;
                            awomptZoom.style.animationDelay = "0s";
                            setTimeout(() => {
                                window.location.href = href;
                            }, endDuration * 1000);
                            break;
                        case "line":
                            awomptLineLeft.classList.add(
                                "end_animation_line_left"
                            );
                            awomptLineRight.classList.add(
                                "end_animation_line_right"
                            );
                            awomptLineLeft.style.animationDuration =
                                this.parameters.durationClosing === false
                                    ? `${this.parameters.duration}s`
                                    : `${this.parameters.durationClosing}s`;
                            awomptLineLeft.style.animationTimingFunction =
                                this.parameters.easeClosing === false
                                    ? this.parameters.ease
                                    : this.parameters.easeClosing;
                            awomptLineLeft.style.animationDelay = "0s";
                            awomptLineRight.style.animationDuration =
                                this.parameters.durationClosing === false
                                    ? `${this.parameters.duration}s`
                                    : `${this.parameters.durationClosing}s`;
                            awomptLineRight.style.animationTimingFunction =
                                this.parameters.easeClosing === false
                                    ? this.parameters.ease
                                    : this.parameters.easeClosing;
                            awomptLineRight.style.animationDelay = "0s";
                            setTimeout(() => {
                                window.location.href = href;
                            }, endDuration * 1000);
                            break;
                    }
                }
            });
        });
    }
}
