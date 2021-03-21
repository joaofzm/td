//#region HP BAR
hp = 100
document.getElementById("hpBarId").innerHTML="HP: " + hp;

money = 500
document.getElementById("moneyBarId").innerHTML="HP: " + money;
//#endregion

//#region monsters
function Monster(name, ms, hp){
    this.name = name;
    this.ms = ms;
    this.hp = hp;
}

var monter1 = document.getElementById("myDIV");

let Skeleton = new Monster("Skeleton", 1, 100);


//#endregion


//#region Movement
function moveSkeleton0Right(){
    let left = parseInt(window.getComputedStyle(skeleton0).getPropertyValue("left"));
    left += 1;
    skeleton0.style.left = left + "px";
}

function moveSkeleton0Up(){
    let top = parseInt(window.getComputedStyle(skeleton0).getPropertyValue("top"));
    top -= 1;
    skeleton0.style.top = top + "px";
    }

function moveSkeleton0Down(){
    let top = parseInt(window.getComputedStyle(skeleton0).getPropertyValue("top"));
    top += 1;
    skeleton0.style.top = top + "px";
    }
        
function moveRight(i) {
    if (i < 0) return;

    setTimeout(function () {
        moveSkeleton0Right();
        moveRight(--i);

    }, 16);
}

function moveUp(i) {
    if (i < 0) return;

    setTimeout(function () {
        moveSkeleton0Up();
        moveUp(--i);

    }, 16);
}

function moveDown(i) {
    if (i < 0) return;

    setTimeout(function () {
        moveSkeleton0Down();
        moveDown(--i);

    }, 16);
}

function fullMotion() {
    setTimeout(()=>moveRight(365),0);
    setTimeout(()=>moveUp(300), 6200);
    setTimeout(()=>moveRight(570), 11200)
    setTimeout(()=>moveDown(300), 20750);
    setTimeout(()=>moveRight(365),25800);
      }
//#endregion


