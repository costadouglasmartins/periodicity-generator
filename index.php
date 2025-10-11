<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Peridiocity generator</title>
  <link rel="stylesheet" href="assets/css/default.css?v=<?= time(); ?>">
  <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico">
</head>
<body>
  
  <div class="form-container">

    <form id="periodForm">
      
      <!-- Start date -->
      <div>
        <label for="startDate">Start date:</label>
        <input autocomplete="off" type="date" id="startDate" name="startDate" required>
      </div>
      <!-- /Start date -->

      <!-- Interval -->
      <div>
        <label for="interval">Interval:</label>
        <select autocomplete="off" id="interval" name="interval" required>
          <option value="">Select...</option>
          <option value="DAILY">Daily</option>
          <option value="WEEKLY">Weekly</option>
          <option value="MONTHLY">Monthly</option>
          <option value="ANUALY">Anualy</option>
        </select>
      </div>
      <!-- /Interval -->

      <!-- Weekdays -->
      <div>
        <label>Weekdays:</label>
        <div class="weekdays">
          <label class="weekday-item"><input autocomplete="off" type="checkbox" name="weekdays" value="0">Sun</label>
          <label class="weekday-item"><input autocomplete="off" type="checkbox" name="weekdays" value="1">Mon</label>
          <label class="weekday-item"><input autocomplete="off" type="checkbox" name="weekdays" value="2">Tue</label>
          <label class="weekday-item"><input autocomplete="off" type="checkbox" name="weekdays" value="3">Wed</label>
          <label class="weekday-item"><input autocomplete="off" type="checkbox" name="weekdays" value="4">Thu</label>
          <label class="weekday-item"><input autocomplete="off" type="checkbox" name="weekdays" value="5">Fri</label>
          <label class="weekday-item"><input autocomplete="off" type="checkbox" name="weekdays" value="6">Sat</label>
        </div>
      </div>
      <!-- /Weekdays -->

      <!-- Duration -->
      <div>
        <label>Duration:</label>
        <select autocomplete="off" id="duration" name="duration">
          <option value="">Select...</option>
          <option value="7">One week</option>
          <option value="14">Two weeks</option>
        </select>
      </div>
      <!-- /Duration -->

      <!-- Action -->
      <button id="submitButton" type="submit">Generate</button>
      <!-- /Action -->

      <!-- Results -->
      <div id="result" class="result"></div>
      <!-- /Results -->
       
    </form>

  </div>

  <!-- Js -->
  <script src="assets/js/periodicity-generator.js?v=<?= time(); ?>"></script>
  <!-- /js -->

</body>
</html>