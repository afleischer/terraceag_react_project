import React from 'react';
import ReactDOM from 'react-dom';


//Components
import MainTable from './app/components/input_table/maintable';
import ButtonMenu from './app/components/button_menu/buttonmenu';

//App Logic
import onUndoAction from './app/undo';
import onRedoAction from './app/redo';
import onInputChange from './app/input';

//Session logic
import broadcast from './services/session/broadcast';

function foo() {
  console.log("bar");
}

/*
let MainTableF = new MainTable;
let onUndoActionF = new onUndoAction;
let onRedoActionF = new onRedoAction;
let onInputChangeF = new onInputChange;
let broadcastF = new broadcast;
let fooF = new foo;
*/

export default class App extends React.Component {

    constructor(props){
      //properties
      super(props);
      //this.props.inputId = 0;
        //Bind "this" to functions
      //this.foo = this.foo.bind(this);
      this.onInputChange = this.onInputChange.bind(this);
      this.onRowButton = this.onRowButton.bind(this);
      this.onColumnButton = this.onColumnButton.bind(this);
      this.onUndoAction = this.onUndoAction.bind(this);
      this.onRedoAction = this.onRedoAction.bind(this);
      this.MainTable = this.MainTable.bind(this);
      this.onResetAction = this.onResetAction.bind(this);
      this.broadcast = this.broadcast.bind(this);
  
  
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
  
    //Pull in external functions

//MainTable;
/*
 onUndoActionF = new onUndoAction;
 onRedoActionF = new onRedoAction;
 onInputChangeF = new onInputChange;
 broadcastF = new broadcast;
 fooF = new foo;
 */

 /*
    fooF;

    broadcastF;

    onInputChangeF;

    onUndoActionF;

    onRedoActionF;

    MainTableF;
*/ 

      MainTable(){
        MainTable;
      }

      broadcast(){
        broadcast;
      }

      onInputChange(){
        onInputChange;
      }

      onUndoAction(){
        onUndoAction;
      }

        onRedoAction(){
          onRedoAction;
        }

    /*
UNSAFE_componentWillMount(){
    foo(){
      fooF;
    }
    broadcastF;

    onInputChangeF;

    onUndoActionF;

    onRedoActionF;

    MainTableF;
}
*/


    render(){
        return (
          <div>
          <table id = {this.props.tableID}>
          <tbody onload = {this.broadcast}>  
            {this.MainTableF}
          </tbody>
          </table>
          <ButtonMenu onRow = {this.onRowButton} onCol = {this.onColumnButton} undo ={this.onUndoAction} redo = {this.onRedoAction} reset = {this.onResetAction} />
          </div>
    
        );
      }

}




ReactDOM.render(<App />, document.getElementById('root'));
