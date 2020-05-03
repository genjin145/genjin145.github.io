
class Timer {
  constructor(element) {
    this.element = document.querySelector(element);
    this.timeStart = 0;
    this.time = 0;
    this.timer;

    this.initEvent();
  }

  start() {
    this.timeStart = Date.now() - this.time;

    let loop = () => {
      let timeCurrent = Date.now(),
          time = timeCurrent - this.timeStart,
          seconds = Math.floor(time / 1000),
          fullTime = Timer.getFullTime(seconds);

      this.time = time;

      this.displayTime(fullTime);
      
      this.timer = setTimeout(() => loop(), 100);
    };

    loop();
  }

  stop() {
    if (this.timer) clearTimeout(this.timer);
  }

  clear() {
    this.time = 0;
    this.stop();
    this.displayTime(Timer.returFullZeroTime());
  }

  initEvent() {
    let start = this.element.querySelector('.timer__options-start'),
        stop = this.element.querySelector('.timer__options-stop'),
        clear = this.element.querySelector('.timer__options-clear');

    start.addEventListener('click', () => {
      start.disabled = true;
      stop.disabled = false;
      this.start();
    });

    stop.addEventListener('click', () => {
      start.disabled = false;
      stop.disabled = true;
      this.stop();
    });

    clear.addEventListener('click', () => {
      start.disabled = false;
      stop.disabled = false;
      this.clear();
    });
  }

  displayTime(fullTime) {
    let displayHours = this.element.querySelector('.timer__display-hours'),
        displayMinuts = this.element.querySelector('.timer__display-minuts'),
        displaySeconds = this.element.querySelector('.timer__display-seconds');

    displayHours.textContent = fullTime.hours;
    displayMinuts.textContent = fullTime.minuts;
    displaySeconds.textContent = fullTime.seconds;
  }

  static getFullTime(seconds) {
    let h = Math.floor(seconds / 3600 % 3600),
        m = Math.floor(seconds / 60 % 60),
        s = Math.floor(seconds % 60);
  
    return {
      hours: Timer.returnString(h),
      minuts: Timer.returnString(m),
      seconds: Timer.returnString(s)
    };
  }

  static returFullZeroTime() {
    return {
      hours: Timer.returnString(0),
      minuts: Timer.returnString(0),
      seconds: Timer.returnString(0)
    };
  }

  static returnString(num) {
    if (num / 10 < 1) {
      return '0' + num;
    }
    return num.toString();
  }
}


let timer = new Timer('.timer');
