// DOM SELECTORS
const getYearElement = document.getElementById("year");

// HELPER FUNCTIONS
const setCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  getYearElement.innerText = currentYear;
};

// EVENT HANDLERS

// EXECUTE ON PAGE LOAD
setCurrentYear();
