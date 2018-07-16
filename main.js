import React from 'react';
import ReactDOM from 'react-dom';


//Components
import { MainTable } from './app/components/input_table/maintable';
//import baseTable from './app/components/input_table/maintable';
import ButtonMenu from './app/components/button_menu/buttonmenu';

//App Logic
import onUndoAction from './app/undo';
import onRedoAction from './app/redo';
import { onInputChange } from './app/input';

//Session logic
import broadcast from './services/session/broadcast';

export default class App extends React.Component {

    constructor(props){
      //properties
      super(props);
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
      //this.props.inputId = 0;
        //Bind "this" to functions
      //this.foo = this.foo.bind(this);
      //this.onInputChange = this.onInputChange.bind(this);

      this.onInputChange = onInputChange.bind(this);
      
      this.onRowButton = this.onRowButton.bind(this);
      this.onColumnButton = this.onColumnButton.bind(this);

      this.onUndoAction = onUndoAction.bind(this);
      this.onRedoAction = onRedoAction.bind(this);


      //bind imported MainTable function and calling MainTableGet function
      this.MainTableGet = this.MainTableGet.bind(this);
      this.MainTable = MainTable.bind(this);
      //this.baseTable = baseTable.bind(this);
      //this.onResetAction = this.onResetAction.bind(this);

      this.broadcast = broadcast.bind(this);
      
    }
  
onRowButton(event){

  let copy = [...this.state.gridState];
  let undoCopy = [...this.state.undo];
  let last = copy[copy.length-1];

  //Update the rows 
  let update = last.rows + 1;

  let updateObj = {rows: update, columns: last.columns, type:"cell"};
  let spliced = copy.push(updateObj);
  let undoSpliced = undoCopy.push(updateObj);


  //copy the newUndo array and do it similarly

  this.setState({gridState: copy});  //might instead be copy 
  this.setState({undo: undoCopy});
    /* 

    this.setState({rows: this.state.gridState.rows + 1});

    let undoStateCopy = [...this.state.undo];
    let newUndo = undoStateCopy.splice(undoStateCopy);
    let undoAddition = newUndo.push("rowAdd");

    this.setState({undo: newUndo})

    */
}
onColumnButton(event){

  let copy = [...this.state.gridState];
  let undoCopy = [...this.state.undo];

  let last = copy[copy.length-1];

  let update = last.columns + 1;

  let updateObj = {rows: last.rows, columns: update, type:"cell"};
  let spliced = copy.splice(copy.length-1, 1, updateObj);
  let undoSpliced = undoCopy.splice(undoCopy.length-1, 1, updateObj);


  this.setState({gridState: spliced});  //might instead be copy 
  this.setState({undo: undoSpliced});
  /*
    this.setState({columns: this.state.gridState.columns + 1});

    let undoStateCopy = [...this.state.undo];
    let newUndo = undoStateCopy.splice(undoStateCopy);
    let undoAddition = newUndo.push("colAdd");

    this.setState({undo: newUndo})
    */
}
  
//MainTable;

      MainTableGet(){
        //let returnVal = MainTable.call(this);
        //return returnVal;
        let returnVal = this.MainTable();
        return returnVal;
        //return baseTable.tableGen;

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


    render(){
        return (
          <div>
          <table>
          <tbody onLoad = {this.broadcast()}>  
            {this.MainTableGet()}
          </tbody>
          </table>
          <ButtonMenu onRow = {this.onRowButton} onCol = {this.onColumnButton} undo ={this.onUndoAction} redo = {this.onRedoAction} reset = {this.onResetAction} />
          </div>
    
        );
      }

}




ReactDOM.render(<App />, document.getElementById('root'));
