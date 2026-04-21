function greet(name) {
return name || "Guest";
}
test('returns Guest when name is empty', () => {
// Arrange
const name = "";
// Act
const result = greet(name);
// Assert
expect(result).toBe(Guest);
});


function toggle(value){
    return !value;
    test('toggles boolean value', () => {
// Arrange
const input = 7;
// Act
const result = toggle(value);
// Assert
expect(result).toBe(true);
});
}


function addItem(arr, item) {
arr.push(item);
return arr;
}
test('adds item to array', () => {
// Arrange
const arr = ([1,2,3,4],5);
// Act
const result = addItem(arr,item);
// Assert
expect(result).toEqual([1,2,3,4,5]);
});



function removeItem(arr, item) {
return arr.filter(i => i !== item);
}
test('removes item from array', () => {
// Arrange
const arr = [1,2,3,4,5];
// Act
const result = removeItem(arr,3);
// Assert
expect(result).toEqual([1,2,4,5]);
});



function isValidPassword(password) {
return password.length >= 6;
}
test('returns true for valid password length', () => {
// Arrange
const password = "T25";
// Act
const result = isValidPassword(password);
// Assert
expect(result).toBe(false);
});


//Password Test 
function isValidPassword(password) {
return password.length >= 6;
}
test('returns true for valid password length', () => {
// Arrange
const password = "#Todayson25";
// Act
const result = isValidPassword(password);
// Assert
expect(result).toBe(true);
});


function isValidPassword(password) {
return password.length >= 6;
}
test('returns false for invalid password length', () => {
// Arrange
const password = "#25";
// Act
const result = isValidPassword(password);
// Assert
expect(result).toBe(false);
});


function isValidPassword(password) {
return password.length >= 6;
}
test('return false for empty password', () => {
// Arrange
const password = "";
// Act
const result = isValidPassword(password);
// Assert
expect(result).toBe(false);
});


function isValidPassword(password) {
return password.length >= 6;
}
test('return true for password equal to 6', () => {
// Arrange
const password = "banana";
// Act
const result = isValidPassword(password);
// Assert
expect(result).toBe(true);
});


function isValidPassword(password) {
return password.length >= 6;
}
test('return false for password with only numbers', () => {
// Arrange
const password = "234567";
// Act
const result = isValidPassword(password);
// Assert
expect(result).toBe(false);
});


//Word Test
function containsWord(sentence, word) {
return sentence.includes(word);
}
test('return true if sentence contains word', () => {
// Arrange
const sentence = "I am a girl.";
const word ="am";
// Act
const result = containsWord(sentence, word);
// Assert
expect(result).toBe(true);
});


function containsWord(sentence, word) {
return sentence.includes(word);
}
test('return false if sentence contains word', () => {
// Arrange
const sentence = "I am a girl.";
const word = "is";
// Act
const result = containsWord(sentence, word);
// Assert
expect(result).toBe(false);
});


function containsWord(sentence, word) {
return sentence.includes(word);
}
test('return false if sentence contains numbers', () => {
// Arrange
const sentence = "I am a girl.";
const word = "88";
// Act
const result = containsWord(sentence, word);
// Assert
expect(result).toBe(false);
});


function containsWord(sentence, word) {
return sentence.includes(word);
}
test('return false if sentence is blank', () => {
// Arrange
const sentence = "";
// Act
const result = containsWord(sentence, word);
// Assert
expect(result).toBe(false);
});


function containsWord(sentence, word) {
return sentence.includes(word);
}
test('return false if sentence contains a special character', () => {
// Arrange
const sentence = "I am a girl.";
const word = "#";
// Act
const result = containsWord(sentence, word);
// Assert
expect(result).toBe(false);
});


//Add Items Test
function addItem(arr, item) {
arr.push(item);
return arr;
}
test('add item to array', () => {
// Arrange
const arr = (["pen","book","pencil"],"eraser");
// Act
const result = addItem(arr, item);
// Assert
expect(result).toBe(["pen","book","pencil","eraser"]);
});


function addItem(arr, item) {
arr.push(item);
return arr;
}
test('add item to array when array is empty', () => {
// Arrange
const arr = [];
const item = ["nike","doll shoes","jordan","heels"];
// Act
const result = addItem(arr, item);
// Assert
expect(result).toBe(["nike","doll shoes","jordan","heels"]);
});


function addItem(arr, item) {
arr.push(item);
return arr;
}
test('add item of another data type', () => {
// Arrange
const arr = (["nike","doll shoes","jordan"]);
const item = 5;
// Act
const result = addItem(arr, item);
// Assert
expect(result).toBe(["nike","doll shoes","jordan","heels", 5]);
});


function addItem(arr, item) {
arr.push(item);
return arr;
}
test('add an array as an item to an array ', () => {
// Arrange
const arr = ["nike","doll shoes","jordan"];
const item = ["Quinta", "Flower"];
// Act
const result = addItem(arr, item);
// Assert
expect(result).toBe(["nike","doll shoes","jordan","heels","Quinta", "Flower" ]);
});


function addItem(arr, item) {
arr.push(item);
return arr;
}
test('add null as an item to an array ', () => {
// Arrange
const arr = ["nike","doll shoes","jordan"];
const item = null;
// Act
const result = addItem(arr, item);
// Assert
expect(result).toBe(["nike","doll shoes","jordan","heels",null ]);
});