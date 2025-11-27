const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const purpose = urlParams.get("purpose");
const featured = urlParams.get("featured");
const latest = urlParams.get("latest");

// Property List Purpose
const propertyListPurpose = document.querySelector("#propertyListPurpose");
propertyListPurpose.textContent = purpose;

// Property List Filters
const propertyListFilters = document.querySelector("#propertyListFilters");
propertyListFilters.innerHTML += `<li>Featured? ${featured}</li>`;
propertyListFilters.innerHTML += `<li>Latest: ${latest}`;
