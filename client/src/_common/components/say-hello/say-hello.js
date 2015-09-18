import {bindable} from 'aurelia-framework';

export class SayHelloCustomElement {
    @bindable pattern;

    speak(){
        alert(`Hello ${reverse(this.to)}!`);
    }
}

function reverse(s) {
  return s.split('').reverse().join('');
}
