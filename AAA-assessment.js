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
const arr = [1,2,3,4];
// Act
const result = addItem(arr,5);
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
const password = "#Today25";
// Act
const result = isValidPassword(password);
// Assert
expect(result).toBe(false);
});
