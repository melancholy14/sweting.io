/**
 * Please complete 'solve' function to know how much you have to pay for the meal
 * ! Note: You can find the total cost by computing;
 * ! - the meal price (base cost of a meal)
 * ! - tip percent (the percentage of the meal price being added as tip)
 * ! - tax percent (the percentage of the meal price being added as tax)
 */

// Complete the function below
function solve(mealCost, tipPercent, taxPercent) {
  const tipCost = mealCost * tipPercent / 100;
  const taxCost = mealCost * taxPercent / 100;

  const totalCost = Math.round(mealCost + tipCost + taxCost);

  console.log(totalCost);
}

solve(12, 20, 8);  // 15

solve(15.50, 15, 10); // 19
