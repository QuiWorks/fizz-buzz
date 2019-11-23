# \<fizz-buzz>

# FizzBuzz Exercise

Fizz Buzz is a simple coding exercise used for interviewing potential software developers.
The instructions for the basic  implementation of this exercise are:
- Write a web component that increments a counter when a button is clicked and displays that number
- For multiples of three display "Fizz"
- For multiples of five display "Buzz"
- For multiple of both three and five display "FizzBuzz"
- For extra credit write the exercise by using dynamic values for the multiples of Fizz, Buzz and FizzBuzz
- Write the FizzBuzz logic in the src/FizzBuzz class.
- Run `npm run start` to start a development server.
- Run `npm run test` to see if the exercise is solved.


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i fizz-buzz
```

## Usage
```html
<script type="module">
  import 'fizz-buzz/fizz-buzz.js';
</script>

<fizz-buzz></fizz-buzz>
```

## Testing using karma (if applied by author)
```bash
npm run test
```

## Testing using karma via browserstack (if applied by author)
```bash
npm run test:bs
```

## Demoing using storybook (if applied by author)
```bash
npm run storybook
```

## Linting (if applied by author)
```bash
npm run lint
```
