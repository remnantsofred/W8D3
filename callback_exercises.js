// const readline = require('readline');

class Clock {
  constructor() {
    // 1. Create a Date object.
    let date = new Date()
    this.hours = date.getHours()
    this.minutes = date.getMinutes()
    this.seconds = date.getSeconds()
    setInterval(this._tick.bind(this), 1000)
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
  }
  
  printTime() {
    // Format the time in HH:MM:SS
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    // Use console.log to print it.
  }
  
  _tick() {
    // 1. Increment the time by one second.
    if (this.seconds === 60){
      this.minutes ++ 
      this.seconds = 0
      this.minutes ++ 
      
      if (this.minutes === 60){
        this.hours ++ 
        this.minutes = 0
          if (this.hours === 24){
            this.hours = 0
          } else {
            this.hours ++ 
          }
        }
      // } else {
      // }
    } else {
      this.seconds ++ 
    }
    this.printTime()
    // 2. Call printTime.
  }
}

const clock = new Clock();
// console.log(Date())
// setInterval(clock._tick(), 1000)