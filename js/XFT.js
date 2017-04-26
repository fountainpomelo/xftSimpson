/**
 * Created by XFT on 2017/3/16.
 */
var allSimpson = document.getElementById("allSimpson");
//    var left = document.getElementById("left");
//    var right = document.getElementById("right");
//    var arr = document.getElementById("arr");
var allSimpsonpic = allSimpson.children[0];
var simul = allSimpsonpic.children[0];
var simulLis = simul.children;
var simol = allSimpsonpic.children[1];
var imgWidth = allSimpsonpic.offsetWidth;
var settime = null;
//每个ul中的li对应一个ol中的一个li
for (var i = 0; i < simulLis.length; i++) {
    var li = document.createElement("li");
    simol.appendChild(li);//将创建出来的li追加到ol中
    li.innerHTML = i + 1;//对应的数字，不能写li[i];
}
//动态生成第一张图片追加到ul后面
var firstImg = simulLis[0].cloneNode(true);
simul.appendChild(firstImg);


settime = setInterval(play, 20);
console.log(settime);
function play() {
    //leader = leader + step
    var leader = simul.offsetLeft;
    var step = -2;
    if (leader > -imgWidth * 3) {
        leader = leader + step;
        simul.style.left = leader + "px";
    } else {
        simul.style.left = 0 + "px";
    }
}

//点击按钮
var simolLis = simol.children;
simolLis[0].className = 'simcurrent';
for (var i = 0; i < simolLis.length; i++) {
    simolLis[i].index = i;
    simolLis[i].onclick = function () {
        clearInterval(settime);
        for (var i = 0; i < simolLis.length; i++) {
            simolLis[i].className = "";
        }
        this.className = "simcurrent";

        var target = -imgWidth * this.index;
        console.log(target);
        animate(simul, {left: target});
    }
}
allSimpson.onmouseover = function () {
    clearInterval(settime);
}

allSimpson.onmouseout = function () {
    settime = setInterval(play, 20);
}


//hello
var title = document.getElementById("title")
var f = 0;
var timer = null;
var timer2 = null;
var massage = "Hello world! || We're the Simpsons";
var last = 0;

console.log(title.innerHTML);
function move() {
    title.innerHTML = massage.substring(0, last);
    if (last == massage.length) {
        clearInterval(timer2);
        shan();
    } else {
        last++;
//            console.log(title.innerHTML);
    }
}
timer2 = setInterval(function () {
    move();
}, 200);

function shan() {
    timer = setInterval(function () {
        f++;
        if (f % 2 == 0) {
            title.style.display = "inline-block";
        } else {
            title.style.display = "none";
        }
        if (f >= 16) {
            clearInterval(timer);
        }
    }, 200)

}

//滚动话题
var hometopics = document.getElementById("home-topics");
var topicinner = document.getElementsByClassName("topicinner")[0];
hometopics.onmouseover = function () {
    setToptime = setInterval(toptime, 15)
}
hometopics.onmouseout = function () {
    clearInterval(setToptime)
}
function toptime() {
    var step = -1;
    var leader = topicinner.offsetLeft;
    leader = leader + step;
    if (leader > -4000) {
        topicinner.style.left = leader + "px";
    } else {
        topicinner.style.left = 0;
    }
}