// Validation
const performValidation = () => {
  const description = document.getElementById('description').value;
  const price = document.getElementById('price').value;
  const quantity = document.getElementById('quantity').value;
  let noErrorsReturned = 0;
  if (description == '') {
    document.getElementById('description-helper-text').innerHTML =
      'Please enter a description';
    noErrorsReturned = 1;
  }
  if (price == '' || isNaN(price)) {
    document.getElementById('price-helper-text').innerHTML =
      'Please enter a valid price';
    noErrorsReturned = 1;
  }
  if (quantity == '' || isNaN(quantity)) {
    document.getElementById('quantity-helper-text').innerHTML =
      'Please enter a valid quantity';
    noErrorsReturned = 1;
  }
  return noErrorsReturned;
};
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
  const validation = performValidation();
  if (validation == 0) {
    document.getElementById('result-list').innerHTML = pricePerDiaper();
  }
});

// make comparison
