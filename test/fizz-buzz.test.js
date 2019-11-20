import {html, fixture, expect, elementUpdated} from '@open-wc/testing';

import '../fizz-buzz.js';

describe('FizzBuzz', () => {
  function testIncrement(el, expectedCount, expectedOutput) {
    expect(el.counter).to.equal(expectedCount);
    expect(el).shadowDom.to.equal(`
      <h2>Fizz Buzz exercise Nr. ${expectedOutput}!</h2>
      <button>increment</button>
    `);
  }

  it('Basic fizz buzz works', async () => {
    const el = await fixture(html`
      <fizz-buzz></fizz-buzz>
    `);
    const button = el.shadowRoot.querySelector('button');
    button.click();
    await elementUpdated(el);
    testIncrement(el, 2, "2");
    button.click();
    await elementUpdated(el);
    testIncrement(el, 3, "Fizz");
    button.click();
    await elementUpdated(el);
    testIncrement(el, 4, "4");
    button.click();
    await elementUpdated(el);
    testIncrement(el, 5, "Buzz");
    button.click();
    await elementUpdated(el);
    testIncrement(el, 6, "Fizz");
    button.click();
    await elementUpdated(el);
    testIncrement(el, 7, "7");
    button.click();
    await elementUpdated(el);
    testIncrement(el, 8, "8");
    button.click();
    await elementUpdated(el);
    testIncrement(el, 9, "Fizz");
    button.click();
    await elementUpdated(el);
    testIncrement(el, 10, "Buzz");
    button.click();
    await elementUpdated(el);
    testIncrement(el, 11, "11");
    button.click();
    await elementUpdated(el);
    testIncrement(el, 12, "Fizz");
    button.click();
    await elementUpdated(el);
    testIncrement(el, 13, "13");
    button.click();
    await elementUpdated(el);
    testIncrement(el, 14, "14");
    button.click();
    await elementUpdated(el);
    testIncrement(el, 15, "FizzBuzz");
  });

  it('Extra credit fizz buzz works', async () => {
    const fizz = 2;
    const buzz = 3;
    const el = await fixture(html`
      <fizz-buzz fizz="${fizz}" buzz="${buzz}"></fizz-buzz>
    `);
    const button = el.shadowRoot.querySelector('button');
    button.click();
    await elementUpdated(el);
    testIncrement(el, 2, "Fizz");
    button.click();
    await elementUpdated(el);
    testIncrement(el, 3, "Buzz");
    button.click();
    await elementUpdated(el);
    testIncrement(el, 4, "Fizz");
    button.click();
    await elementUpdated(el);
    testIncrement(el, 5, "5");
  });
});
