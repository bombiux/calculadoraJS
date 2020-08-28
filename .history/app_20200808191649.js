"use strict";

class app {
    constructor() {
        this.screen;
        this.addEventListeners();
        this.updateScreen();
    }

    addEventListeners() {
        document.addEventListener("click", (e) => {
            if (e.target.closest(".numbers")) {
                this.updateScreen(e.target);
            }
        });
    }

    updateScreen() {
        screen = document.getElementById('screen');

        if (!screen.value) {
            console.log("value is 0");
        } else {
            console.log(`value is ${screen.value}`);
        }
    }
}

new app();