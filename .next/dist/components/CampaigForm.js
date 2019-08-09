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

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('./Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\th\\Desktop\\blockchain\\kickstart\\components\\CampaigForm.js';


var CampaignForm = function (_Component) {
    (0, _inherits3.default)(CampaignForm, _Component);

    function CampaignForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignForm.__proto__ || (0, _getPrototypeOf2.default)(CampaignForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            errorMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var contract, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errorMessage: '' });
                                _context.prev = 2;

                                console.log("****");
                                contract = (0, _campaign2.default)(_this.props.address);
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context.sent;
                                _context.next = 10;
                                return contract.methods.contribute().send({
                                    from: accounts[0], value: _web2.default.utils.toWei(_this.state.value, 'ether') });

                            case 10:

                                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);
                                _context.next = 17;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });
                                console.log(_this.state.errorMessage, '************');

                            case 17:

                                _this.setState({ loading: false, value: '' });

                            case 18:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 13]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignForm, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'Contribute to Campaign'), _react2.default.createElement(_semanticUiReact.Input, { label: 'Ether', labelPosition: 'right', value: this.state.value,
                onChange: function onChange(event) {
                    _this3.setState({ value: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Opps!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, 'Contribute'));
        }
    }]);

    return CampaignForm;
}(_react.Component);

exports.default = CampaignForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENhbXBhaWdGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIkxheW91dCIsIkNhbXBhaWduIiwid2ViMyIsIlJvdXRlciIsIkNhbXBhaWduRm9ybSIsInN0YXRlIiwidmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29udHJhY3QiLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBUSxBQUFLLEFBQU8sQUFBTTs7QUFDMUIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFhOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7OzROLEFBQ0Y7bUJBQU0sQUFDSyxBQUNQOzBCQUZFLEFBRVcsQUFDYjtxQixBQUhFLEFBR007QUFITixBQUNGLGlCLEFBS0o7aUdBQVMsaUJBQUEsQUFBTyxPQUFQOzhCQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNMO3NDQUFBLEFBQU0sQUFDTjtzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUYxQixBQUVMLEFBQWMsQUFBK0I7Z0RBRXpDOzt3Q0FBQSxBQUFRLElBQVIsQUFBWSxBQUNOO0FBTEwsMkNBS2Msd0JBQVMsTUFBQSxBQUFLLE1BTDVCLEFBS2MsQUFBb0I7Z0RBTGxDO3VDQU1vQixjQUFBLEFBQUssSUFOekIsQUFNb0IsQUFBUzs7aUNBQXhCO0FBTkwsb0RBQUE7Z0RBQUE7dUNBT0ssU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEI7MENBQzNCLFNBRGdDLEFBQ2hDLEFBQVMsRUFEdUIsQUFDckMsRUFBaUIsT0FBTSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sTUFBQSxBQUFLLE1BQXRCLEFBQTRCLE9BUnRELEFBT0ssQUFBbUMsQUFDZCxBQUFrQzs7aUNBRTdEOzsrQ0FBQSxBQUFPLDZCQUEyQixNQUFBLEFBQUssTUFWdEMsQUFVRCxBQUE2QztnREFWNUM7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBWUQ7O3NDQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFBOUIsQUFBYyxBQUFvQixBQUNsQzt3Q0FBQSxBQUFRLElBQUksTUFBQSxBQUFLLE1BQWpCLEFBQXVCLGNBYnRCLEFBYUQsQUFBb0M7O2lDQUd4Qzs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE9BQU8sT0FoQjNCLEFBZ0JMLEFBQWMsQUFBeUI7O2lDQWhCbEM7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0FvQkQ7eUJBQ0o7O21DQUVJLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsMkNBQUEsQUFBQyx3Q0FBTSxPQUFQLEFBQWEsU0FBUSxlQUFyQixBQUFtQyxTQUFRLE9BQU8sS0FBQSxBQUFLLE1BQXZELEFBQTZELEFBQ3JEOzBCQUFVLHlCQUFPLEFBQUM7MkJBQUEsQUFBSyxTQUFTLEVBQUMsT0FBTSxNQUFBLEFBQU0sT0FBM0IsQUFBYyxBQUFvQixBQUFRO0FBRHBFOzhCQUFBO2dDQUhSLEFBQ0ksQUFFSSxBQUdKO0FBSEk7aUNBR0osQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEOzhCQUFsRDtnQ0FOSixBQU1JLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7OEJBQXBDO2dDQUFBO0FBQUE7ZUFUUixBQUVJLEFBT0ksQUFJWDs7Ozs7QUFHTCxBLEFBNUMyQjs7a0JBNEMzQixBQUFlIiwiZmlsZSI6IkNhbXBhaWdGb3JtLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3RoL0Rlc2t0b3AvYmxvY2tjaGFpbi9raWNrc3RhcnQifQ==