'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

//Props: colour

var Character = function (_React$Component) {
  _inherits(Character, _React$Component);

  function Character() {
    _classCallCheck(this, Character);

    return _possibleConstructorReturn(this, (Character.__proto__ || Object.getPrototypeOf(Character)).apply(this, arguments));
  }

  _createClass(Character, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'span',
        { style: { color: this.props.colour } },
        this.props.character
      );
    }
  }]);

  return Character;
}(React.Component);

var Typer = function (_React$Component2) {
  _inherits(Typer, _React$Component2);

  function Typer(props) {
    _classCallCheck(this, Typer);

    var _this2 = _possibleConstructorReturn(this, (Typer.__proto__ || Object.getPrototypeOf(Typer)).call(this, props));

    var code = '<body class="h-100">\n    <div class="container-fluid h-100">\n        <div class="row h-100">\n                <div class="col-sm h-50" id="site">col-sm</div>\n                <div class="col-sm h-50" id="code">\n    ';
    var characters = [];
    var colour = 'red';
    var blocks = code.split('');
    console.log(blocks);
    for (var i = 0; i < blocks.length; i++) {
      if (blocks[i] === "<") {
        colour = "gray";
        characters.push([blocks[i], colour]);
        colour = "red";
        continue;
      }
      if (blocks[i] === "=" || blocks[i] === "/") {
        var prevColour = colour;
        colour = "gray";
        characters.push([blocks[i], colour]);
        colour = prevColour;
        continue;
      }
      if (blocks[i] == " " && colour == "red") {
        colour = "orange";
      }
      if (blocks[i] == '"' && colour != "green") {
        colour = "green";
        characters.push([blocks[i], colour]);
        continue;
      }
      if (blocks[i] == "\"" && colour == "green") {
        characters.push([blocks[i], colour]);
        colour = "orange";
        continue;
      }
      if (blocks[i] == ">") {
        colour = "gray";
        characters.push([blocks[i], colour]);
        colour = "white";
        continue;
      }
      console.log(blocks[i]);
      characters.push([blocks[i], colour]);
    }
    console.log(characters);
    _this2.state = {
      typed: [],
      toType: characters,
      value: ''
    };
    return _this2;
  }

  _createClass(Typer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(document).keypress(function (e) {
        var _this3 = this;

        (function () {
          return _this3.handleKeyPress();
        });
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      document.getElementById("typingArea").focus();
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress() {
      var typingSpeed = 5;
      var nextCharacters = this.state.toType.slice(0, typingSpeed);
      var decorated = [];
      for (var i = 0; i < nextCharacters.length; i++) {
        if (nextCharacters[i][0] == "\n") {
          decorated.push(React.createElement('br', null));
        } else if (nextCharacters[i][0] == " ") {
          decorated.push(String.fromCharCode(160));
        } else {
          decorated.push(React.createElement(
            'span',
            { style: { color: nextCharacters[i][1] } },
            nextCharacters[i][0]
          ));
        }
      }
      console.log(nextCharacters);
      this.setState({
        typed: this.state.typed.concat(decorated),
        toType: this.state.toType.slice(typingSpeed)
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange() {}
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return React.createElement(
        'div',
        null,
        this.state.typed,
        React.createElement('input', { type: 'text', id: 'typingArea',
          onKeyPress: function onKeyPress() {
            return _this4.handleKeyPress();
          },
          onChange: function onChange() {
            return _this4.handleChange();
          },
          value: this.state.value
        })
      );
    }
  }]);

  return Typer;
}(React.Component);

var domContainer = document.querySelector('#typing');
ReactDOM.render(e(Typer), domContainer);