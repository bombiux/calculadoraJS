"use strict";

class app {
    constructor() {
        this.screen = document.getElementById("screen");
        this.addEventListeners();
        this.updateScreen(number)
    }

    addEventListeners() {
        document.addEventListener("click", (e) => {
            if (e.target.closest(".numbers")) {
                this.updateScreen(e.target);
            }
        });
    }
}

new app();