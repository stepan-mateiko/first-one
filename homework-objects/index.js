/*Створи об'єкт, що описує автомобіль
 (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку,
 середня витрата палива на 100 км., водії),  */
const truck = {
  mark: "DAF",
  model: "XF450",
  yearOfMade: 2018,
  averageSpeed: 85,
  fuelCapasity: 600,
  averageConsumption: 31,
  drivers: ["ivan", "taras", "roman"],
  //  Метод, який виводить на екран інформацію про автомобіль.
  showInfo: function () {
    console.log(
      `This truck is ${this.mark}, model ${this.model}, ${this.yearOfMade} year, Its average speed is ${this.averageSpeed} km per hour, fuel capacity ${this.fuelCapasity} litres, and average fuel consumption ${this.averageConsumption} litres per 100km`
    );
  },
  // Додавання ім’я водія у список
  addDriver: function (name) {
    typeof name === "string"
      ? this.drivers.push(name)
      : console.log("invalid input");
  },
  // Перевірка водія на наявність його ім’я у списку
  checkDriver: function (name) {
    return this.drivers.includes(name)
      ? "This driver is in the list"
      : "This driver isn't in the list";
  },
  /*Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю.
     Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.  */
  calculateFuelAndTime: function (distance) {
    if (!isNaN(distance) && distance > 0) {
      const fuel = ((distance / 100) * this.averageConsumption).toFixed(1);
      let primalTime = distance / this.averageSpeed;
      let time = 0;
      while (primalTime >= 4) {
        primalTime -= 4;
        time += 5;
      }
      time += primalTime;
      const hours = Math.floor(time);
      const minutes = Math.round((((time - hours) * 100) / 100) * 60);
      return `The trip will last ${hours} hours, ${minutes} minutes and will need ${fuel} litres of fuel`;
    } else {
      return "invalid input";
    }
  },
};

/*Створити об'єкт, що описує час (години, хвилини, секунди) */
const time = {
  hour: 14,
  minute: 17,
  second: 33,
  // Для виведення часу на екран
  showTime: function () {
    return `It is ${this.hour}:${this.minute}:${this.second}`;
  },
  // Зміни часу на передану кількість секунд.
  addSeconds: function (seconds) {
    if (!isNaN(seconds)) {
      let hoursToAdd = 0;
      let minutesToAdd = 0;
      let secondsToAdd = 0;
      if (seconds > 0) {
        while (seconds >= 3600) {
          hoursToAdd++;
          seconds -= 3600;
        }
        while (seconds >= 60) {
          minutesToAdd++;
          seconds -= 60;
        }
        secondsToAdd += seconds;
        this.hour += hoursToAdd;
        this.minute += minutesToAdd;
        this.second += secondsToAdd;
        if (this.second > 59) {
          this.minute++;
          this.second = this.second - 60;
        }
        if (this.minute > 59) {
          this.hour++;
          this.minute = this.minute - 60;
        }
      } else if (seconds < 0) {
        while (seconds <= -3600) {
          hoursToAdd++;
          seconds += 3600;
        }
        while (seconds <= -60) {
          minutesToAdd++;
          seconds += 60;
        }
        secondsToAdd += seconds;
        this.hour -= hoursToAdd;
        this.minute -= minutesToAdd;
        this.second -= secondsToAdd;
        if (this.second < 0) {
          this.minute--;
          this.second = this.second + 60;
        }
        if (this.minute < 0) {
          this.hour--;
          this.minute = this.minute + 60;
        }
      }
      return `It is ${this.hour}:${this.minute}:${this.second}`;
    } else {
      return "invalid input";
    }
  },
  // Зміни часу на передану кількість хвилин.
  addMinutes: function (minutes) {
    if (!isNaN(minutes)) {
      let hoursToAdd = 0;
      let minutesToAdd = 0;
      if (minutes > 0) {
        while (minutes >= 60) {
          hoursToAdd++;
          minutes -= 60;
        }
        minutesToAdd += minutes;
        this.hour += hoursToAdd;
        this.minute += minutesToAdd;
        if (this.minute > 59) {
          this.hour++;
          this.minute = this.minute - 60;
        }
      } else if (minutes < 0) {
        while (minutes <= -60) {
          hoursToAdd++;
          minutes += 60;
        }
        minutesToAdd += minutes;
        this.hour -= hoursToAdd;
        this.minute -= minutesToAdd;
        if (this.minute < 0) {
          this.hour--;
          this.minute = this.minute + 60;
        }
      }
      return `It is ${this.hour}:${this.minute}:${this.second}`;
    } else {
      return "invalid input";
    }
  },
  // Зміни часу на передану кількість годин.
  addHours: function (hours) {
    if (!isNaN(hours)) {
      this.hour += hours;
      while (this.hour >= 24) {
        this.hour -= 24;
      }
      while (this.hour < 0) {
        this.hour += 24;
      }
      return `It is ${this.hour}:${this.minute}:${this.second}`;
    } else {
      return "invalid input";
    }
  },
};

console.log(time.addHours(140));
