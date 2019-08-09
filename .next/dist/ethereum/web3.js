'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new _web2.default(window.web3.currentProvider);
    console.log("done");
} else {
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/73d445e3cb214218b21a3386a5149036');
    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwiY29uc29sZSIsImxvZyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztBQUNBLElBQUksWUFBSjtBQUNBLElBQUcsT0FBTyxBQUFQLFdBQWdCLEFBQWhCLGVBQThCLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQXhELGFBQW9FLEFBQ2hFO1dBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDQTtZQUFRLEFBQVIsSUFBWSxBQUFaLEFBQ0g7QUFIRCxPQUdLLEFBQ0Q7UUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFDYixBQURhLEFBQWpCLEFBR0E7V0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0g7QUFFRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3RoL0Rlc2t0b3AvYmxvY2tjaGFpbi9raWNrc3RhcnQifQ==