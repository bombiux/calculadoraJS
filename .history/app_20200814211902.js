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
        this.operator;

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
                this.operator(e.target);
            } else if (e.target.closest(".equals")) {
                this.showNewValue();
            } else if (e.target.closest(".special")) {
                
            }
        });
    }

    operate(operator) {
        this.updateCurrentNum();
        this.operator = operator;
        this.screenToken = true;
    }

    showNewValue() {
        // this.updateNewNum();
        // switch (this.operator) {
            // case '-':
                // this.sub();
                // break;
            // case 'x':
                // this.mult();
                // break;
            // case '/':
                // this.div();
                // break;
            // default:
                // this.sum();
        }
    }

    sum() {
        this.result = parseInt(this.currentNum) + parseInt(this.newNum);
        this.screen.value = this.result;
        this.resetAllTokens();
    }

    mult() {
        this.result = parseInt(this.currentNum) * parseInt(this.newNum);
        this.screen.value = this.result;
        this.resetAllTokens();
    }

    div() {
        this.result = parseInt(this.currentNum) / parseInt(this.newNum);
        this.screen.value = this.result;
        this.resetAllTokens();
    }

    sub() {
        this.result = parseInt(this.currentNum) - parseInt(this.newNum);
        this.screen.value = this.result;
        this.resetAllTokens();
    }

    resetAllTokens() {
        this.currentNum = '';
        this.newNum = '';
        this.operator = '';
        this.result = '';
    }
    
    updateCurrentNum() {
        this.currentNum = this.getScreenValue();
    }

    updateNewNum() {
        this.newNum = this.getScreenValue();
    }

    updateOperator(operator) {
        this.operator = operator.innerHTML;
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