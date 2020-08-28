"use strict";

class app {
    constructor() {
        this.screen = document.getElementById('screen');
        this.screenValue = 0;

        this.currentNum;
        this.newNum;
        this.operator;
        this.result;
        this.screenToken;

        this.addEventListeners();
    }

    addEventListeners() {
        document.addEventListener("click", (e) => {
            if (e.target.closest(".numbers")) {
                if (this.screenToken) {
                    this.screen.value = 0
                    this.screenToken = false;
                    this.updateScreen(e.target);
                } else {
                    this.updateScreen(e.target);
                }
            } else if (e.target.closest(".operator")) {
                this.operate(e.target);
            } else if (e.target.closest(".equals")) {
                this.showNewValue();
            } else if (e.target.closest(".special")) {
                
            }
        });
    }

    operate(operator) {
        this.currentNum = parseFloat(this.getScreenValue());
        this.operator = operator.innerHTML;
        this.screenToken = true;
    }

    showNewValue() {
        this.newNum = parseFloat(this.getScreenValue());
        console.log(typeof this.newNum);
        console.log(typeof this.currentNum);
        console.log(typeof this.operator);
        console.log(eval(this.currentNum + this.operator + this.newNum));
        // this.screen.value = eval(this.currentNum + this.operator + this.newNum);
        this.resetAllTokens();
        this.screenToken = true;
    }

    resetAllTokens() {
        this.currentNum = '';
        this.newNum = '';
        this.operator = '';
        this.result = '';
    }
    
    getScreenValue() {
        return document.getElementById('screen').value;
    }

    updateScreen(number) {
        this.updateScreenValue();

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