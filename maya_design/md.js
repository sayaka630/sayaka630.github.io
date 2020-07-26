const image01src = 'url("../img/maya_img1.png")';
const image02src = 'url("../img/maya_img2.png")';



function nextImage(){
    const header = document.getElementById('head');
    const nowBg = header.style.backgroundImage;
    console.log(nowBg);

    if(nowBg == image01src){
        //現在1枚目
        header.style.backgroundImage = image02src;
    }else{
        //現在2枚目
        header.style.backgroundImage = image01src;
    }
}


//ページが表示されたタイミングで実行したい処理をかく
document.getElementById('head').style.backgroundImage = image01src;


//タイマーセット
setInterval(nextImage, 5000);