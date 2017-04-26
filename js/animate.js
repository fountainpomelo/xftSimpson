/**
 * Created by fountain on 2017/3/10.
 */

function animate(obj, config, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in config) {
            if (k === "opacity") {//opacity比较特殊 要单独处理
                var target = config[k] * 100;
                //opacity 不需要给默认值 也不能给默认值
                //parseInt也不能要 否则0.x直接就成0了
                //也不需要parseInt 因为opacity没有单位
                var leader = getStyle(obj, k) * 100;//
                var step = (target - leader) / 20;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;//注意opacity没有单位 这里就不加"px"了

            } else if (k === "zIndex") {
                obj.style.zIndex = config[k];//直接把对象的层级设置成目标值
            } else {
                var target = config[k];
                var leader = parseInt(getStyle(obj, k)) || 0;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader !== target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {//传入了回调函数就调用 没传入就不要调用了
                fn();
            }
        }
    }, 15);
}

/**
 *
 * @param obj
 * @param target
 */
//function animate2(obj, target) {
//    clearInterval(obj.timer);
//    obj.timer = setInterval(function () {
//        var leader = obj.offsetLeft;
//        var step = (target - leader) / 10;
//        step = step > 0 ? Math.ceil(step) : Math.floor(step);
//        leader += step;
//        obj.style.left = leader + "px";
//        if (target === leader) {
//            clearInterval(obj.timer);
//        }
//    }, 15)

//}
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj)[attr];
    } else {
        return obj.currentStyle[attr];

    }
}
/**
 *
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    }
}