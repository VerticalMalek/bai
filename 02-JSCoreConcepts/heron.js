// boki trójkąta
//a = 3;
let b = 4;
let c = 5;
let h = 7;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let p = (b+c+h)/2;
let syntax = p * (Math.sqrt((p-b)*(p-c)*(p-h)))


console.log("Pole trókąta o bokach " + b + ", " + c +" " + "oraz " + h + " wynosi " + Math.round(syntax*1000)/1000 + " jednostek kwadratowych. ");
