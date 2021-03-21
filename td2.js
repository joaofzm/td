//#region HP BAR
hp = 100
document.getElementById("hpBarId").innerHTML="HP: " + hp;

money = 500
document.getElementById("moneyBarId").innerHTML="HP: " + money;
//#endregion


//#region monsters and movement

let movingRightNow = [];
let movingRightNowPosition = 0;

let skeleton = [];
let skeletonNumber = 0;

function spawnSkeleton() {
    movingRightNowPosition = skeletonNumber;
    movingRightNow.push(movingRightNowPosition);
    skeleton[skeletonNumber] = document.createElement('div');
    document.getElementById('track').appendChild(skeleton[skeletonNumber])
    skeleton[skeletonNumber].setAttribute("id", "skeleton"+skeletonNumber);
    moveRight(1000);
    skeletonNumber++;
}

function moveRight(i) {
    if (i < 0) return;
    setTimeout(function () {
        moveSkeletonRight();
        moveRight(--i);
    }, 16);
}

function moveSkeletonRight(){
    let left = parseInt(window.getComputedStyle(eval("skeleton"+movingRightNow[movingRightNowPosition])).getPropertyValue("left"));
    left += 1;
    (eval("skeleton"+movingRightNow[movingRightNowPosition])).style.left = left + "px";
}










function move2part1(){
    let left = parseInt(window.getComputedStyle(skeleton2).getPropertyValue("left"));
    left += 1;
    skeleton2.style.left = left + "px";
}

function move2part2(i) {
    if (i < 0) return;
    setTimeout(function () {
        move2part1();
        move2part2(--i);
    }, 16);
}

//#endregion

