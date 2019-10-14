'use strict';

const e = React.createElement;

function letters(props) {
    return ;
}

class Typer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        typed: '',
        toType: 'false',
    };
  }

  

  renderText() {
    return (
      <button
        onClick={() => this.handleClick(i)}
      />
    );
  }

  handleClick() {
    this.state.toType.substring(0,5);

  }

  render() {
    return (
      <p>
        {this.state.toType}
        {this.renderText()}
      </p>
    );
  }
}

const domContainer = document.querySelector('#typing');
ReactDOM.render(e(Typer), domContainer);