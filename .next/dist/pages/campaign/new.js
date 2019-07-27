'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\th\\Desktop\\blockchain\\kickstart\\pages\\campaign\\new.js?entry';


var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            minContribution: '',
            errmsg: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errmsg: '' });
                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return _factory2.default.methods.createCampaign(_this.state.minContribution).send({ from: accounts[0], gas: '1000000' }, function (err, data) {
                                    console.log("method", err);
                                });

                            case 8:

                                console.log("**try");
                                _routes.Router.pushRoute('/');
                                _context.next = 16;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](2);

                                console.log("**catch");
                                // console.log(err);
                                _this.setState({ errmsg: _context.t0.message });

                            case 16:
                                console.log("**exit");
                                _this.setState({ loading: false });

                            case 18:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 12]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, 'Create New Campaigns !'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errmsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, { label: 'Wei', labelPosition: 'right',
                value: this.state.minContribution,
                onChange: function onChange(event) {
                    _this3.setState({ minContribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Opps!', content: this.state.errmsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'Create !')));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;

// import React, { Component } from 'react';
// import { Form, Button, Input, Message } from 'semantic-ui-react';
// import Layout from '../../components/Layout';
// import factory from '../../ethereum/factory';
// import web3 from '../../ethereum/web3';
// // import { Router } from '../../routes';

// class CampaignNew extends Component {
//   state = {
//     minimumContribution: '',
//     errorMessage: '',
//     loading: false
//   };

//   onSubmit = async event => {
//     event.preventDefault();

//     this.setState({ loading: true, errorMessage: '' });

//     try {
//       const accounts = await web3.eth.getAccounts();
//       await factory.methods
//         .createCampaign(this.state.minimumContribution)
//         .send({
//           from: accounts[0]
//         });

//     //   Router.pushRoute('/');
//     } catch (err) {
//       this.setState({ errorMessage: err.message });
//     }

//     this.setState({ loading: false });
//   };

//   render() {
//     return (
//       <Layout>
//         <h3>Create a Campaign</h3>

//         <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
//           <Form.Field>
//             <label>Minimum Contribution</label>
//             <Input
//               label="wei"
//               labelPosition="right"
//               value={this.state.minimumContribution}
//               onChange={event =>
//                 this.setState({ minimumContribution: event.target.value })}
//             />
//           </Form.Field>

//           <Message error header="Oops!" content={this.state.errorMessage} />
//           <Button loading={this.state.loading} primary>
//             Create!
//           </Button>
//         </Form>
//       </Layout>
//     );
//   }
// }

// export default CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnblxcbmV3LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIndlYjMiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiTGF5b3V0IiwiUm91dGVyIiwiQ2FtcGFpZ25OZXciLCJzdGF0ZSIsIm1pbkNvbnRyaWJ1dGlvbiIsImVycm1zZyIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlQ2FtcGFpZ24iLCJzZW5kIiwiZnJvbSIsImdhcyIsImVyciIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBTyxBQUFhOzs7O0FBR3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQUssQUFBTyxBQUFNOztBQUMxQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFhOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7OzBOLEFBQ0Y7NkJBQU0sQUFDYyxBQUNoQjtvQkFGRSxBQUVLLEFBQ1A7cUIsQUFIRSxBQUdNO0FBSE4sQUFDRixpQixBQUlKO2lHQUFTLGlCQUFBLEFBQU8sT0FBUDtvQkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDTDtzQ0FBQSxBQUFNLEFBQ047c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFTLE1BQUssUUFGdkIsQUFFTCxBQUFjLEFBQXFCO2dEQUY5QjtnREFBQTt1Q0FLcUIsY0FBQSxBQUFLLElBTDFCLEFBS3FCLEFBQVM7O2lDQUF6QjtBQUxMLG9EQUFBO2dEQUFBO3lEQU1LLEFBQVEsUUFBUixBQUFnQixlQUFlLE1BQUEsQUFBSyxNQUFwQyxBQUEwQyxpQkFBMUMsQUFBMkQsS0FBSyxFQUFDLE1BQU0sU0FBUCxBQUFPLEFBQVMsSUFBRyxLQUFuRixBQUFnRSxBQUF1QixhQUFXLFVBQUEsQUFBQyxLQUFELEFBQUssTUFBTyxBQUNoSDs0Q0FBQSxBQUFRLElBQVIsQUFBWSxVQUFaLEFBQXFCLEFBQ3hCO0FBUkEsQUFNSyxpQ0FBQTs7aUNBSU47O3dDQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7K0NBQUEsQUFBTyxVQVhOLEFBV0QsQUFBaUI7Z0RBWGhCO0FBQUE7O2lDQUFBO2dEQUFBO2dFQWFEOzt3Q0FBQSxBQUFRLElBQVIsQUFBWSxBQUNaO0FBQ0E7c0NBQUEsQUFBSyxTQUFTLEVBQUMsUUFBTyxZQWZyQixBQWVELEFBQWMsQUFBWTs7aUNBRTlCO3dDQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FsQlYsQUFrQkwsQUFBYyxBQUFTOztpQ0FsQmxCO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBb0JEO3lCQUNKOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSwyQ0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7OEJBQW5EO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSx5Q0FBQSxBQUFDLHdDQUFNLE9BQVAsQUFBYSxPQUFNLGVBQW5CLEFBQWlDLEFBQ3pCO3VCQUFPLEtBQUEsQUFBSyxNQURwQixBQUMwQixBQUNsQjswQkFBVSx5QkFBTyxBQUFDOzJCQUFBLEFBQUssU0FBUyxFQUFDLGlCQUFnQixNQUFBLEFBQU0sT0FBckMsQUFBYyxBQUE4QixBQUFRO0FBRjlFOzs4QkFBQTtnQ0FIUixBQUNJLEFBRUksQUFLSjtBQUxJO2lDQUtKLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDs4QkFBbEQ7Z0NBUkosQUFRSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DOzhCQUFwQztnQ0FBQTtBQUFBO2VBWlosQUFDSSxBQUVJLEFBU0ksQUFLZjs7Ozs7QUFHTCxBLEFBL0MwQjs7a0JBK0MxQixBQUFlOztBQUdmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy90aC9EZXNrdG9wL2Jsb2NrY2hhaW4va2lja3N0YXJ0In0=