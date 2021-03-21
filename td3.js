//#region HP BAR
hp = 100
document.getElementById("hpBarId").innerHTML="HP: " + hp;

money = 500
document.getElementById("moneyBarId").innerHTML="HP: " + money;
//#endregion




let skeleton = [];
let skeletonNumber = 0;

function spawnSkeleton() {
    skeleton[skeletonNumber] = document.createElement('div');
    document.getElementById('track').appendChild(skeleton[skeletonNumber])
    skeleton[skeletonNumber].setAttribute("id", "skeleton"+skeletonNumber);
    skeletonNumber++;
}

function spawn() {
    //no increase inside for, since function already increse skeletonNumber value
    for (skeletonNumber = 0; skeletonNumber < 10;) {
    spawnSkeleton();
    }
}

//#region 0 to 9 movement skeletons
//0
function move0RightPart1(){
    let left = parseInt(window.getComputedStyle(skeleton0).getPropertyValue("left"));
    left += 1;
    skeleton0.style.left = left + "px";
}
            function move0RightPart2(i) {
                if (i < 0) return;
                setTimeout(function () {
                    move0RightPart1();
                    move0RightPart2(--i);
                }, 16);
            }

function move0UpPart1(){
    let top = parseInt(window.getComputedStyle(skeleton0).getPropertyValue("top"));
    top -= 1;
    skeleton0.style.top = top + "px";
}
            function move0UpPart2(i) {
                if (i < 0) return;
                setTimeout(function () {
                    move0UpPart1();
                    move0UpPart2(--i);
                }, 16);
            }

function move0DownPart1(){
    let top = parseInt(window.getComputedStyle(skeleton0).getPropertyValue("top"));
    top += 1;
    skeleton0.style.top = top + "px";
}
                function move0DownPart2(i) {
                    if (i < 0) return;
                    setTimeout(function () {
                        move0DownPart1();
                        move0DownPart2(--i);
                    }, 16);
                }

function move0fullTrack() {
    setTimeout(()=>move0RightPart2(365),0);
    setTimeout(()=>move0UpPart2(300), 6200);
    setTimeout(()=>move0RightPart2(570), 11200)
    setTimeout(()=>move0DownPart2(300), 20750);
    setTimeout(()=>move0RightPart2(365),25800);
      }              




//1
function move1RightPart1(){
    let left = parseInt(window.getComputedStyle(skeleton1).getPropertyValue("left"));
    left += 1;
    skeleton1.style.left = left + "px";
}
            function move1RightPart2(i) {
                if (i < 0) return;
                setTimeout(function () {
                    move1RightPart1();
                    move1RightPart2(--i);
                }, 16);
            }

function move1UpPart1(){
    let top = parseInt(window.getComputedStyle(skeleton1).getPropertyValue("top"));
    top -= 1;
    skeleton1.style.top = top + "px";
}
            function move1UpPart2(i) {
                if (i < 0) return;
                setTimeout(function () {
                    move1UpPart1();
                    move1UpPart2(--i);
                }, 16);
            }

function move1DownPart1(){
    let top = parseInt(window.getComputedStyle(skeleton1).getPropertyValue("top"));
    top += 1;
    skeleton1.style.top = top + "px";
}
                function move1DownPart2(i) {
                    if (i < 0) return;
                    setTimeout(function () {
                        move1DownPart1();
                        move1DownPart2(--i);
                    }, 16);
                }

function move1fullTrack() {
    setTimeout(()=>move1RightPart2(365),0);
    setTimeout(()=>move1UpPart2(300), 6200);
    setTimeout(()=>move1RightPart2(570), 11200)
    setTimeout(()=>move1DownPart2(300), 20750);
    setTimeout(()=>move1RightPart2(365),25800);
      }              


//2
function move2RightPart1(){
    let left = parseInt(window.getComputedStyle(skeleton2).getPropertyValue("left"));
    left += 1;
    skeleton2.style.left = left + "px";
}
            function move2RightPart2(i) {
                if (i < 0) return;
                setTimeout(function () {
                    move2RightPart1();
                    move2RightPart2(--i);
                }, 16);
            }

function move2UpPart1(){
    let top = parseInt(window.getComputedStyle(skeleton2).getPropertyValue("top"));
    top -= 1;
    skeleton2.style.top = top + "px";
}
            function move2UpPart2(i) {
                if (i < 0) return;
                setTimeout(function () {
                    move2UpPart1();
                    move2UpPart2(--i);
                }, 16);
            }

function move2DownPart1(){
    let top = parseInt(window.getComputedStyle(skeleton2).getPropertyValue("top"));
    top += 1;
    skeleton2.style.top = top + "px";
}
                function move2DownPart2(i) {
                    if (i < 0) return;
                    setTimeout(function () {
                        move2DownPart1();
                        move2DownPart2(--i);
                    }, 16);
                }

function move2fullTrack() {
    setTimeout(()=>move2RightPart2(365),0);
    setTimeout(()=>move2UpPart2(300), 6200);
    setTimeout(()=>move2RightPart2(570), 11200)
    setTimeout(()=>move2DownPart2(300), 20750);
    setTimeout(()=>move2RightPart2(365),25800);
      }              


//3
function move3RightPart1(){
    let left = parseInt(window.getComputedStyle(skeleton3).getPropertyValue("left"));
    left += 1;
    skeleton3.style.left = left + "px";
}
            function move3RightPart2(i) {
                if (i < 0) return;
                setTimeout(function () {
                    move3RightPart1();
                    move3RightPart2(--i);
                }, 16);
            }

function move3UpPart1(){
    let top = parseInt(window.getComputedStyle(skeleton3).getPropertyValue("top"));
    top -= 1;
    skeleton3.style.top = top + "px";
}
            function move3UpPart2(i) {
                if (i < 0) return;
                setTimeout(function () {
                    move3UpPart1();
                    move3UpPart2(--i);
                }, 16);
            }

function move3DownPart1(){
    let top = parseInt(window.getComputedStyle(skeleton3).getPropertyValue("top"));
    top += 1;
    skeleton3.style.top = top + "px";
}
                function move3DownPart2(i) {
                    if (i < 0) return;
                    setTimeout(function () {
                        move3DownPart1();
                        move3DownPart2(--i);
                    }, 16);
                }

function move3fullTrack() {
    setTimeout(()=>move3RightPart2(365),0);
    setTimeout(()=>move3UpPart2(300), 6200);
    setTimeout(()=>move3RightPart2(570), 11200)
    setTimeout(()=>move3DownPart2(300), 20750);
    setTimeout(()=>move3RightPart2(365),25800);
      }              

      
//4
function move4RightPart1(){
    let left = parseInt(window.getComputedStyle(skeleton4).getPropertyValue("left"));
    left += 1;
    skeleton4.style.left = left + "px";
}
            function move4RightPart2(i) {
                if (i < 0) return;
                setTimeout(function () {
                    move4RightPart1();
                    move4RightPart2(--i);
                }, 16);
            }

function move4UpPart1(){
    let top = parseInt(window.getComputedStyle(skeleton4).getPropertyValue("top"));
    top -= 1;
    skeleton4.style.top = top + "px";
}
            function move4UpPart2(i) {
                if (i < 0) return;
                setTimeout(function () {
                    move4UpPart1();
                    move4UpPart2(--i);
                }, 16);
            }

function move4DownPart1(){
    let top = parseInt(window.getComputedStyle(skeleton4).getPropertyValue("top"));
    top += 1;
    skeleton4.style.top = top + "px";
}
                function move4DownPart2(i) {
                    if (i < 0) return;
                    setTimeout(function () {
                        move4DownPart1();
                        move4DownPart2(--i);
                    }, 16);
                }

function move4fullTrack() {
    setTimeout(()=>move4RightPart2(365),0);
    setTimeout(()=>move4UpPart2(300), 6200);
    setTimeout(()=>move4RightPart2(570), 11200)
    setTimeout(()=>move4DownPart2(300), 20750);
    setTimeout(()=>move4RightPart2(365),25800);
      }              



//5
function move5RightPart1(){
    let left = parseInt(window.getComputedStyle(skeleton5).getPropertyValue("left"));
    left += 1;
    skeleton5.style.left = left + "px";
}
            function move5RightPart2(i) {
                if (i < 0) return;
                setTimeout(function () {
                    move5RightPart1();
                    move5RightPart2(--i);
                }, 16);
            }

function move5UpPart1(){
    let top = parseInt(window.getComputedStyle(skeleton5).getPropertyValue("top"));
    top -= 1;
    skeleton5.style.top = top + "px";
}
            function move5UpPart2(i) {
                if (i < 0) return;
                setTimeout(function () {
                    move5UpPart1();
                    move5UpPart2(--i);
                }, 16);
            }

function move5DownPart1(){
    let top = parseInt(window.getComputedStyle(skeleton5).getPropertyValue("top"));
    top += 1;
    skeleton5.style.top = top + "px";
}
                function move5DownPart2(i) {
                    if (i < 0) return;
                    setTimeout(function () {
                        move5DownPart1();
                        move5DownPart2(--i);
                    }, 16);
                }

function move5fullTrack() {
    setTimeout(()=>move5RightPart2(365),0);
    setTimeout(()=>move5UpPart2(300), 6200);
    setTimeout(()=>move5RightPart2(570), 11200)
    setTimeout(()=>move5DownPart2(300), 20750);
    setTimeout(()=>move5RightPart2(365),25800);
      }              


//6
function move6RightPart1(){
    let left = parseInt(window.getComputedStyle(skeleton6).getPropertyValue("left"));
    left += 1;
    skeleton6.style.left = left + "px";
}
            function move6RightPart2(i) {
                if (i < 0) return;
                setTimeout(function () {
                    move6RightPart1();
                    move6RightPart2(--i);
                }, 16);
            }

function move6UpPart1(){
    let top = parseInt(window.getComputedStyle(skeleton6).getPropertyValue("top"));
    top -= 1;
    skeleton6.style.top = top + "px";
}
            function move6UpPart2(i) {
                if (i < 0) return;
                setTimeout(function () {
                    move6UpPart1();
                    move6UpPart2(--i);
                }, 16);
            }

function move6DownPart1(){
    let top = parseInt(window.getComputedStyle(skeleton6).getPropertyValue("top"));
    top += 1;
    skeleton6.style.top = top + "px";
}
                function move6DownPart2(i) {
                    if (i < 0) return;
                    setTimeout(function () {
                        move6DownPart1();
                        move6DownPart2(--i);
                    }, 16);
                }

function move6fullTrack() {
    setTimeout(()=>move6RightPart2(365),0);
    setTimeout(()=>move6UpPart2(300), 6200);
    setTimeout(()=>move6RightPart2(570), 11200)
    setTimeout(()=>move6DownPart2(300), 20750);
    setTimeout(()=>move6RightPart2(365),25800);
      }              


//7
function move7RightPart1(){
    let left = parseInt(window.getComputedStyle(skeleton7).getPropertyValue("left"));
    left += 1;
    skeleton7.style.left = left + "px";
}
            function move7RightPart2(i) {
                if (i < 0) return;
                setTimeout(function () {
                    move7RightPart1();
                    move7RightPart2(--i);
                }, 16);
            }

function move7UpPart1(){
    let top = parseInt(window.getComputedStyle(skeleton7).getPropertyValue("top"));
    top -= 1;
    skeleton7.style.top = top + "px";
}
            function move7UpPart2(i) {
                if (i < 0) return;
                setTimeout(function () {
                    move7UpPart1();
                    move7UpPart2(--i);
                }, 16);
            }

function move7DownPart1(){
    let top = parseInt(window.getComputedStyle(skeleton7).getPropertyValue("top"));
    top += 1;
    skeleton7.style.top = top + "px";
}
                function move7DownPart2(i) {
                    if (i < 0) return;
                    setTimeout(function () {
                        move7DownPart1();
                        move7DownPart2(--i);
                    }, 16);
                }

function move7fullTrack() {
    setTimeout(()=>move7RightPart2(365),0);
    setTimeout(()=>move7UpPart2(300), 6200);
    setTimeout(()=>move7RightPart2(570), 11200)
    setTimeout(()=>move7DownPart2(300), 20750);
    setTimeout(()=>move7RightPart2(365),25800);
      }              


//8
function move8RightPart1(){
    let left = parseInt(window.getComputedStyle(skeleton8).getPropertyValue("left"));
    left += 1;
    skeleton8.style.left = left + "px";
}
            function move8RightPart2(i) {
                if (i < 0) return;
                setTimeout(function () {
                    move8RightPart1();
                    move8RightPart2(--i);
                }, 16);
            }

function move8UpPart1(){
    let top = parseInt(window.getComputedStyle(skeleton8).getPropertyValue("top"));
    top -= 1;
    skeleton8.style.top = top + "px";
}
            function move8UpPart2(i) {
                if (i < 0) return;
                setTimeout(function () {
                    move8UpPart1();
                    move8UpPart2(--i);
                }, 16);
            }

function move8DownPart1(){
    let top = parseInt(window.getComputedStyle(skeleton8).getPropertyValue("top"));
    top += 1;
    skeleton8.style.top = top + "px";
}
                function move8DownPart2(i) {
                    if (i < 0) return;
                    setTimeout(function () {
                        move8DownPart1();
                        move8DownPart2(--i);
                    }, 16);
                }

function move8fullTrack() {
    setTimeout(()=>move8RightPart2(365),0);
    setTimeout(()=>move8UpPart2(300), 6200);
    setTimeout(()=>move8RightPart2(570), 11200)
    setTimeout(()=>move8DownPart2(300), 20750);
    setTimeout(()=>move8RightPart2(365),25800);
      }              

//9
function move9RightPart1(){
    let left = parseInt(window.getComputedStyle(skeleton9).getPropertyValue("left"));
    left += 1;
    skeleton9.style.left = left + "px";
}
            function move9RightPart2(i) {
                if (i < 0) return;
                setTimeout(function () {
                    move9RightPart1();
                    move9RightPart2(--i);
                }, 16);
            }

function move9UpPart1(){
    let top = parseInt(window.getComputedStyle(skeleton9).getPropertyValue("top"));
    top -= 1;
    skeleton9.style.top = top + "px";
}
            function move9UpPart2(i) {
                if (i < 0) return;
                setTimeout(function () {
                    move9UpPart1();
                    move9UpPart2(--i);
                }, 16);
            }

function move9DownPart1(){
    let top = parseInt(window.getComputedStyle(skeleton9).getPropertyValue("top"));
    top += 1;
    skeleton9.style.top = top + "px";
}
                function move9DownPart2(i) {
                    if (i < 0) return;
                    setTimeout(function () {
                        move9DownPart1();
                        move9DownPart2(--i);
                    }, 16);
                }

function move9fullTrack() {
    setTimeout(()=>move9RightPart2(365),0);
    setTimeout(()=>move9UpPart2(300), 6200);
    setTimeout(()=>move9RightPart2(570), 11200)
    setTimeout(()=>move9DownPart2(300), 20750);
    setTimeout(()=>move9RightPart2(365),25800);
    }       
      

//#endregion

//#region rounds
function resetPosition(){
    skeleton0.style.left = "0px";skeleton0.style.top = "600px";skeleton0.style.opacity = 1;
    skeleton1.style.left = "0px";skeleton1.style.top = "600px";skeleton1.style.opacity = 1;
    skeleton2.style.left = "0px";skeleton2.style.top = "600px";skeleton2.style.opacity = 1;
    skeleton3.style.left = "0px";skeleton3.style.top = "600px";skeleton3.style.opacity = 1;
    skeleton4.style.left = "0px";skeleton4.style.top = "600px";skeleton4.style.opacity = 1;
    skeleton5.style.left = "0px";skeleton5.style.top = "600px";skeleton5.style.opacity = 1;
    skeleton6.style.left = "0px";skeleton6.style.top = "600px";skeleton6.style.opacity = 1;
    skeleton7.style.left = "0px";skeleton7.style.top = "600px";skeleton7.style.opacity = 1;
    skeleton8.style.left = "0px";skeleton8.style.top = "600px";skeleton8.style.opacity = 1;
    skeleton9.style.left = "0px";skeleton9.style.top = "600px";skeleton9.style.opacity = 1;
    portal.style.opacity = 1;
}

function invisibility(){
    skeleton0.style.opacity = 0.4;
    skeleton1.style.opacity = 0.4;
    skeleton2.style.opacity = 0.4;
    skeleton3.style.opacity = 0.4;
    skeleton4.style.opacity = 0.4;
    skeleton5.style.opacity = 0.4;
    skeleton6.style.opacity = 0.4;
    skeleton7.style.opacity = 0.4;
    skeleton8.style.opacity = 0.4;
    skeleton9.style.opacity = 0.4;
    portal.style.opacity = 0.4;
}


function round1(){
    resetPosition();

    setTimeout(()=>move0fullTrack(),0);  

    setTimeout(()=>invisibility(), 60000);
}


function round5(){
  
    resetPosition();
       
    setTimeout(()=>move0fullTrack(),0);
    setTimeout(()=>move1fullTrack(), 2000);
    setTimeout(()=>move2fullTrack(), 4000)
    setTimeout(()=>move3fullTrack(), 6000);
    setTimeout(()=>move4fullTrack(), 8000);
    setTimeout(()=>move5fullTrack(), 10000);
    setTimeout(()=>move6fullTrack(), 12000);
    setTimeout(()=>move7fullTrack(), 14000)
    setTimeout(()=>move8fullTrack(), 16000);
    setTimeout(()=>move9fullTrack(), 18000);

    setTimeout(()=>invisibility(), 60000);

    
}


//#endregion

function rotateMage2Up() {
    var img = document.getElementById("mage2");
    img.setAttribute("class", "facingUp");
  }

  function rotateMage2Down() {
    var img = document.getElementById("mage2");
    img.setAttribute("class", "facingDown");
  }

  function rotateMage2Right() {
    var img = document.getElementById("mage2");
    img.setAttribute("class", "facingRight");
  }

  function rotateMage2Left() {
    var img = document.getElementById("mage2");
    img.setAttribute("class", "facingLeft");
  }


    onload=spawn();
