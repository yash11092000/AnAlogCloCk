setInterval(()=>{
    // console.log("Yash");
     date = new Date();
     htime = date.getHours();
     mtime = date.getMinutes();
    stime = date.getSeconds(); 
     hrotation = 30*htime + mtime/2;
     mrotation = 6*mtime;
    secrotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${secrotation}deg)`;
},1000);