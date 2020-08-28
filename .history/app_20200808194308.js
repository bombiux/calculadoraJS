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
            }
        });
    }

    updateScreen(number) {
        this.updateScreenValue();
        console.log(this.screenValue);
        if (this.screenValue) {
            this.screen.value = number.innerHTML;
        } else {
            this.screen.value = this.screenValue + number.innerHTML;
        }
    }

    updateScreenValue() {
        this.screenValue = document.getElementById('screen').value;
    }
}

new app();