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
  addToDate: function (dateISO, years = 0, months = 0, days = 0) {
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
   * Generate a list of dates
   * @param {String} dateISO 
   * @param {String} interval 
   * @param {Integer} weekdays 
   * @param {Integer} duration 
   */
  generatePeridiocity: function (dateISO, interval, weekdays, duration) {
  // in progress...
  }
};
const form = document.getElementById("periodForm");
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

  resultBox = document.getElementById("result");
  resultBox.style.display = "block";
  resultBox.innerHTML = `
        <strong>Start date:</strong> ${startDate}<br>
        <strong>Interval:</strong> ${interval}<br>
        <strong>Selected days:</strong> ${selectedWeekdays.length > 0 ? selectedWeekdays.join(", ") : 'None'}<br>
        <strong>Duration:</strong> ${duration}<br>
      `;
  console.log({
    startDate,
    interval,
    selectedWeekdays,
    duration
  });
});