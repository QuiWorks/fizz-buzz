# FizzBuzz Exercise

Fizz Buzz is a simple coding exercise used for interviewing and training software developers.
The instructions for this exercise are:
- Write a web component that increments a counter when a button is clicked and displays that number
- For multiples of three display "Fizz"
- For multiples of five display "Buzz"
- For multiple of both three and five display "FizzBuzz"
- For extra credit use html attributes named 'fizz' and 'buzz' to allow end users to provide the values for the multiples of Fizz and Buzz
- Write the FizzBuzz logic in the src/FizzBuzz class.



This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i
```

## Basic usage example
```html
<script type="module">
  import 'fizz-buzz/fizz-buzz.js';
</script>

<fizz-buzz></fizz-buzz>
```

## Extra credit usage esxample
```html
<script type="module">
  import 'fizz-buzz/fizz-buzz.js';
</script>

<fizz-buzz fizz="2" buzz="3"></fizz-buzz>
```

## To start a local development server run:
```bash
npm run start
```

## To test a solution to this exercise run:
```bash
npm run test
```

