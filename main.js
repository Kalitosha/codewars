console.log('it`s work');
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
надо посчитать количеств повторяющихся букв
Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/


function duplicateCount(text){
const str = text.toLowerCase().split('').sort();

let buffer = '';
let counter = 0;
let dublicates = [];

  for (let el of str){    
    if(el === buffer){
      if( dublicates.find(item => item === el) !== undefined){
        continue;
      } 
      else {      
        counter++;
        dublicates.push(el);        
      }
    }
    buffer = el;
  }
  return counter;
}
//Time: 903ms

//другие решения
function duplicateCount(text){
  return text
      .toLowerCase()
      .split('')
      .reduce(function(a, l) {
        a[l] = a[l] ? a[l]+1 : 1;
        if(a[l] === 2) a.count++;
        return a;
      }, {count:0}).count;
}
//
const _ = require('lodash');

function duplicateCount(text) {
  return _(text).countBy(_.toUpper).values().map(x => x > 1).sum();
}
//
function duplicateCount(text){
  text = text.toLowerCase()
  return text.split('').filter(function (c, i) {
    return text.indexOf(c) == i && text.indexOf(c) != text.lastIndexOf(c)
  }).length
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
надо вывести порядковый номер отличающейся цифры (либо единственную четную, либо нечетную)
##Examples :
iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
*/

function iqTest(numbers){  
  let count_even = 0;
  let count_odd = 0;
  
  let last_even_id = 0;
  let last_odd_id = 0;
  
  numbers = numbers.split(' ');
  
  numbers.forEach((el, i)=>{
    if(el%2){
      //нечет 
      count_odd++;
      last_odd_id = i+1;
    }
    else{
      //чет 
      count_even++;
      last_even_id = i+1;
    }
  });
    
  if(count_odd === 1 && count_even > 1){ // единственная нечетная
    return last_odd_id;
  } 
  else if(count_even === 1 && count_odd > 1){ // единственная четная
    return last_even_id;
  } 

  return null;
}
//Time: 855

//другие решения
function iqTest(numbers){
  var nums = numbers.split(" ").map(x => x % 2);  
  var sum = nums.reduce((a,b) => a + b);  
  var target = sum > 1 ? 0 : 1;
  
  return nums.indexOf(target) + 1;
}
//
const iqTest = test => {
  const numbers = test.split(" ");
  const evens = numbers.filter(el => el%2 );
  const odds = numbers.filter(el => !(el%2));
  const differ = evens.length == 1 ? evens[0] : odds[0]
  
  return numbers.indexOf(differ) + 1
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Создайте функцию, которая возвращает сумму двух самых низких положительных чисел, заданную массивом из минимум 4 положительных целых чисел. Никакие поплавки или неположительные целые числа не будут переданы.
Например, когда массив передается следующим образом [19, 5, 42, 2, 77], выход должен быть равен 7.
*/

function sumTwoSmallestNumbers(numbers) {  
  numbers.sort(function(a, b) {
    return a - b;
  });
  return(numbers[0] + numbers[1]);
}
//Time: 998ms

//еще примеры
const sumTwoSmallestNumbers = numbers => numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y);
//
function sumTwoSmallestNumbers(numbers) {  
  const [a, b] = [...numbers].filter(e => e >= 0).sort((a,b) => a - b);  
  return a + b;  
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
*/


function rowSumOddNumbers(n) {
let numb = 1; // последнее число
let count = 1; // кол-во символов в строке
let sum = 0;
	for(let i = 1; i<=n; i++){      
	  	for(let j = 0; j<count; j++){ 
		    if(i === n){
		    	sum += numb;
		    }
		    numb += 2;
		}  
    	if(i === n){break;}
    	count++;
  	}
  return sum;
}
//Time: 968ms

//
let rowSumOddNumbers = n => n ** 3;
//
function rowSumOddNumbers(n) {
  return n > 0 ? n ** 3 : "Wrong Input"
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Просто, учитывая строку слов, верните длину самого короткого слова(ов).
Строка никогда не будет пустой, и вам не нужно учитывать различные типы данных.
*/

function findShort(s){
  s = s.split(' ').sort((x,y) => x.length-y.length);
  return s[0].length;
}
//Time: 850ms

/*забажено (не все тесты проходит)
function findShort(s){
  let min = Number.MAX_VALUE;
  let len = 0;
  for (var i = 0; i < s.length; i++){
    if(s[i] === ' '){ // собрали слово
      if(min>len){
        min = len;
      }
      len = 0;
    }
    else if(s[i] !== ' '){
      len++;
    }
  }
  if(min === Number.MAX_VALUE){ min=0}
  return min;
}*/
//Time: 842ms

//

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}
//
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}
//
const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. */
function even_or_odd(number) {
  if((number%2)=== 0){
    return "Even"
  }
  else return "Odd"
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Introduction
The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

Input , Output Examples ::
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)
 */

function century(year) {
  return Math.ceil(year/100)
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

DNAStrand ("ATTGC") // return "TAACG"
DNAStrand ("GTAT") // return "CATA"  
*/

function DNAStrand(dna){
  let dnaRevert = Array.from(dna)
  for (let i=0; i<dna.length; i++){
    if(dna[i] == "A")
      dnaRevert[i] = 'T'      
    else if(dna[i] == "T")
      dnaRevert[i] = 'A'
    else if(dna[i] == 'C')
      dnaRevert[i] = 'G'
    else if(dna[i] == "G")
      dnaRevert[i] = 'C'
    
  }
  return dnaRevert.join('')
}

console.log( DNAStrand("AAAA") ) //TTTT
console.log( DNAStrand("ATTGC") ) //TAACG
console.log( DNAStrand("GTAT") ) //CATA

// более органичное решение
function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////