import React from 'react';
import ReactDOM from 'react';
import onInputChange from 'input';
import ButtonMenu from 'buttonmenu';
import onUndoAction from 'undo';
import MainTable from 'maintable';
import onRedoAction from 'redo';
import broadcast from 'broadcast';

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

      this.onInputChange = this.onInputChange.bind(this);
      this.onRowButton = this.onRowButton.bind(this);
      this.onColumnButton = this.onColumnButton.bind(this);
      this.onUndoAction = this.onUndoAction.bind(this);
      this.onRedoAction = this.onRedoAction.bind(this);
      this.MainTable = this.MainTable.bind(this);
      this.onResetAction = this.onResetAction.bind(this);
      this.broadcast = this.broadcast.bind(this);
    }

    //Pull in external functions

    broadcast;

    onInputChange;

    onUndoAction;

    onRedoAction;


    render(){
        return (
          <div>
          <table id = {this.props.tableID}>
          <tbody onload = {this.broadcast}>  
            {this.MainTable()}
          </tbody>
          </table>
          <ButtonMenu onRow = {this.onRowButton} onCol = {this.onColumnButton} undo ={this.onUndoAction} redo = {this.onRedoAction} reset = {this.onResetAction} />
          </div>
    
        );
      }

}




ReactDOM.render(<App />, document.getElementById('root'));
