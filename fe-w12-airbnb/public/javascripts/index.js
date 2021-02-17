/* --------------------------------------------------------------------- */
/* -------------▶︎▶︎▶︎ main 클래스: 프로그램 시작 및 클래스 통합 ◀︎◀︎◀︎----------------*/
/* --------------------------------------------------------------------- */
import TabUI from "./tabUI.js";
import PopUpLayer from "./popUpLayer.js";

class Main {
    constructor(){
        //utillity메소드 객체
        const _ = {
            $: (selector, base = document) => base.querySelector(selector)
        }
        this.TU = new TabUI();
        this.PUL = new PopUpLayer();
    }

    init(){
        console.log("hello world!");
        this.TU.sayHi();
        this.setEvent();
    }

    setEvent(){

    }
}

const MAIN = new Main();
MAIN.init();
