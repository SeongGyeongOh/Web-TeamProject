function clickPremium(){   
    // alert('test1');

    var url='./menu_premium.html';

    var req=new XMLHttpRequest();

    req.open('GET', url, true);
    req.onreadystatechange=function(){
        if(req.readyState==4&&req.status==200){
            document.getElementById('contentsdiv').innerHTML=req.responseText;                            
        }
    }
    req.send();
}


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

// 반응형 메뉴
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

function loadAjax(){
    // location.href;
    // alert('onloadtest');

    let temp =location.href.split("?");
    let data =temp[1].split(":");
    let menu=data[1];
    var url='./getPremium.php?menu='+menu;
    var req=new XMLHttpRequest();

    document.getElementById('wrapitemlist').innerHTML="";

    req.onreadystatechange=function(){
        if(req.readyState==4&&req.status==200){
            var jsonArray=JSON.parse(req.responseText);

            for (let i=0; i<jsonArray.length;i++){
                var jsonStr=jsonArray[i];
                document.getElementById('wrapitemlist').innerHTML+=('<li class="itemlist"><img class="listimg" src="'+jsonStr.itemimg+'"><br>'+jsonStr.itemname+'</li>');
            }                         
        }
    }
    req.open('GET', url, true);
    req.send();
}