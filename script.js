let countdown = document.getElementById("timer");
let x = window.setInterval(function(){
     let now = new Date();
     let deadline = new Date('2023/1/1 00:00');
     let time = deadline - now;

     // ミリ秒から秒に
     const sec = Math.floor(time / 1000);

     //分、時、日の秒数
     const min = 60; // 60sec
     const hour = min * 60; // 60secs * 60
     const day = hour * 24;  // 60sec * 60 * 24h

     //あと何日　
     let days = Math.floor(sec / day);
     //あと何時間　
     let hours = Math.floor(sec / hour % 24);
     //あと何分
     let mins = Math.floor(sec / min % 60);
     //あと何秒
     let secs = Math.floor(sec % 60);
     
     //console.log(days + "日" + hours + "時間" + mins + "分" + secs + "秒");
     countdown.innerHTML = days + "日" + hours + "時間" + mins + "分" + secs + "秒";

     if (time < 0) {
         clearInterval(x);
         countdown.innerHTML = 'Happy new year!';
     }

},1000);

