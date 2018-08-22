'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _product = require('./product.jsx');

var _product2 = _interopRequireDefault(_product);

var _reactJsPagination = require('react-js-pagination');

var _reactJsPagination2 = _interopRequireDefault(_reactJsPagination);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PAGE_SIZE = 20;

var ProductList = function (_React$Component) {
  _inherits(ProductList, _React$Component);

  function ProductList(props) {
    _classCallCheck(this, ProductList);

    var _this = _possibleConstructorReturn(this, (ProductList.__proto__ || Object.getPrototypeOf(ProductList)).call(this, props));

    _this.state = {
      page: 1
    };

    _this.handleSelectPage = _this.handleSelectPage.bind(_this);
    return _this;
  }

  _createClass(ProductList, [{
    key: 'handleSelectPage',
    value: function handleSelectPage(pageNumber) {
      console.log('active page is ' + pageNumber);
      this.setState({ page: pageNumber });
    }
  }, {
    key: 'render',
    value: function render() {
      var page = this.state.page;

      var products = this.props.products.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          {
            className: 'text-right',
            xs: 12 },
          _react2.default.createElement(_reactJsPagination2.default, {
            activePage: this.state.page,
            itemsCountPerPage: 20,
            totalItemsCount: this.props.products.length,
            pageRangeDisplayed: Math.ceil(this.props.products.length / PAGE_SIZE),
            onChange: this.handleSelectPage })
        ),
        _react2.default.createElement(_reactBootstrap.Clearfix, null),
        products.map(function (product) {
          return _react2.default.createElement(_product2.default, {
            key: product.id,
            product: product });
        }),
        _react2.default.createElement(
          _reactBootstrap.Col,
          {
            className: 'text-center',
            xs: 12 },
          _react2.default.createElement(_reactJsPagination2.default, {
            activePage: this.state.page,
            itemsCountPerPage: 20,
            totalItemsCount: this.props.products.length,
            pageRangeDisplayed: Math.ceil(this.props.products.length / PAGE_SIZE),
            onChange: this.handleSelectPage })
        )
      );
    }
  }]);

  return ProductList;
}(_react2.default.Component);

ProductList.propTypes = {
  products: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};

ProductList.defaultProps = {
  products: []
};

exports.default = ProductList;
//# sourceMappingURL=productList.js.map
