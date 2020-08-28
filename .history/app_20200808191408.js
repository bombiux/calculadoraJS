"use strict";

class app {
    constructor() {
        this.screen = document.getElementById("screen");
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
        if (!screen.value) {
            console.log("value is 0")
        }
    }
}

new app();