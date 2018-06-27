import React from 'react';

const onInputChange = function onInputChange(){
    let cellValuesCopy = [...this.state.cellValues];
    let length = cellValuesCopy.length;
    
      //append to the copy the new values 
    
        let cellValueUpdate = {cellId: event.target.id ,cellValue: event.target.value, check: "FLAG"};
        let newCellValues = cellValuesCopy.splice(length, 0, cellValueUpdate)
    
        this.setState({cellValues : cellValuesCopy});
        this.setState({undo: cellValuesCopy});
        broadcast(this.state);
}



export default onInputChange