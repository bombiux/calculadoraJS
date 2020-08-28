"use strict";

class app {
    constructor() {
        this.screen = document.getElementById("screen");
        this.addEventListeners();
    }

    addEventListeners() {
        document.addEventListener("click", (e) => {
            console.log(e.target)
        });
    }
}

new app();