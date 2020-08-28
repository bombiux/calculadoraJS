"use strict";

class app {
    constructor() {
        this.screen = '';
        this.screenValue = 0;
        this.addEventListeners();
    }

    addEventListeners() {
        document.addEventListener("click", (e) => {
            if (e.target.closest(".numbers")) {
                this.updateScreen(e.target);
            }
        });
    }

    updateScreen(number) {
        this.updateScreenValue();

        this.screenValue = screen.value;
        console.log(this.screenValue);
        if (!this.screenValue) {
            this.screen.value = number.innerHTML;
        }
    }

    upda
}

new app();