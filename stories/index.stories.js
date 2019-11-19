import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { FizzBuzz } from '../src/FizzBuzz.js';
import '../fizz-buzz.js';

storiesOf('fizz-buzz', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(FizzBuzz))
  .add(
    'Alternative Title',
    () => html`
      <fizz-buzz .title=${'Something else'}></fizz-buzz>
    `,
  );
