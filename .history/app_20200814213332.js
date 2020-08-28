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
        this.updateCurrentNum();
        this.operator = operator.innerHTML;
        this.screenToken = true;
    }

    showNewValue() {
        this.newNum = this.getScreenValue();
        
        this.screen.value = eval(parseFloat(this.currentNum) + this.operator + parseFloat(this.newNum));

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