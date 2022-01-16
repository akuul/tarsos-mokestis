const carTypeCofs: any = {
  diesel: { Euro6: 1.7, Euro5: 2, Euro34: 2.3, Euro21: 2.5 },
  petrol: { Euro6: 0.9, Euro5: 1, Euro34: 1.1, Euro21: 1.4 },
  gas: { Euro6: 0.8, Euro5: 0.9, Euro34: 1, Euro21: 1.3 },
};

const CalcLogic = (
  pollution: number,
  carType: keyof typeof carTypeCofs,
  euroStandard: string | null
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
