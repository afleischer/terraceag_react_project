import React from 'react';


const onUndoAction = function onUndoAction(event){

    //Need to prevent error throw on undefined 

  let undoArrLength = this.state.undo.length-1;
      let undoType = this.state.undo[undoArrLength].type;


  //undoType.check is only present in undo events with cell value entries


  if (undoType == "cell"){


    let undoStateCopy = [...this.state.undo];
    let redoStateCopy = [...this.state.redo];
    let newUndo = undoStateCopy;
    let newRedo = redoStateCopy;


    //loop back to prior similar undo action

    for(let i = undoStateCopy.length-2; i >= 0; i--){
      if(undoStateCopy[i].type == "cell"){
        //Set this value as the new value 
        this.setState({gridState: undoStateCopy[i]})
        //then pop the prior value
        /*  Need to integrate this. 
        let addition = newUndo.pop();
        newRedo.push();
        let newRedo = redoStateCopy.splice(redoStateCopy.length-1,0, newUndo);
        this.setState({undo: newUndo});
        this.setState({redo: newRedo});
        */
        break;
      }
    }

  }

  //The below will be true if the last undo event on the stack is defined
  else if(undoType == "value"){


    //loop backwards through 
    let checkArray = [...this.state.cellValues]

    let undoStateCopy = [...this.state.undo];
    let redoStateCopy = [...this.state.redo];

    let cellValuesLength = checkArray.length-1;

    for(let i = cellValuesLength-2; i >= 0 ; i--){
      //loop backwards through the array, 

      let iterator = checkArray[i];

      if(iterator.type == "value"){

        let priorValueId = iterator.cellId;
        let priorValueValue = iterator.cellValue;

        //set the value of the cell at the iterator.cellId 

        let cellToEdit = document.getElementById(priorValueId);
        cellToEdit.value = priorArrayValue;

        let newUndo = undoStateCopy.splice(undoStateCopy.length-1,1);
        let newRedo = redoStateCopy.splice(redoStateCopy.length-1,0, newUndo);
        this.setState({undo: newUndo});
        this.setState({redo: newRedo});

      }

      //if null check needed

    }


    
   }
}

export default onUndoAction;