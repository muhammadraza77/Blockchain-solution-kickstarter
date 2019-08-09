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

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../../routes');

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _CampaigForm = require('../../components/CampaigForm');

var _CampaigForm2 = _interopRequireDefault(_CampaigForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\th\\Desktop\\blockchain\\kickstart\\pages\\campaign\\show.js?entry';

// import {Link} from '../../routes';

var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                balance = _props.balance,
                manager = _props.manager,
                minimumContribution = _props.minimumContribution,
                requestsCount = _props.requestsCount,
                approversCount = _props.approversCount;

            var items = [{
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign and can create requests to withdraw money',
                style: { overflowWrap: 'break-word' },
                color: 'teal'
            }, {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute at least this much wei to become an approver',
                color: 'teal'
            }, {
                header: requestsCount,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers',
                color: 'teal'
            }, {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donated to this campaign',
                color: 'teal'
            }, {
                header: _web2.default.utils.fromWei(balance + '', 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campaign has left to spend.',
                color: 'teal'
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { itemsPerRow: 2, items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, this.props.minimumContribution), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, _react2.default.createElement(_CampaigForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            })), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaign/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, 'View Requests')))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                // const address=argument.query.address;

                                // const contract=Campaign(address);
                                // const summary= await contract.methods.getSummary().call();
                                campaign = (0, _campaign2.default)(props.query.address);
                                _context.next = 3;
                                return campaign.methods.getSummary().call();

                            case 3:
                                summary = _context.sent;
                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    minimumContribution: summary[0].toNumber(),
                                    balance: summary[1].toString(),
                                    requestsCount: summary[2].toNumber(),
                                    approversCount: summary[3].toNumber(),
                                    manager: summary[4]
                                });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnblxcc2hvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIndlYjMiLCJDYXJkIiwiQnV0dG9uIiwiR3JpZCIsIkxheW91dCIsIkxpbmsiLCJDYW1wYWlnbiIsIkNhbXBmb3JtIiwiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJiYWxhbmNlIiwibWFuYWdlciIsIm1pbmltdW1Db250cmlidXRpb24iLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwiY29sb3IiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsInRvTnVtYmVyIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQU87Ozs7QUFDZCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFPLEFBQVE7O0FBQ3hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFRLEFBQVc7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWM7Ozs7Ozs7O0FBQ3JCOztJLEFBQ007Ozs7Ozs7Ozs7O3NDQXFCWTt5QkFPTixLQVBNLEFBT0Q7Z0JBUEMsQUFFUixpQkFGUSxBQUVSO2dCQUZRLEFBR1IsaUJBSFEsQUFHUjtnQkFIUSxBQUlSLDZCQUpRLEFBSVI7Z0JBSlEsQUFLUix1QkFMUSxBQUtSO2dCQUxRLEFBTVIsd0JBTlEsQUFNUixBQUdGOztnQkFBTTt3QkFDSixBQUNVLEFBQ1I7c0JBRkYsQUFFUSxBQUNOOzZCQUhGLEFBSUksQUFDRjt1QkFBTyxFQUFFLGNBTFgsQUFLUyxBQUFnQixBQUN2Qjt1QkFQVSxBQUNaLEFBTVM7QUFOVCxBQUNFLGFBRlU7d0JBU1osQUFDVSxBQUNSO3NCQUZGLEFBRVEsQUFDTjs2QkFIRixBQUlJLEFBQ0E7dUJBZFEsQUFTWixBQUtXO0FBTFgsQUFDRTt3QkFNRixBQUNVLEFBQ1I7c0JBRkYsQUFFUSxBQUNOOzZCQUhGLEFBSUksQUFDQTt1QkFyQlEsQUFnQlosQUFLVztBQUxYLEFBQ0U7d0JBTUYsQUFDVSxBQUNSO3NCQUZGLEFBRVEsQUFDTjs2QkFIRixBQUlJLEFBQ0E7dUJBNUJRLEFBdUJaLEFBS1c7QUFMWCxBQUNFO3dCQU9RLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBUSxVQUFuQixBQUEyQixJQURyQyxBQUNVLEFBQStCLEFBQ3ZDO3NCQUZGLEFBRVEsQUFDTjs2QkFIRixBQUlJLEFBQ0E7dUJBbkNOLEFBQWMsQUE4QlosQUFLVyxBQUliO0FBVEUsQUFDRTs7aURBUUcsQUFBQyxzQkFBRCxBQUFNLFNBQU0sYUFBWixBQUF5QixHQUFHLE9BQTVCLEFBQW1DOzhCQUFuQztnQ0FBUCxBQUFPLEFBQ1I7QUFEUTthQUFBOzs7O2lDQUdILEFBQ0o7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFLO0FBQUw7QUFBQSxvQkFBSyxBQUFLLE1BRGQsQUFDSSxBQUFnQixBQUNoQixzQ0FBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNLO0FBREw7b0JBREosQUFDSSxBQUNLLEFBQUssQUFHVixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyx1Q0FBUyxTQUFTLEtBQUEsQUFBSyxNQUF4QixBQUE4Qjs4QkFBOUI7Z0NBTlIsQUFLSSxBQUNJLEFBR0o7QUFISTtpQ0FHSCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDQTtBQURBO0FBQUEsK0JBQ0EsQUFBQyw4QkFBSyxzQkFBb0IsS0FBQSxBQUFLLE1BQXpCLEFBQStCLFVBQXJDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQSxBQUFDLHlDQUFPLFNBQVI7OEJBQUE7Z0NBQUE7QUFBQTtlQWhCcEIsQUFDSSxBQUVJLEFBU0ksQUFDSSxBQUNBLEFBQ0ksQUFDQSxBQVl2Qjs7Ozs7aUgsQUFuRzRCOzs7OztpQ0FDekI7QUFFQTs7QUFDQTtBQUNNO0EsMkNBQVcsd0JBQVMsTUFBQSxBQUFNLE0sQUFBZixBQUFxQjs7dUNBRWhCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGEsQUFBakIsQUFBOEI7O2lDQUE5QztBOzs2Q0FFTyxNQUFBLEFBQU0sTUFEWixBQUNrQixBQUNyQjt5REFBcUIsUUFBQSxBQUFRLEdBRjFCLEFBRWtCLEFBQVcsQUFDaEM7NkNBQVMsUUFBQSxBQUFRLEdBSGQsQUFHTSxBQUFXLEFBQ3BCO21EQUFlLFFBQUEsQUFBUSxHQUpwQixBQUlZLEFBQVcsQUFDMUI7b0RBQWdCLFFBQUEsQUFBUSxHQUxyQixBQUthLEFBQVcsQUFDM0I7NkNBQVMsUSxBQU5OLEFBTU0sQUFBUTtBQU5kLEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2RlosQSxBQXhHMkI7O2tCQXdHM0IsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3RoL0Rlc2t0b3AvYmxvY2tjaGFpbi9raWNrc3RhcnQifQ==