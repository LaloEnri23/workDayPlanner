// Wrap all code that interacts with the DOM in a call to jQuery to ensure that

// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  let now = dayjs
  console.log(now);

    //ADD DATE
    let currentDay = $("#currentDay")
    let currentTime = dayjs().format("dddd  MMMM DD, YYYY  hh:mmA")
    currentDay.text(currentTime)
  
    let currentHour = dayjs().hour()
    for (let i = 9; i < 17; i++) { //9-17 world hour
      let parentId = $("#hour-" + i)
      if (i < currentHour) {
        ( 
          parentId.children("textarea").addClass
            ("past")
        );//PAST CLASE
      } if (i > currentHour) {
        // FUTURE CLASS
        (parentId.children("textarea").addClass
          ("future")
        );
      }
      if (i == currentHour) {
        // PRESENT CLASE
        (parentId.children("textarea").addClass
          ("present")
        );
      }
      ;
    }

    $(".saveBtn").on('click', function () {
      let taskHour = $(this).parent().attr('id');
      let tasks = $(this).siblings('textarea').val();
      localStorage.setItem(taskHour, tasks);
    })
  
    $('.time-block').each(function () {
      let savedBlock = $(this).attr('id');
      let savedValue =
        localStorage.getItem(savedBlock);
      if (savedValue !== undefined) {
        $(this).find('textarea').val(savedValue);
      }
    });
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
