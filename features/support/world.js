var CalculatorPage = require("../pages/calculator_page.js");
function World() {
  this.page = new CalculatorPage();
}

module.exports = function() {
  this.World = World;
};