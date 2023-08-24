"use strict";

let bro = {
  _name: 'andy',
  _nameCase: [
    { id: 1, name: 'Max' },
    { id: 2, name: 'neMax '},
  ],
  setName(value) {
    this._nameCase[0].name=value;
  },
  getName() {
    alert(this._nameCase[0].name);
  },
}
bro.getName();
bro.setName('ostap');
bro.getName()
