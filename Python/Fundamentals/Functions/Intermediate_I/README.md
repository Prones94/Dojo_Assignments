# Assignment: Functions Intermediate I

## Objectives
- Practice using default parameter values
- Practice passing in named arguments
- Become familiar with Python's random module

## Goal of the assignment
Write a single function, `randint()` that takes up to 2 arguments
- If no arguments are provided, the function should return a random integer between 0 and 100
- If only a max number is provided, the function should return a random integer between 0 and the max number
- If only a min numberis provided, the function should return a random integer between the min number and 100
- If both a min and max number are provided, the function should return a random integer between those 2 values

### Couple of Notes!
- `random.random()` returns a random floating number between 0.000 and 1.000
- `random.random() * 50` returns a random floating number between 0.000 and 50
- `random.random() * 25 + 10` returns a random floating number between 10.000 and 35.000
- `round(num)` returns the rounded integer value of num
