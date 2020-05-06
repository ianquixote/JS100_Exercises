let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
let i = 0;

for (i = 0; i < fish.length; i++) {
  console.log(fish[i]);
  if (fish[i] === 'Nemo') {
    break;
  }
}
