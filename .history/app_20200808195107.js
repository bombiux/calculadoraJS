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
            } else if (e.target.closest(".operator")) {
                this.operate(e.target);
            }
        });
    }

    operate(operator) {
        switch (operator.innerHTML) {
            case "÷":
                this.divide();
            case "=":
                this.updateScreen();
            case "+":
                this.sum();
                break;
            case "-"::
        }
    }

    updateScreen(number) {
        this.updateScreenValue();
        console.log(this.screenValue);
        if (this.screenValue == 0) {
            this.screen.value = number.innerHTML;
        } else if( this.screenValue.length < 9) {
            this.screen.value = this.screenValue + number.innerHTML;
        } else {
            return
        }
    }

    updateScreenValue() {
        this.screenValue = document.getElementById('screen').value;
    }
}

new app();