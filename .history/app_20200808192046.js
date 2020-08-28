"use strict";

class app {
    constructor() {
        this.screen;
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
        screen = document.getElementById('screen');

        if (!screen.value) {
            screen.value
        } else {
            console.log(`value is ${screen.value}`);
        }
    }
}

new app();