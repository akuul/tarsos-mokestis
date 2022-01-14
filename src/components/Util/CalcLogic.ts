/*
 * 3 - EURO 6 ir naujesni
 * 2 - EURO 5
 * 1 - EURO 4, EURO 3
 * 0 - EURO 2, EURO 1
  TODO: Figure out how types work here
 */

const carTypeCofs: any = {
  diesel: { 3: 1.7, 2: 2, 1: 2.3, 0: 2.5 },
  petrol: { 3: 0.9, 2: 1, 1: 1.1, 0: 1.4 },
  gas: { 3: 0.8, 2: 0.9, 1: 1, 0: 1.3 },
};

const CalcLogic = (pollution: number, carType: any, euroStandard: number) => {
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
};

export default CalcLogic;
