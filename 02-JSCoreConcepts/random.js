var tab = [];

var inserting = () => {
  for (var a = 0; a < 10; a += 1){
    var test = Math.floor(Math.random() * 20) + 5;
    tab.push(test);
  };
  return tab;
};
var displaying = () => {
  return console.log(inserting());
};


displaying();
