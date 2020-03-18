const title = "dr";
const name = "Mateusz";
const surname = 'Kubicki';
const street = 'Długa 15';
const city = 'Kraków';
const zip = '30-781';
const country = 'Poland';

console.log(title + " " + name + " " + surname+ "\n" + "ul. " + street);
console.log(zip + " " + city);
console.log(country.toUpperCase());

console.log(`${title} ${name} ${surname}
ul. ${street} ${zip} ${city}
${country.toUpperCase()}`);
/*
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/
