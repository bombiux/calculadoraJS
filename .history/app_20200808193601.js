"use strict";

class app {
    constructor() {
        this.screen = document.getElementById('screen');
        this.screenValue = 0;
        this.addEventListeners();
    }

    addEventListeners() {
        document.addEventListener("click", (e) => {
            if (e.target.closest(".numbers")) {
                this.updateScreen(e.target);
                console.log(typeof parseInt(e.target.innerHTML));
            }
        });
    }

    updateScreen(number) {
        this.screenValue = screen.value;
        console.log(this.screenValue);
        if (!this.screenValue) {
            this.screen.value = number.innerHTML;
        } else {
        }
    }
}

new app();