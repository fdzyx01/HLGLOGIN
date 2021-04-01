window.onload=function(){
    //PHOTO
    var oldindex=index=0;
    var allA=document.getElementsByClassName("oto");
    var imgList=document.getElementById("imgList");
    imgList.style.left=-1220+"px";
    allA[index].style.backgroundColor="blue";
    for (var i=0;i<allA.length;i++){
        allA[i].num=i;
        allA[i].onclick=function(){
            clearInterval(timeroto);
            index=this.num;
            move(imgList,"left",(index+1)*(-1220),20,function(){
                autoChange1();
            });
            //imgList.style.left=index*(-1220)+"px";
            allA[oldindex].style.backgroundColor="cyan";
            allA[index].style.backgroundColor="blue";
            oldindex=index;
        };
    };

    autoChange1();

    var timeroto;
    function autoChange1(){
        timeroto=setInterval(function(){
            index=index+1;
            if (index==allA.length) {
                move(imgList,"left",(index+1)*(-1220),20,function(){
                    imgList.style.left=-1220+"px";
                });
                index=0;
            } else
            move(imgList,"left",(index+1)*(-1220),20);
            allA[oldindex].style.backgroundColor="cyan";
            allA[index].style.backgroundColor="blue";
            oldindex=index;
        },5000);
    };

    var imgLeft=document.getElementById("imgLeft");
    var imgRight=document.getElementById("imgRight");
    imgRight.onclick=function(){
            clearInterval(timeroto);
            index++;
            if (index==allA.length) {
                move(imgList,"left",(index+1)*(-1220),20,function(){
                    imgList.style.left=-1220;
                    autoChange1();
                });
                index=0;
            } else
            move(imgList,"left",(index+1)*(-1220),20,function(){
                    autoChange1();
                });
            allA[oldindex].style.backgroundColor="cyan";
            allA[index].style.backgroundColor="blue";
            oldindex=index;
        };
    imgLeft.onclick=function(){
            clearInterval(timeroto);
            index--;
            if (index==-1) {
                move(imgList,"left",(index+1)*(-1220),20,function(){
                    imgList.style.left=(-1220)*(allA.length);
                    autoChange1();
                });
                index=allA.length-1;
            } else
            move(imgList,"left",(index+1)*(-1220),20,function(){
                    autoChange1();
                });
            allA[oldindex].style.backgroundColor="cyan";
            allA[index].style.backgroundColor="blue";
            oldindex=index;
        };

    //lgyw
    var lgywP=["<p>七十载卓育英才  新征程筑梦百年——哈尔滨理工大学建校70周年纪念大会隆重举行</p>","<p>学校领导走访哈电集团深入推进校企合作</p>","<p>学校举行2020级新生开学典礼</p>","<p>学校举行四方共建哈尔滨理工大学（威海）协议签约仪式</p>",];
    var oldlgywindex=lgywindex=0;
    var lgywList=document.getElementById("lgywList");
    var lgywAll=document.getElementsByClassName("lgyw");
    var lgywA=document.getElementById("lgywA");
    lgywAll[0].style.backgroundColor="rgba(22, 18, 243, 0.89)";
    for (var i=0;i<lgywAll.length;i++){
        lgywAll[i].num=i;
        lgywAll[i].onclick=function(){
            clearInterval(timeroto2);
            lgywindex=this.num;
            move(lgywList,"left",lgywindex*(-420),20,function(){
                 autoChange2();
            });
            lgywA.innerHTML=lgywP[lgywindex];
            lgywAll[oldlgywindex].style.backgroundColor="cyan";
            lgywAll[lgywindex].style.backgroundColor="rgba(22, 18, 243, 0.89)";
            oldlgywindex=lgywindex;
        };
    };

    autoChange2();

    var timeroto2;
    function autoChange2(){
        timeroto2=setInterval(function(){
            lgywindex++;
            if (lgywindex==lgywAll.length) {
                move(lgywList,"left",lgywindex*(-420),20,function(){
                    lgywList.style.left=0;
                });
                lgywindex=0;
            } else
            move(lgywList,"left",lgywindex*(-420),20);
            lgywA.innerHTML=lgywP[lgywindex];
            lgywAll[oldlgywindex].style.backgroundColor="cyan";
            lgywAll[lgywindex].style.backgroundColor="rgba(22, 18, 243, 0.89)";
            oldlgywindex=lgywindex;
        },5000);
    };

    var fwdhindex=0;
    var fwdhworkUL=document.getElementById("fwdhworkUL");
    //var fwdhLeft=document.getElementById("fwdhLeft");
    //var fwdhRight=document.getElementById("fwdhRight");
                
    autoChange3();

    var timeroto3;
    function autoChange3(){
        timeroto3=setInterval(function(){
        fwdhindex++;
        if (fwdhindex==11) {
            move(fwdhworkUL,"left",fwdhindex*(-110),20,function(){
                fwdhworkUL.style.left=0;
            });
            fwdhindex=0;
            } else
            move(fwdhworkUL,"left",fwdhindex*(-110),20);
        },5000);
    };
};