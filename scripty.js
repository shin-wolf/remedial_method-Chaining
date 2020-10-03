var angkaAcak = [77, 62, 55, 16, 26, 66, 75, 79, 39, 62, 59, 92, 45, 54, 8];

var jadi = angkaAcak
  .filter((a) => a <= 60)
  .map((a) => a / 5)
  .filter((a) => a < 10)
  .map((a) => a / angkaAcak.length)
  .reduce((acc, cuv) => acc / 3 + cuv);

console.log(jadi);
