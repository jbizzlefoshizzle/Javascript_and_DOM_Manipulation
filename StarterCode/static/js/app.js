// from data.js
var tableData = data;

// TABLE FIELDS
console.log(tableData)
var date = tableData.map(row => row.datetime);
var city = tableData.map(row => row.city);
var state = tableData.map(row => row.state);
var country = tableData.map(row => row.country);
var shape = tableData.map(row => row.shape);
var duration = tableData.map(row => row.durationMinutes);
var comments = tableData.map(row => row.comments);

function buildTable(date, city, state, country, shape, duration, comments) {
    var table = d3.select("#ufo-table"); // PICK THE CORRECT TABLE ID!
    var tbody = table.select("tbody"); // PUT THE THINGS IN THE TABLE
    var trow;
    for (var i = 0; i < tableData.length; i++) {
        trow = tbody.append("tr"); // Add rows to table
        // Add table data, comprised of all table fields
        trow.append("td").text(date[i]);
        trow.append("td").text(city[i]);
        trow.append("td").text(state[i]);
        trow.append("td").text(country[i]);
        trow.append("td").text(shape[i]);
        trow.append("td").text(duration[i]);
        trow.append("td").text(comments[i]);
    };
};

buildTable(date, city, state, country, shape, duration, comments);

// References - who's getting these references?
// let dateInput = document.querySelector(date);
// let cityInput = document.querySelector(city);
// let stateInput = document.querySelector(state);
// let countryInput = document.querySelector(country);
// let shapeInput = document.querySelector(shape);
// let durationInput = document.querySelector(duration);
// let commentsInput = document.querySelector(comments); // This one may be tricky

// function onEnter() {
//     let filterDate = dateInput.value.trim();

//     filterData = tableData.filter(function(soich) {
//         let searchDate = soich.datetime;

//         if (
//             searchDate === filterDate || filterDate === ""
//         ) {
//             return true;
//         }
//         return false;
//     })
// };

function searchThings() {
    var input = document.getElementById("datetime"); // INPUT ID
    var filter = input.value;
    var table = document.getElementById("ufo-table"); // TABLE ID
    var tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
          if (td.innerHTML.indexOf(filter) > -1) {
              tr[i].style.display = "";
          }
          else {
              tr[i].style.display = "none";
          }
      }
  }
}

// searchThings();
