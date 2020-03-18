// boki trójkąta
//a = 3;
const b = 4;
const c = 5;
const h = 7;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

const a = () => {
  const p = (b + c + h)/2;
  return Math.sqrt(p * (p - b) * (p - c) * (p - h));
};

console.log(`Pole trójkąta o bokach ${b}, ${c} oraz ${h} wynosi ${a()}`);
