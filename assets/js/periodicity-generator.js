let dateISO = null;
let interval = 0;
let weekdays = {};
let duration = 0;
let periodicityGenerator = {
  /**
   * Add years, months and days to a certain date
   * @param {String} dateISO 
   * @param {Integer} years 
   * @param {Integer} months 
   * @param {Integer} days 
   * @returns String
   */
  addToDate: function (dateISO, years = 0, months = 0, days = 0) 
    {
    const [year, month, day] = dateISO.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    date.setFullYear(date.getFullYear() + years);
    date.setMonth(date.getMonth() + months);
    date.setDate(date.getDate() + days);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
    },
  /**
   * Returns the description or its number of a weekday from a certain date
   * @param {String} dateISO 
   * @param {Boolean} returnName 
   * @returns Mixed
   */
  getWeekday: function (dateISO, returnName = false) 
    {
    const [year, month, day] = dateISO.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    const weekdayNumber = date.getDay(); // 0 = Sunday, 6 = Saturday
    if (!returnName) return weekdayNumber;
    const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekdayNames[weekdayNumber];
    },
  /**
   * Generate a list of dates
   * @param {String} dateISO 
   * @param {String} interval 
   * @param {Integer} selectedWeekdays 
   * @param {Integer} duration 
   */
  generatePeridiocity: function (dateISO, interval, selectedWeekdays, duration) 
    {
    let resultBox = document.getElementById("result");
    resultBox.style.display = "block";
    switch (interval) 
      {
      default:
      case "DAILY":
        let stringDates = "";
        for (var i = 0; i < duration; i++)
          {
          let newISODate = this.addToDate(dateISO, 0, 0, i);
          let weekday = this.getWeekday(newISODate);
          //console.log(">>", selectedWeekdays, newISODate);
          if (selectedWeekdays.includes(weekday.toString()))
            {
            stringDates += newISODate + " - " + this.getWeekday(newISODate, true) + "<br>";  
            }
          }
        resultBox.innerHTML = stringDates;
      break;
      case "WEEKLY":  
      break;
      case "MONTHLY":
      break;
      }
    }
    
};
const form = document.getElementById("periodicityGeneratorForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const startDate = document.getElementById("startDate").value;
  const interval = document.getElementById("interval").value;
  const selectedWeekdays = Array.from(document.querySelectorAll("input[name='weekdays']:checked")).map(cb => cb.value);
  const duration = document.getElementById("duration").value;

  if (!startDate || !interval || !selectedWeekdays || !duration) 
    {
    alert("Please, fill in all fields.");
    return;
    }

  periodicityGenerator.generatePeridiocity(startDate, interval, selectedWeekdays, duration);
});
/*
let intervalField = document.getElementById("interval");
intervalField.addEventListener("change", (event) => {
  console.log(event.target.value);
});
*/