export default function fetchElectronConfig(atomicNumber) {
  // ex : atomic Number 11
  // function returns 2-8-1
  let electronsInEachOrbit = [];
  let sum = 0;
  for (let i = 1; i < 500; i++) {
    let noOfElectronsInOrbit = 2 * i * i;
    if (
      atomicNumber - 2 * i * i > 0 &&
      sum + noOfElectronsInOrbit < atomicNumber
    ) {
      electronsInEachOrbit.push(noOfElectronsInOrbit);
      sum += noOfElectronsInOrbit;
    } else if (sum - atomicNumber < 0) {
      let difference = atomicNumber - sum;
      sum += difference;
      electronsInEachOrbit.push(difference);
    } else {
      break;
    }
  }
  return electronsInEachOrbit.toString().replaceAll(",", "-");
}
