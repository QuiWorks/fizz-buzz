import { html, css, LitElement } from 'lit-element';

export class FizzBuzz extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
      }
    `;
  }

  static get properties() {
    return {
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.counter = 1;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>Fizz Buzz exercise Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
