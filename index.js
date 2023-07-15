
setInterval(showTime,1000);

function showTime()
{
        

        
        let time1 = new Date();
        let currentHour=time1.getHours();
        let currentMinute=time1.getMinutes();
        let currentSeconds=time1.getSeconds();
        let currentDayNumber=time1.getDay();
        let currentDay="SUN";
        let amPm="am";
        if(currentHour>=13)
        {
            currentHour%=12;
        }
        if(currentHour<=9)
        {
            currentHour="0"+currentHour;
        }

        if(currentMinute<=9)
        {
            currentMinute="0"+currentMinute;
        }

        if(currentSeconds<=9)
        {
            currentSeconds="0"+currentSeconds;
        }

        if(currentHour>=0 && currentHour<=11)

        {
            amPm="AM";
        }else
        {
            amPm="PM";
        }

        switch(currentDayNumber)
        {
            case 0:
                currentDay="SUN";
                break;
            case 1:
                currentDay="MON";
                break;
            case 2:
                currentDay="TUE";
                break;
            case 3:
                currentDay="WED";
                break;
            case 4:
                currentDay="THU";
                break;
            case 5:
                currentDay="FRI";
                break;
            default:
                currentDay="SAT";
                break;


        }

        
        
        document.getElementById("hours").innerHTML=currentHour;
        document.getElementById("minutes").innerHTML=currentMinute;
        document.getElementById("seconds").innerHTML=currentSeconds;
        //document.getElementById("DAY").innerHTML=currentDay;

        //document.getElementById("name").innerHTML=userName;!-->
        //document.getElementById("time").innerHTML=Current;
}

let redColor="rgba(255, 0, 0, 0.4) 5px 5px, rgba(255, 0, 0, 0.3) 10px 10px, rgba(255, 0, 0, 0.2) 15px 15px, rgba(255, 0, 0, 0.1) 20px 20px, rgba(255, 0, 0, 0.05) 25px 25px";
let yelloColor="rgba(255, 255, 0, 0.4) 5px 5px, rgba(255, 255, 0, 0.3) 10px 10px, rgba(255, 255, 0, 0.2) 15px 15px, rgba(255, 255, 0, 0.1) 20px 20px, rgba(255, 255, 0, 0.05) 25px 25px";
let whiteColor="rgba(240, 248, 255, 0.4) 5px 5px, rgba(240, 248, 255, 0.3) 10px 10px, rgba(240, 248, 255, 0.2) 15px 15px, rgba(240, 248, 255, 0.1) 20px 20px, rgba(240, 248, 255, 0.05) 25px 25px";
let pinkColor="rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px";
let greenColor="rgba(173, 255, 47, 0.4) 5px 5px, rgba(173, 255, 47, 0.3) 10px 10px, rgba(173, 255, 47, 0.2) 15px 15px, rgba(173, 255, 47, 0.1) 20px 20px, rgba(173, 255, 47, 0.05) 25px 25px";

let button1=document.getElementById("color-RED");

button1.addEventListener("click",function()
{
    document.querySelector(".clock").style.boxShadow= redColor;
    document.querySelector("#color-RED").style.border= "5px solid orange";
    document.querySelector("#color-RED").style.border= "5px solid orange";

    document.querySelector("#color-YELLOW").style.border= "none";
    document.querySelector("#color-WHITE").style.border= "none";
    document.querySelector("#color-PINK").style.border= "none";
    document.querySelector("#color-GREEN").style.border= "none";
    
})

let button2=document.getElementById("color-YELLOW");

button2.addEventListener("click",function()
{
    document.querySelector(".clock").style.boxShadow= yelloColor;
    document.querySelector("#color-YELLOW").style.border= "5px solid orange";

    document.querySelector("#color-WHITE").style.border= "none";
    document.querySelector("#color-PINK").style.border= "none";
    document.querySelector("#color-GREEN").style.border= "none";
    document.querySelector("#color-RED").style.border= "none";
})
let button3=document.getElementById("color-WHITE");

button3.addEventListener("click",function()
{
    document.querySelector(".clock").style.boxShadow= whiteColor;
    document.querySelector("#color-YELLOW").style.border= "none";
    document.querySelector("#color-RED").style.border= "none";
    document.querySelector("#color-WHITE").style.border= "5px solid orange";
    document.querySelector("#color-PINK").style.border= "none";
    document.querySelector("#color-GREEN").style.border= "none";
})

let button4=document.getElementById("color-GREEN");

button4.addEventListener("click",function()
{
    document.querySelector(".clock").style.boxShadow = greenColor;
    document.querySelector("#color-YELLOW").style.border= "none";
    document.querySelector("#color-RED").style.border= "none";
    document.querySelector("#color-WHITE").style.border= "none";
    document.querySelector("#color-PINK").style.border= "none";
    document.querySelector("#color-GREEN").style.border= "5px solid orange";
})

let button5=document.getElementById("color-PINK");

button5.addEventListener("click",function()
{
    document.querySelector(".clock").style.boxShadow = pinkColor;
    document.querySelector("#color-YELLOW").style.border= "none";
    document.querySelector("#color-RED").style.border= "none";
    document.querySelector("#color-WHITE").style.border= "none";
    document.querySelector("#color-PINK").style.border= "5px solid orange";
    document.querySelector("#color-GREEN").style.border= "none";
})
