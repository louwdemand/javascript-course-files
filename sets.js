JavaScript Sets
A JavaScript Set is a collection of unique values.

Each value can only occur once in a Set.

The values can be of any type, primitive values or objects.

How to Create a Set
You can create a JavaScript Set by:

Passing an array to new Set()
Create an empty set and use add() to add values
The new Set() Method
Pass an array to the new Set() constructor:

Example
// Create a Set
const letters = new Set(["a","b","c"]);
Create a Set and add values:

Example
// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
Create a Set and add variables:

Example
// Create a Set
const letters = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);
The add() Method
Example
letters.add("d");
letters.add("e");
If you add equal elements, only the first will be saved:

Example
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
REMOVE ADS

Listing the Elements
You can list all Set elements (values) with a for..of loop:

Example
// Create a Set
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
for (const x of letters) {
  text += x;
}
Sets are Objects
typeof returns object:

typeof letters;      // Returns object
instanceof Set returns true:

letters instanceof Set;  // Returns true
