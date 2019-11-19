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
      output: { type: String },
      fizz: { type: Number },
      buzz: { type: Number }
    };
  }

  constructor() {
    super();
    this.counter = 1;
    this.fizz = 3;
    this.buzz = 5;
    this._setOutput()
  }

  __increment() {
    this.counter += 1;
    this._setOutput();
  }

  _setOutput() {
    if (this._isFizzBuzz()) {
        this.output = "FizzBuzz";
    } else if (this._isFizz()) {
        this.output = "Fizz";
    } else if (this._isBuzz()) {
        this.output = "Buzz";
    } else {
        this.output = this.counter;
    }
  }

  _isFizz(){
    return (this.counter % this.fizz) === 0;
  }

   _isBuzz(){
    return this.counter % this.buzz === 0;
  }

  _isFizzBuzz(){
    return this._isFizz() && this._isBuzz();
  }

  render() {
    return html`
      <h2>Fizz Buzz exercise Nr. ${this.output}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
