// from data.js
var tableData = data;

// Select references to table body, fields, and filter button
let tbody = d3.select("tbody");
let inputDate = d3.select("#date");
let inputCity = d3.select("#city");
let inputState = d3.select("#state");
let inputCountry = d3.select("#country");
let inputShape = d3.select("#shape");
let filterBtn = d3.select("#filter-btn");

// Attach event to filter button
filterBtn.on("click", handleClick)

// Create table body
function filterTable() {
    tbody.innerHTML=""; // clears table
    tableData.forEach(item => {
        var row = tbody.append("tr");
        Object.entries(item).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        })
    })
}

function handleClick() {
    // trim and lower case all inputs
    let selectDate = inputDate.value.trim();
    let selectCity = inputCity.value.trim().toLowerCase();
    let selectState = inputState.value.trim().toLowerCase();
    let selectCountry = inputCountry.value.trim().toLowerCase();
    let selectShape = inputShape.value.trim().toLowerCase();
    
    // filter dataset
    if (selectDate != "") {
        filteredData = tableData.filter(function(sighting) {
            let tableDate = ufoSighting.datetime;
            return selectDate === tableDate;
        })         
    }
    if (selectCity != "") {
        filteredData = filteredData.filter(function(sighting) {
            let tableCity = ufoSighting.city.toLowerCase();
            return selectCity = tableCity;
        })
    }
    if (selectState != "") {
        filteredData = filteredData.filter(function(sighting) {
            let tableState = ufoSighting.state.toLowerCase();
            return selectState = tableState;
        })
    }
    if (selectCountry != "") {
        filteredData = filteredData.filter(function(sighting) {
            let tableCountry = ufoSighting.country.toLowerCase();
            return selectCountry = tableCountry;
        })
    }
    if (selectShape != "") {
        filteredData = filteredData.filter(function(sighting) {
            let tableShape = ufoSighting.shape.toLowerCase();
            return selectShape = tableShape;
        })
    }
    filterTable();
}

// Show table upon initially loading page
filterTable(); 