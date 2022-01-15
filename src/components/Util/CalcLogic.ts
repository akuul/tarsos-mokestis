/*
 * 4 - EURO 6 ir naujesni
 * 3 - EURO 5
 * 2 - EURO 4, EURO 3
 * 1 - EURO 2, EURO 1
  TODO: Figure out how types work here
 */

const carTypeCofs: any = {
  diesel: { 4: 1.7, 3: 2, 2: 2.3, 1: 2.5 },
  petrol: { 4: 0.9, 3: 1, 2: 1.1, 1: 1.4 },
  gas: { 4: 0.8, 3: 0.9, 2: 1, 1: 1.3 },
};

const CalcLogic = (
  pollution: number,
  carType: keyof typeof carTypeCofs,
  euroStandard: number
) => {
  if (euroStandard && carType) {
    const euroCof = carTypeCofs[carType][euroStandard];
    const co2Cof =
      pollution <= 130
        ? 0
        : pollution >= 131 && pollution <= 160
        ? 0.56
        : pollution >= 161 && pollution <= 200
        ? 0.76
        : pollution >= 201 && pollution <= 250
        ? 1.1
        : 1.5;
    const price = pollution * co2Cof * euroCof;
    return price;
  } else {
    return 0;
  }
};

export default CalcLogic;
