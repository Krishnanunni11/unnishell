// lessons.js

export const lessons = [
  {
    title: "Variables and Arithmetic",
    content: `
Lesson 1: Variables and Arithmetic
-----------------------------
In UnniLang, you can declare a variable using:

  let x = 5
  let y = x + 10

To print output, use:
  unni.say Hello
  unni.say $x
  unni.say $y

To perform operations:
  let total = x * 2 + 3
  unni.say $total
`
  },
  {
    title: "Control with Repeat",
    content: `
Lesson 2: Repeat Loops
-----------------------------
Repeat a statement multiple times:
  unni.repeat 3 { 
  unni.say Hello 
  }

You can use variables inside:

  let name = Bob
  unni.repeat 2 { 
  unni.say Hi $name 
  }
`
  },
  {
  title: "Logical and Comparison Operators",
  content: `
Lesson 3: Logical and Comparison Operators
-----------------------------
You can use logical operators like:

==  Equal
!=  Not equal
>   Greater than
<   Less than
>=  Greater than or equal
<=  Less than or equal
&&  Logical AND
||  Logical OR
!   Logical NOT

Example:

let x = 5
let y = 10
let result = (x < y) && (y == 10)
unni.say Result is $result`
},
{
  title: "If Else Usage",
  content: `
Lesson 4: If Else Usage
-----------------------------
You can use "if" " else" like:

Syntax :

if <condition> {
unni.say <output>
}
else {
unni.say "<output>"
}

Example:

let age = 20

if age >= 18 {
  unni.say "You're an adult!"
}
else {
  unni.say "You're a minor!"
}`
},
{
  title: "Boolean Usage",
  content: `
Lesson 5: Boolean usage
-----------------------------
You can use boolean like:

U can give true or false value to a variable
just like other programming languages.

In this UnniLang ucan use not only 
"true" or "false" but also
"yes" or "no"

here yes == true and no == false

Syntax :

let variable = true
let var = yes

Example:

let isRaining = true

if isRaining == true {
  unni.say "Don't forget your umbrella!"
}
else {
  unni.say "Enjoy the sunshine!"
}
`
}

];
