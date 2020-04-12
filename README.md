# \<fizz-buzz>

Fizz Buzz is a simple programming exercise.


- Write a web component that increments a counter when a button is clicked and displays that number.
- For multiples of three display `Fizz`.
- For multiples of five display `Buzz`.
- For multiple of both three and five display `FizzBuzz`.
- For extra credit use different dynamic values for Fizz and Buzz that are set using html attributes named `fizz` and `buzz`.

## Basic Usage
```html
<script type="module" src="fizz-buzz/fizz-buzz.js"></script>
<fizz-buzz></fizz-buzz>
```

## Extra credit Usage
```html
<script type="module" src="fizz-buzz/fizz-buzz.js"></script>
<fizz-buzz fizz="2" buzz="3"></fizz-buzz>
```

# Steps to complete the exercise:

## Install dependencies
```bash
npm i
```

## Start the development server
```bash
npm run start
```

## Write the code
```bash
src/FizzBuzz.js
```

## test the code
```bash
npm run test
```

## Requirements
- nodejs version 8 and up
- npm version 6 and up

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.
