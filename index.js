
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