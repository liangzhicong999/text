// id 获取 
// document.getElementById()  $("#div")
// class 获取
// document.getElementsByClassName()  $(".div")
// 标签 获取
// document.getElementsByTagName()  $("div")
// 获取对象
function $(str){
    var code = str.substr(0,1); // # .
    var names = str.substr(1); //div
    switch(code){
        case "#":
            return document.getElementById(names);
            break;
        case ".":
            return getClass(names);
            break;
        default:
            return document.getElementsByTagName(str);
    }

}

// 类兼容写法
function getClass(classname){


    // 判断浏览器是否兼容类对象获取
    if(document.getElementsByClassName){
        return document.getElementsByClassName(classname);
    }

    // 兼容ie678写法
    var arr = [];//空数组
    var dom = document.getElementsByTagName("*");

    for(var i = 0; i < dom.length;i++){

        // con aa
        var sql = dom[i].className.split(" ");//字符串转数组

        for(var j = 0;j < sql.length;j++){
            if(sql[j] == classname){
                arr.push(dom[i]);
            }
        }
        
    }

    return arr;

}


// 解决滚动条兼容性 window
function scroll(){

    if(window.pageYOffset != null){
        return {
            top:window.pageYOffset,
            left:window.pageXOffset
        }
    }
    if(document.compatMode == "CSS1compat"){
        return {
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
        }
    }

    return {
        top:document.body.scrollTop,
        left:document.body.scrollLeft
    }

}

// client家族兼容  
function client(){
            
    // ie9+最新浏览器
    if(window.innerHeight != null){
        return {
            width:window.innerWidth,
            height:window.innerHeight
        }
    }

    // 标准浏览器兼容
    if(document.comopatMode === "CSS1Compat"){
        return {
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        }
    }

    // 怪异浏览器
    return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
    }

}
