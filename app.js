console.log("array lesson")
// aaray 
// objects
const myName = "ahmed"
console.log(myName.toUpperCase())
console.log(myName.toLocaleLowerCase())
const myStudents = ['ahmed', 'jaafar', 'ali']
console.log(myStudents)
// array start at zero 
console.log(myStudents[0])
console.log(myStudents[1])
console.log(myStudents[2])
console.log(myStudents.length)
// methods of array
// pop ()
// delete from top 
myStudents.pop()
console.log(myStudents)
// push () 
// add a new value
myStudents.push('naser')
console.log(myStudents)
// remove the first elemnt rom aaay 
// shift 
myStudents.shift()
console.log(myStudents)
// to add new value use unshift 
myStudents.unshift('adam')
console.log(myStudents)

// splice you can add or remove from anybplace in array
myStudents.splice(1, 2)
console.log(myStudents)
myStudents.push('ahmed', 'huusain')
myStudents.splice (0 , 1 , 'zainab' , 'zahraa' )
console.log(myStudents)
// Exercise 1:
// Create an array called technologies that contains: 'HTML', 'CSS', 'JavaScript'
// add Python to the end of the array
// add Node to the beggening of the array
technologies = ['HTML', 'CSS', 'JavaScript']
technologies.push('pytho')
technologies.unshift('node')
console.log(technologies)

for (let oneStudents of myStudents) {

}
// Exercise 2:
// 1. Loop through your technology array
// 2. Console.log() each value normally
// 3. BONUS: Try it in another way
// 4. BONUS BONUS: Try it the third way
for (let i=0 ; i<technologies.length ; i++) {
    console.log(technologies[i])
}
// push ()
// pup ()



console.log(myStudents.includes('mejesh'))
console.log(myStudents.indexOf('ahmed'))
const sliceStudent = myStudents.slice(1 ,4)
console.log(sliceStudent)

const something = 'welcome to my soul sosceity'
const convertedToArray =something.split ('')
console.log(convertedToArray)

// convets array to string 
console.log(convertedToArray.join('-----'))

console.log(Number('45'))
console.log(String(45))
console.log(Boolean(-1))
console.log(Boolean(0))
//------------------------------------------------------------------------------------------------------------------------------
console.log('lab')


/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/
const foods = []
foods.unshift('pizza')
foods.push('cheeseburger')
console.log('Exercise 2 result:', foods);
/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

foods.unshift('taco')

console.log('Exercise 3 result:', foods);
/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

const favFood =foods[1]

console.log('Exercise 4 result:', favFood);

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/
foods.splice(2 , 0 , 'tofu');
console.log('Exercise 5 result:', foods);


/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/
foods.splice( 1 , 1 , 'sushi ', 'cupcake')


console.log('Exercise 6 result:', foods);
/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

const yummy =foods.slice(1 , 3)


console.log('Exercise 7 result:', yummy);
/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/


const soyIdx =foods.indexOf('tofu')
console.log('Exercise 8 result:', soyIdx);
/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/

allFoods =foods.join("->")

console.log('Exercise 9 result:', allFoods);
/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

const hasSoup =foods.includes('soup')

console.log('Exercise 10 result:', hasSoup);
/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const  odds = [] ;
for ( let i = 0 ; i<nums.length ; i++) {
    if (nums[i] % 2 ==1)
        odds.push(nums[i])

}

console.log('Exercise 11 result:', odds);
/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/
const fizz = [];
const buzz = [];
const fizzbuzz = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 3 === 0) {
    fizz.push(nums[i]);
  }

  if (nums[i] % 5 === 0) {
    buzz.push(nums[i]);
  }

  if (nums[i] % 3 === 0 && nums[i] % 5 === 0) {
    fizzbuzz.push(nums[i]);
  }
}

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log(' fizzbuzz:', fizzbuzz);