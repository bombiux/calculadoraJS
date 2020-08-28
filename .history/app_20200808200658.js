"use strict";

class app {
    constructor() {
        this.screen = document.getElementById('screen');
        this.screenValue = 0;

        this.currentNum;
        this.newNum;
        this.operator;

        this.addEventListeners();
    }

    addEventListeners() {
        document.addEventListener("click", (e) => {
            if (e.target.closest(".numbers")) {
                this.updateScreen(e.target);
            } else if (e.target.closest(".operator")) {
                this.operate(e.target);
            } else if (e.target.closest(".equals")) {
                this.showNewValue
            }
        });
    }

    operate(operator) {
        this.updateCurrentNum();
        this.updateOperator(operator);
    }

    updateCurrentNum() {
        this.currentNum = this.getScreenValue();
    }

    updateOperator(operator) {
        this.operator = operator.innerHTML;
    }

    getScreenValue() {
        return document.getElementById('screen').value;
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
        this.screenValue = this.getScreenValue();
    }
}

new app();