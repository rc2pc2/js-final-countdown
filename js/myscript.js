const clock = setInterval(countDown, 1000);

function countDown(){
   const nextLessonDate = new Date("May 26, 2023 10:35:00");
   const nowDate = Date.now();
   const timeDifference = nextLessonDate.getTime() - nowDate;

   const seconds = 1000;
   const minute = seconds * 60;
   const hour = minute * 60;
   const day = hour * 24;

   const missingSeconds = Math.floor((timeDifference % minute) / 1000);
   updateDigits('div#seconds-counter p.counter-digits', missingSeconds);

   const missingMinutes = Math.floor( (timeDifference % hour) / minute );
   updateDigits('div#minutes-counter p.counter-digits', missingMinutes);

   const missingHours = Math.floor( ( timeDifference % (hour * 60)) / hour );
   updateDigits('div#hours-counter p.counter-digits', missingHours);

   const missingDays = Math.floor( ( timeDifference % (day * 24) ) / day);
   updateDigits('div#days-counter p.counter-digits', missingDays);


   if ( timeDifference <= 0){
      clearInterval(clock);
   }
}

function updateDigits(querySelectorString, htmlContent){
   const element = document.querySelector(querySelectorString);
   element.innerHTML = htmlContent;
}
