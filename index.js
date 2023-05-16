function createPhoneNumber(numbers) {
  var areaCode = numbers.slice(0, 3).join('');
  var firstPart = numbers.slice(3, 6).join('');
  var secondPart = numbers.slice(6).join('');

  return `(${areaCode}) ${firstPart}-${secondPart}`;
}
