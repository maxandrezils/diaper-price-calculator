// Validation
const performValidation = () => {
  const description = document.getElementById('description').value;
  const price = document.getElementById('price').value;
  const quantity = document.getElementById('quantity').value;
  let noErrorsReturned = 0;
  if (description == '') {
    document.getElementById('description-helper-text').innerHTML =
      '<span style="color:red;">Please enter a description</span>';
    noErrorsReturned = 1;
  }
  if (price == '' || isNaN(price)) {
    document.getElementById('price-helper-text').innerHTML =
      '<span style="color:red;">Please enter a valid price</span>';
      noErrorsReturned = 1;
  }
  if (quantity == '' || isNaN(quantity)) {
    document.getElementById('quantity-helper-text').innerHTML =
      '<span style="color:red;">Please enter a valid quantity</span>';
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
    `The price per diaper for ${description} is R` + parseFloat(price / quantity).toFixed(2) + '.'
  );
};
// Display on screen
document.getElementById('btn').addEventListener('click', () => {
  const validation = performValidation();
  if (validation == 0) {
    const node = document.createElement('LI');
    const textNode = document.createTextNode(pricePerDiaper());
    node.appendChild(textNode);
    document.getElementById('result-list').appendChild(node);
  }
});

// Compare the price of diapers and show the cheapest option.
