/* Date countDown   */

/* End date */
let time = new Date("Apr 30 ,  2023 21:22:00").getTime();

/* Counter */
let countDown = setInterval(()=>{
/* Date at the moment */
let timeNow = new Date().getTime();
/* Time remaining till opening */
let timeDeffrence = time - timeNow;

/* Time unites calculation */
let days = Math.floor( timeDeffrence / (1000 * 60  * 60 * 24 ));
let hours = Math.floor (timeDeffrence % (1000 *60  * 60 * 24) / (1000 * 60 * 60) );
let minutes = Math.floor(timeDeffrence % (1000 * 60 * 60 ) / ( 1000 * 60))
let secondes = Math.floor(timeDeffrence % (1000 *60 ) / 1000 );

/* Injecting into html */
document.querySelector(`#day`).textContent = days >= 10 ? days : `0${days}` ;
document.querySelector(`#hour`).textContent = hours >= 10 ? hours : `0${hours}`;
document.querySelector(`#minute`).textContent = minutes  >= 10 ? minutes : `0${minutes}`;
document.querySelector(`#seconed`).textContent = secondes >= 10 ? secondes: `0${secondes}` ;

/* Clearing timer when remaiming time = 0  */
if(timeDeffrence <= 0 ){
    clearInterval(countDown)
        document.querySelector(`#day`).textContent = `D`;
        document.querySelector(`#hour`).textContent = `O`;
        document.querySelector(`#minute`).textContent = `N`;
        document.querySelector(`#seconed`).textContent = `E`; 
        let welcome =  document.querySelectorAll(`.card .time`);
        console.log(welcome)
        welcome[0].textContent = `The`;
        welcome[1].textContent = `Event`;
        welcome[2].textContent = `Is`;
        welcome[3].textContent = `Happining`
        for(let i = 0 ; i < welcome.length ; i++){
            welcome[i].style.cssText = `animation: flashing 0.8s ease-in-out  infinite;`;
        }
}
}, 1000);
/* CounDown End  */

/* our Status count up */
let countUp = function (num , i, end ){
    let counter = setInterval(()=>{
        let num =document.querySelectorAll(`#num`);
        num[i].textContent = `${+num[i].textContent +1}`

    if(+num[i].textContent == end){
        clearInterval(counter)
    }
} , 10)
}
let ourStatus = document.querySelector(`#name`).value;
console.log(document.querySelector(`#num`))

countUp(num ,0, 150);
countUp(num ,1, 135);
countUp(num ,2, 500);
countUp(num ,3, 50);
/* End of count down */


/* input verefication */
let val ;
let verfication = function(){
val = document.querySelector(`#email`).value;
if(!String(val).includes(`@gmail`)){
    document.querySelector(`#email`).style.cssText = `border-bottom : 2px solid red `;
}
}

/* Eng El Zero Greeting */
let el = document.querySelector(`.made-by`);

el.onmouseover = function(){
    el.style.cssText = `background-color : #2196f3 ; color : white ; font-size : 18px ; font-whight : bold ; outline: 2px solid white;     animation: puls 1s linear infinite;`
    el.textContent =  `Taught By Eng-Osama El Zero`;
}
