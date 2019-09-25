const displayText = () => {
  let randomChar = '';
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < 26; i++) {
    randomChar += `${alphabet[parseInt(Math.random() * 26)]} `;
  }
  console.log(randomChar);
  return 0;
};

displayText();
