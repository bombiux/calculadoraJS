"use strict";

class app {
    constructor() {
        this.screen;
        this.addEventListeners();
        this.updateScreen(number);
    }

    addEventListeners() {
        document.addEventListener("click", (e) => {
            if (e.target.closest(".numbers")) {
                this.updateScreen(e.target);
            }
        });
    }

    updateScreen(number) {
        scree
        if (!screen.value) {
            console.log("value is 0");
        }
    }
}

new app();