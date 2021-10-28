class AlarmClock {
	constructor () {
		this.alarmCollection = [];
		this.timerId = null;
	};
	addClock (time, callback, id){
      if (id === undefined) {
        throw new Error("не передан параметр id");
      }
      if (this.alarmCollection.find(item => item.id === id)) {
        console.error('будильник с таким id уже существует')
      };
      this.alarmCollection.push({id, time, callback})
	};

  removeClock (id) {
  	  let alarmLength1 = this.alarmCollection.length;
	  let delClock = this.alarmCollection.find(item => item.id === id);
      this.alarmCollection.splice(this.alarmCollection.indexOf(delClock), 1);
      let alarmLength2 = this.alarmCollection.length;
      return (alarmLength1 === alarmLength2); 
	}

  getCurrentFormattedTime () {
    let time = new Date ()
    return time.toLocaleTimeString([], {timeZone: 'Europe/Moscow', hour: 'numeric', minute: 'numeric', hour12: false});
  }

  start () {
    function checkClock (ddt) {
      if (this.getCurrentFormattedTime() === ddt.time) {
        return ddt.callback();
      }
    }
    if (this.timerId === null) {
      const check = setInterval(function () {
        for (let i = 0; i < this.alarmCollection.length; i++) {
          this.checkClock(this.alarmCollection[i]);
        }
      }, 3000); 
      return check;
    }  
  };

  stop () {
    if (this.timerId) {
      clearsetInterval(this.check);
      this.timerId = null;
    }
  }
 
  printAlarms () {
    this.alarmCollection.forEach((item) => console.log('id:' + item.id + '; ' + 'time ' + item.time));
  }

  clearAlarms () {
    this.stop();
    this.alarmCollection.length = 0;
  }
   }
 
 function testCase () {
 	let alarmClock = new AlarmClock();
 	alarmClock.addClock('7:47', () => console.log('давай вставай'), 1);
 	alarmClock.addClock('7:48', () => {console.log('давай вставай'); alarmClock.removeClock (2)}, 2);
 	alarmClock.addClock('7:49', () => {console.log('давай вставай'); alarmClock.stop(); alarmClock.clearAlarms(); alarmClock.printAlarms ()}, 3);
 	alarmClock.printAlarms ();
 	alarmClock.start();
 };

 testCase();

