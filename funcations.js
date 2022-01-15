
// const h1 = document.querySelector('h1');

// h1.setAttribute('style', 'color:red');

// console.log(h1);


setInterval(()=>{


    const times = document.querySelector('#time');
    let date = new Date();
    let hours = date.getHours();
    let mints = date.getMinutes();
    let sec = date.getSeconds();
    let day = date.getDate();
    let month = date.getMonth();
    let years = date.getFullYear();
  

    

    let ampm = 'AM'



    if(hours > 12){

    hours = hours -12;
    ampm = 'PM'

    }

    if(hours < 10){

        hours =  '0' + hours;
    }

    if(mints < 10){

        mints =  '0' + mints;
    }


    if(sec < 10){

        sec =  '0' + sec;
    }


   
if(day < 10 ){

    day = '0' + day;
    
}
   
if(month < 10 ){

    month++
    month = '0' + month
    
}



    times.innerHTML = `
    
    <div>${hours}:${mints}</div>
    <div>${sec}</div><div class="nunu"> ${ampm} </div>
    <div class="datt">${day}:${month}:${years} </div>
    
    `




})

let patten = /time/;
console.log(patten.test());



