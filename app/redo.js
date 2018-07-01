import React from 'react';


const onRedoAction = function onRedoAction(event){


    let undoArrLength = this.state.undo.length-1;
        let undoType = this.state.undo[undoArrLength].type;

  
    //undoType.check is only present in undo events with cell value entries


    if (undoType == "cell"){


      let undoStateCopy = [...this.state.undo];
      let redoStateCopy = [...this.state.redo];


      //loop back to prior similar undo action

      for(let i = undoStateCopy.length-2; i >= 0; i--){
        if(undoStateCopy[i].type == "cell"){
          //Set this value as the new value 
          this.setState({gridState: undoStateCopy[i]})
          //then pop the prior value

          let newUndo = redoStateCopy.splice(redoStateCopy.length-1,1);
          let newRedo = undoStateCopy.splice(undoStateCopy.length-1,0, newRedo);
          this.setState({undo: newUndo});
          this.setState({redo: newRedo});
          break;
        }
      }
    }

    else if (undoType == "value"){

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

          let newUndo = redoStateCopy.splice(redoStateCopy.length-1,1);
          let newRedo = undoStateCopy.splice(undoStateCopy.length-1,0, newRedo);
          this.setState({undo: newUndo});
          this.setState({redo: newRedo});
          break;
        }
      }
    }
}

export default onRedoAction