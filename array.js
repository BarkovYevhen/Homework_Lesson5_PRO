const array = [];

while (true) {
  const input = prompt('Enter element (press "Cancel" to stop):');
  if (input === null) {
    break;
  }
  array.push(input);

  alert(`${array}`);
}

array.sort();

console.log(`${array}`)

array.splice(1, 3);

console.log(`${array}`);