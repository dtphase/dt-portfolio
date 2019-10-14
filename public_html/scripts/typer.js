'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

function letters(props) {
  return;
}

var Typer = function (_React$Component) {
  _inherits(Typer, _React$Component);

  function Typer(props) {
    _classCallCheck(this, Typer);

    var _this = _possibleConstructorReturn(this, (Typer.__proto__ || Object.getPrototypeOf(Typer)).call(this, props));

    _this.state = {
      typed: '',
      toType: 'false'
    };
    return _this;
  }

  _createClass(Typer, [{
    key: 'renderText',
    value: function renderText() {
      var _this2 = this;

      return React.createElement('button', {
        onClick: function onClick() {
          return _this2.handleClick(i);
        }
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.state.toType.substring(0, 5);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'p',
        null,
        this.state.toType,
        this.renderText()
      );
    }
  }]);

  return Typer;
}(React.Component);

var domContainer = document.querySelector('#typing');
ReactDOM.render(e(Typer), domContainer);