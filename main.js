// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input");
const replaceInput = document.querySelector(".replace-input");
const replaceAllButton = document.querySelector(".replace-all-button");

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row");

// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen?
function getCellElements(currentRowElement) {
  return currentRowElement.querySelectorAll(".cell");
}

// YOUR CODE GOES HERE

replaceAllButton.addEventListener("click", function () {
  let findValue = findInput.Value;
  let replaceValue = replaceInput.value;

  for (let m = 0; m < rowElements.length; m++) {
    let cells = getCellElements(rowElements[m]);
    // console.log(cells);

    for (let s = 0; s < cells.length; s++) {
      console.log(cells[s].innerHTML);

      var str =
        "full name, company, mailing address, city, country, state/region,country";
      var n = str.includes("fullName");
      console.log(m.innerHTML);
    }
    function myfunction() {
      var str = document.getElementById("demo").innerHTML;
      var res = str.replace("findInput", "replaceInput", function (x) {
        return x.toUpperCase();
      });
      document.getElementById("demo").innerHTML = res;
    }

    // var res = str.replace("findInput", "replaceInput");
    //console.log(res.innerHTML);
  }
});
// loop over rawElements

// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
