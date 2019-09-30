// Validation
const perform;
// Calculation
const pricePerDiaper = () => {
  const description = document.getElementById('description').value;
  const price = document.getElementById('price').value;
  const quantity = document.getElementById('quantity').value;
  return (
    `The price per diaper for ${description} is R` + price / quantity + '.'
  );
};
// Display on screen
document.getElementById('btn').addEventListener('click', () => {
  document.getElementById('result-list').innerHTML = pricePerDiaper();
});

// make comparison
