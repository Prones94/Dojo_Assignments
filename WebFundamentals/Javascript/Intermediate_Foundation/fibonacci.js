const fibonacci = num => {
  if (num <= 2) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num -2)
  }
}

console.log(fibonacci(5))