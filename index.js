
// 상단 메뉴 마우스 이벤트
function showsecond(d){
    if(window.innerWidth<580){
        return;
    }else{
        d.style.display="none";
        document.getElementById('secondwrap').style.display="inline";
    }
}
function showfirst(d){
    d.style.display="none";
    document.getElementById('first').style.display='flex';
}

// 반응형 메뉴(사이드바)
function showLeftMenu(){
    var circleBtObj = document.getElementById('circleBt');
    var leftMenuObj = document.getElementById('hideMenuBodyId');
    circleBtObj.style['display'] = "none";
    leftMenuObj.style['transform'] = "translate(0px, 0px)";
    
    leftMenuObj.style['msTransform'] = "translate(0px, 0px)";
    leftMenuObj.style['mozTransform'] = "translate(0px, 0px)";
    leftMenuObj.style['webkitTransform'] = "translate(0px, 0px)";
    leftMenuObj.style['oTransform'] = "translate(0px, 0px)";
}

function closeLeftMenu() {
    var circleBtObj = document.getElementById('circleBt');
    var leftMenuObj = document.getElementById('hideMenuBodyId');

    circleBtObj.style['display'] = "block";
    leftMenuObj.removeAttribute("style");
}



// menu.html로 아이디 전달
function sendID(aa){
    var id=aa.id;
    window.open("./menu.html?id:"+id);
}
