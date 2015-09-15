//import {computedFrom} from 'aurelia-framework';

export class Litmus{
  canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}
