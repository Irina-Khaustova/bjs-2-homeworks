class AlarmClock {
	constructor () {
		this.alarmCollection = [];
		this.timerId = null;
	}; 

    addClock (date, callback, id) {
      if (id === undefined) {
        throw new Error("не передан параметр id");
      }
      if (this.alarmCollection.find(item => item.id === id)) {
        console.error('такой id уже существует')
      }
      this.alarmCollection.push({id, date, callback})
	};

	removeClock (id) {
	  let delClock = this.alarmCollection.find(item => item.id === id);
      this.alarmCollection.splice(this.alarmCollection.indexOf(delClock), 1);
	};

	getCurrentFormattedTime () {
      return new Date();
    };

    start () {
      checkClock () {
      
    }
  }

   };