//sentence for the mastery.
var sent1 =
  "Oscar has 5 kids and a beautiful wife named Stella. 4 of the children are identical twins and the other child is the oldest by 1 year.";
var sent2 =
  "The family has 6 relatives living in the San Antonio area, and 2 more relatives who live within 100 miles of the area.";
var sent3 =
  "This summer they plan on traveling to El Paso to visit as many family members as possible.";

//extracting numerical values from sentence 1
var set1 = sent1.slice(10, 11);
var set2 = sent1.slice(51, 54);
var set3 = sent1.slice(126, 129);
//extracting numerical values from sentence 2
var set4 = sent2.slice(14, 16);
var set5 = sent2.slice(62, 64);
var set6 = sent2.slice(95, 99);

//extacting 10 and 10 to 100
var set10 = set6.substring(-3, 3);
var set0 = set6.substring(3);

//using parse int for all variables
var set1 = parseInt("5");
var set2 = parseInt("4");
var set3 = parseInt("1");
var set4 = parseInt("6");
var set5 = parseInt("2");
var set10 = parseInt("10"); var set0 = parseInt("0");

//calculations to display
var subtotal = set1 + set2 + set3 + set4 + set5 + set10;
console.log("Variables for the total is storing " + subtotal, ".");

//replacing el paso
var sanantonio = sent2.slice(41,52)
var repsanan = sent3.replace("El Paso", sanantonio);
console.log(repsanan);

//while loop
var i = 0;
while (i < set10) {
  i++;
  console.log("I saw " + i + "car(s) on my trip");
}

