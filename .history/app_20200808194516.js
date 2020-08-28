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
        console.log(this.screenValue.length);
        if (this.screenValue == 0) {
            this.screen.value = number.innerHTML;
        } else if( this.screenValue.length < 9) {
            this.screen.value = this.screenValue + number.innerHTML;
        } els
    }

    updateScreenValue() {
        this.screenValue = document.getElementById('screen').value;
    }
}

new app();