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
                console.log(typeof parseInt(e.target.innerHTML));
            }
        });
    }

    updateScreen(number) {
        screen = document.getElementById('screen');

        if (!screen.value) {
            screen.value = scree
        } else {
            console.log(`value is ${screen.value}`);
        }
    }
}

new app();