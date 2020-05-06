calculateBMI(180, 80);

function calculateBMI(cmHeight, kgWeight) {
  console.log((kgWeight / (cmHeight / 100)**2).toFixed(2));
}
