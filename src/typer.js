'use strict';



const e = React.createElement;


class Typer extends React.Component {
  constructor(props) {
    super(props);
    const code = `<h1>Dtphase's Portfolio</h1>
    <p>dtphase</p>
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
        siteCode: [],
    };
  }

  handleClick() {
    document.getElementById("typingArea").focus(); 
  }

  updateSite() {

  }

  handleKeyPress() {
    const typingSpeed = 5;
    let nextCharacters = this.state.toType.slice(0,typingSpeed);
    let decorated = [];
    let lineNumber = 0;
    for(var i=0;i<nextCharacters.length;i++) {
      if(nextCharacters[i][0] == "\n") {
        lineNumber++;
        this.updateSite(lineNumber);
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
      <div className="row h-100">
        <div className="col-sm h-50" id="site">
          abc {this.state.siteCode}
        </div>
        <div className="col-sm h-50" id="code">
          <div className="row" id="tab_bar">
            <div id="tab"><span className="tuscany">&lt;&gt;</span> <strong>index.php</strong> &nbsp;<a href="#" data-toggle="tooltip" title="Skip animation">x</a></div>
          </div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">public_html</a></li>
              <li className="breadcrumb-item"><a href="#"><span className="tuscany">&lt;&gt;</span> index.html</a></li>
              <li className="breadcrumb-item active" aria-current="page">Library</li>
            </ol>
          </nav>
          <div id="typing">
            abc
            {this.state.typed}
            <input type="text" id="typingArea" 
            onKeyPress={() => this.handleKeyPress()}
            onChange={() => this.handleChange()}
            value={this.state.value}
            />
          </div>
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(Typer), domContainer);