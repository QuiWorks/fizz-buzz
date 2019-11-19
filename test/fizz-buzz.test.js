import {html, fixture, expect} from '@open-wc/testing';

import '../fizz-buzz.js';

describe('FizzBuzz', () => {
  function testIncrement(el, expectedCount, expectedOutput) {
    el.shadowRoot.querySelector('button').click();
    setTimeout(() => {
      expect(el.counter).to.equal(expectedCount);
      expect(el).shadowDom.to.equal(`
      <h2>Fizz Buzz exercise Nr. ${expectedOutput}!</h2>
      <button>increment</button>
    `);
    }, 1000);

  }

  it('Basic fizz buzz works', async () => {
    const el = await fixture(html`
      <fizz-buzz></fizz-buzz>
    `);
    testIncrement(el, 2, "2");
    testIncrement(el, 3, "Fizz");
    testIncrement(el, 4, "4");
    testIncrement(el, 5, "Buzz");
  });

  it('Extra credit fizz buzz works', async () => {
    const fizz = 2;
    const buzz = 3;
    const el = await fixture(html`
      <fizz-buzz fizz="${fizz}" buzz="${buzz}"></fizz-buzz>
    `);
    testIncrement(el, 2, "Fizz");
    testIncrement(el, 3, "Buzz");
    testIncrement(el, 4, "Fizz");
    testIncrement(el, 5, "5");
  });
});
