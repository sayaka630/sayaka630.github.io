const image01src = 'url("../img/illust_img1.jpg")';
const image02src = 'url("../img/img2.jpg")';



function nextImage(){
    const header = document.getElementById('head');
    const nowBg = header.style.backgroundImage;
    console.log(nowBg);

    if(nowBg == image01src){
        //現在1枚目
        header.style.backgroundImage = image02src;
    }else{
        //現在2枚目
        header.style.backgroundImage = image03src;
    }
}


//ページが表示されたタイミングで実行したい処理をかく
document.getElementById('head').style.backgroundImage = image01src;


//タイマーセット
setInterval(nextImage, 5000);