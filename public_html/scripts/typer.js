'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var Typer = function (_React$Component) {
  _inherits(Typer, _React$Component);

  function Typer(props) {
    _classCallCheck(this, Typer);

    var _this = _possibleConstructorReturn(this, (Typer.__proto__ || Object.getPrototypeOf(Typer)).call(this, props));

    var code = '<h1>Dtphase\'s Portfolio</h1>\n    <p>dtphase</p>\n    ';
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
    _this.state = {
      typed: [],
      toType: characters,
      value: '',
      siteCode: []
    };
    return _this;
  }

  _createClass(Typer, [{
    key: 'handleClick',
    value: function handleClick() {
      document.getElementById("typingArea").focus();
    }
  }, {
    key: 'updateSite',
    value: function updateSite() {}
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress() {
      var typingSpeed = 5;
      var nextCharacters = this.state.toType.slice(0, typingSpeed);
      var decorated = [];
      var lineNumber = 0;
      for (var i = 0; i < nextCharacters.length; i++) {
        if (nextCharacters[i][0] == "\n") {
          lineNumber++;
          this.updateSite(lineNumber);
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
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'row h-100' },
        React.createElement(
          'div',
          { className: 'col-sm h-50', id: 'site' },
          'abc ',
          this.state.siteCode
        ),
        React.createElement(
          'div',
          { className: 'col-sm h-50', id: 'code' },
          React.createElement(
            'div',
            { className: 'row', id: 'tab_bar' },
            React.createElement(
              'div',
              { id: 'tab' },
              React.createElement(
                'span',
                { className: 'tuscany' },
                '<>'
              ),
              ' ',
              React.createElement(
                'strong',
                null,
                'index.php'
              ),
              ' \xA0',
              React.createElement(
                'a',
                { href: '#', 'data-toggle': 'tooltip', title: 'Skip animation' },
                'x'
              )
            )
          ),
          React.createElement(
            'nav',
            { 'aria-label': 'breadcrumb' },
            React.createElement(
              'ol',
              { className: 'breadcrumb' },
              React.createElement(
                'li',
                { className: 'breadcrumb-item' },
                React.createElement(
                  'a',
                  { href: '#' },
                  'public_html'
                )
              ),
              React.createElement(
                'li',
                { className: 'breadcrumb-item' },
                React.createElement(
                  'a',
                  { href: '#' },
                  React.createElement(
                    'span',
                    { className: 'tuscany' },
                    '<>'
                  ),
                  ' index.html'
                )
              ),
              React.createElement(
                'li',
                { className: 'breadcrumb-item active', 'aria-current': 'page' },
                'Library'
              )
            )
          ),
          React.createElement(
            'div',
            { id: 'typing' },
            'abc',
            this.state.typed,
            React.createElement('input', { type: 'text', id: 'typingArea',
              onKeyPress: function onKeyPress() {
                return _this2.handleKeyPress();
              },
              onChange: function onChange() {
                return _this2.handleChange();
              },
              value: this.state.value
            })
          )
        )
      );
    }
  }]);

  return Typer;
}(React.Component);

var domContainer = document.querySelector('#app');
ReactDOM.render(e(Typer), domContainer);