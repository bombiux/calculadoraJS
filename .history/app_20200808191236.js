"use strict";

class app {
    constructor() {
        this.screen = document.getElementById("screen");
        this.addEventListeners();
    }

    addEventListeners() {
        document.addEventListener("click", (e) => {
            if (e.target.closest(".numbers")) {
                this.update
            }
        });
    }
}

new app();