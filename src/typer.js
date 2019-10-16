'use strict';



const e = React.createElement;


//Props: colour
class Character extends React.Component {
  render() {
    return <span style={{color:this.props.colour}}>{this.props.character}</span>;
  }
}


class Typer extends React.Component {
  constructor(props) {
    super(props);
    const code = `<body class="h-100">
    <div class="container-fluid h-100">
        <div class="row h-100">
                <div class="col-sm h-50" id="site">col-sm</div>
                <div class="col-sm h-50" id="code">
    `;
    var characters = [];
    var colour = 'red';
    var blocks = code.split('');
    console.log(blocks);
    for(var i=0;i<blocks.length;i++) {
      if(blocks[i] === "<") {
        colour = "gray";
        characters.push([blocks[i], colour]);
        colour = "red";
        continue;
      }
      if(blocks[i] === "=" || blocks[i] === "/") {
        let prevColour = colour;
        colour = "gray";
        characters.push([blocks[i], colour]);
        colour = prevColour;
        continue;
      }
      if(blocks[i] == " " && colour == "red") {
        colour = "orange";
      }
      if(blocks[i] == '"' && colour != "green") {
        colour = "green";
        characters.push([blocks[i], colour]);
        continue;
      }
      if(blocks[i] == "\"" && colour == "green") {
        characters.push([blocks[i], colour]);
        colour = "orange";
        continue;
      }
      if(blocks[i] == ">") {
        colour = "gray";
        characters.push([blocks[i], colour]);
        colour = "white";
        continue;
      }
      console.log(blocks[i]);
      characters.push([blocks[i], colour]);
      

    }
    console.log(characters);
    this.state = { 
        typed: [],
        toType: characters,
        value: '',
    };
  }

  componentDidMount() {
    $(document).keypress(
      function (e) {
        () => this.handleKeyPress();
      }
    );
  }

  handleClick() {
    document.getElementById("typingArea").focus(); 
  }

  handleKeyPress() {
    const typingSpeed = 5;
    let nextCharacters = this.state.toType.slice(0,typingSpeed);
    let decorated = [];
    for(var i=0;i<nextCharacters.length;i++) {
      if(nextCharacters[i][0] == "\n") {
        decorated.push(<br />);
      } else if(nextCharacters[i][0] == " ") {
        decorated.push(String.fromCharCode(160));
      } else {
        decorated.push(<span style={{color:nextCharacters[i][1]}}>{nextCharacters[i][0]}</span>);
      }
      
    }
    console.log(nextCharacters);
    this.setState({
      typed: this.state.typed.concat(decorated),
      toType: this.state.toType.slice(typingSpeed),
    });
  }

  handleChange() {

  }

  render() {
    return (
      <div>
        {this.state.typed}
        <input type="text" id="typingArea" 
        onKeyPress={() => this.handleKeyPress()}
        onChange={() => this.handleChange()}
        value={this.state.value}
        />
      </div>
    );
  }
}

const domContainer = document.querySelector('#typing');
ReactDOM.render(e(Typer), domContainer);