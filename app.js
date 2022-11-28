//    Topic: Changing Case //
// Task : 1.
// var a = prompt("Enter Any Word, We Convert it into UPPERCASE");
// var b = a.toUpperCase();
// document.write(b);

// Task : 2.
// var input = prompt("Enter Any Word, We Convert it into TitleCase")
// var firstLetter = input.slice(0, 1);
// var otherLetters = input.slice(1);
// input = firstLetter.toUpperCase() + otherLetters.toLowerCase();
// document.write(input);

//    Topic: Strings: measuring length and extracting parts //
// Task : 1.
// var mobile = prompt("Enter Your Favorite Mobile Phone Model");
// var length = mobile.length;
// document.write(length);

// Task : 2.
// var str1 = prompt("Enter Your Favorite Mobile Phone Model");
// var str2 = str1.charAt(str1.length-1);
// document.write(str2)
//    CHAPTER NO: 21 - 30 //

//    Topic: Changing Case //
// Task : 1.
// var a = prompt("Enter Any Word, We Convert it into UPPERCASE");
// var b = a.toUpperCase();
// document.write(b);

// Task : 2.
// var input = prompt("Enter Any Word, We Convert it into TitleCase")
// var firstLetter = input.slice(0, 1);
// var otherLetters = input.slice(1);
// input = firstLetter.toUpperCase() + otherLetters.toLowerCase();
// document.write(input);

//    Topic: Strings: measuring length and extracting parts //
// Task : 1.
// var mobile = prompt("Enter Your Favorite Mobile Phone Model");
// var length = mobile.length;
// document.write(length);

// Task : 2.
// var str1 = prompt("Enter Your Favorite Mobile Phone Model");
// var str2 = str1.charAt(str1.length-1);
// document.write(str2);

//    Topic: Strings: finding segments //
// Task : 1.
// var nationality = "Pakistani"
// document.write(nationality.indexOf("n"));

// Task : 2.
// var username = prompt("Enter a Username")
// var checkusername = username.indexOf("@");
// if(checkusername != -1){
//     prompt("Enter a Valid Username")
// }

// Task : 3.
// var string = "The quick brown fox jumps over the lazy dog";
// var count = string.match(/the/g).length
// document.write(count)

//    Topic: Strings: finding a character at a location //
// Task : 1.
// var nationality2 = "Pakistani"
// var find = nationality2.charAt(3)
// document.write(find);

// Topic: Strings: replacing characters //
// Task : 1.
// var city = "Hyderabad";
// document.write("Before Replacing The Character: &nbsp", city)
// var chngcity = city.replace("Hyder","Islam")
// document.write("<br><br> After Replacing Hyder Character: &nbsp",chngcity)

// Task : 2.
// var message = "Ali and Sami are best friends.";
// var message2 = "They play cricket and football together.";
// var chngcharacter = message.replace("and","&")
// var chngcharacter2 = message2.replace("and","&")
// document.write(chngcharacter)
// document.write(chngcharacter2)

//  Topic: Rounding numbers //
// Task : 1.
// var number = prompt("Enter Any Positive Floating Number")
// var round = Math.round(number)
// var flor = Math.floor(number)
// var ceil = Math.ceil(number)
// document.write("<big>Round Off Value of Number: ",round)
// document.write("<br>Floor Value of Number: ",flor)
// document.write("<br>Ceil Value of Number: ",ceil)

// Task : 2.
// var negnumber = prompt("Enter Any Negative Floating Number")
// var round = Math.round(negnumber)
// var flor = Math.floor(negnumber)
// var ceil = Math.ceil(negnumber)
// document.write("<big>Round Off Value of Negative Number: ",round)
// document.write("<br>Floor Value of Negative Number: ",flor)
// document.write("<br>Ceil Value of Negative Number: ",ceil)

//    Topic: Generating random numbers //
// Task : 1.
// var a = Math.random();
// var dice = Math.round(a);
// var dice = Math.round(a*6);
// var dice = Math.ceil(a*6);
// document.write("<big>Dice Number: ",dice);

// Task : 2.
// var a = Math.random();
// var toss = Math.round(a * 2);
// document.write("<big>Toss Heads/Tails: ");
// if (toss == 2) {
//   document.write("Heads");
// }
// else {
//   document.write("Tails");
// }

// Task : 3.
// var secret = 5;
// var user = prompt("Enter a Number Between 1 to 10")
// if(user == secret){
//     document.write("Congratulation you Enter A Secret Number")
// }
// else{
//     document.write("OOPS! you Can't Enter A Secret Number")
// }

// Topic: Converting strings to integers and decimals //
// Task : 1.
// var weight = prompt("Write Your weight")
// var convert = parseInt(weight)
// var convert = parseFloat(weight)
// document.write("Your Weight is: ",convert, "Kg")

//    Topic: Converting strings to numbers, numbers to strings//
// Task : 1.
// var string = "472"
// var convertstr = Number(string)
// document.write("<big> Value: ",convertstr)
// document.write("<br> Type: ",typeof(convertstr))

// Task : 2.
// var num = 35.36
// var strg = num.toString().replace(".", "");
// document.write("<big>String Value: ", strg);

//    Topic: Controlling the length of decimals //
// Task : 1.
// var percentage = 30 / 45 * 100;
// var fixed = percentage.toFixed(0)
// document.write("<big>After Controlling the Lenght of Decimal: ",fixed)