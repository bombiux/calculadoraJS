"use strict";

class app {
    constructor() {
        this.screen = document.getElementById('screen');
        this.screenValue = 0;

        this.currentNum;
        this.newNum;
        this.operator;
        this.result;

        this.addEventListeners();
    }

    addEventListeners() {
        document.addEventListener("click", (e) => {
            if (e.target.closest(".numbers")) {
                this.updateScreen(e.target);
            } else if (e.target.closest(".operator")) {
                this.operate(e.target);
            } else if (e.target.closest(".equals")) {
                this.showNewValue();
            }
        });
    }

    operate(operator) {
        this.updateCurrentNum();
        this.updateOperator(operator);
    }

    showNewValue() {
        this.updateNewNum();
        switch (this.operator) {
            case '-':
                this.sub();
                break;
            case 'x':
                this.mult();
                break;
            case '/':
                this.div();
                break;
            default:
                this.sum();
        }
    }

    sum() {
        this.result = parseInt(this.currentNum) + parseInt(this.newNum);
        this.screen.value = this.result;
        this.currentNum = '';
        this.newNum = '';
        this.operator = '';
        this.result = '';
    }

    mult() {
        this.result = parseInt(this.currentNum) + parseInt(this.newNum);
        this.screen.value = this.result;
        this.currentNum = '';
        this.newNum = '';
        this.operator = '';
        this.result = '';
    }

    div() {
        this.result = parseInt(this.currentNum) + parseInt(this.newNum);
        this.screen.value = this.result;
        this.currentNum = '';
        this.newNum = '';
        this.operator = '';
        this.result = '';
    }

    sum() {
        this.result = parseInt(this.currentNum) + parseInt(this.newNum);
        this.screen.value = this.result;
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