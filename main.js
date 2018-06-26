import React from 'react'
import onInputChange from 'input.js'


class App extends React.Component {

    constructor(props){
      //properties
      super(props);
      this.props.inputId = 0
  
  
      //state
      this.state = {
  
        gridState: [
          {
          rows: 2,
          columns: 1,
          type:"cell"
          }
        ],
        
        cellValues: [{
          cellId: 0,
          cellValue: "first",
          type:"value"
        }],
        undo: [{rows: 2, columns: 1, type: "cell"},
        {cellId: 0, cellValue: "first", type:"value"}],
        redo: ["empty"],
      }



}


ReactDOM.render(<App />, document.getElementById('root'));
