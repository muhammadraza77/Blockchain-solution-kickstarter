'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Campaign = require('./build/Campaign.json');

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import web3 from './web3';
// import camp from './build/Campaign.json';

// const instance = (addr)=>{
//     new web3.eth.Contract(
//         JSON.parse(camp.interface),
//         addr
//         );
// }


// export default instance;

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxjYW1wYWlnbi5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiQ2FtcGFpZ24iLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7OztBQWNBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWMsQUFFckI7Ozs7OztBQWpCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSUE7O2tCQUtlLG1CQUFXLEFBQ3hCO1NBQU8sSUFBSSxjQUFBLEFBQUssSUFBVCxBQUFhLFNBQVMsS0FBQSxBQUFLLE1BQU0sbUJBQWpDLEFBQXNCLEFBQW9CLFlBQWpELEFBQU8sQUFBc0QsQUFDOUQ7QUFGRCIsImZpbGUiOiJjYW1wYWlnbi5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy90aC9EZXNrdG9wL2Jsb2NrY2hhaW4va2lja3N0YXJ0In0=