import React from 'react';


class ButtonMenu extends React.Component{
    render(){
        return (
        <div id = "parent">
            <button id = "rowAdd" onClick = {this.props.onRow} >Add Row</button>
            <button id = "colAdd" onClick = {this.props.onCol}>Add Column</button>
            <button id = "undo" onClick = {this.props.undo}>Undo</button>
            <button id = "redo" onClick = {this.props.redo}>Redo</button>
            <button id = "reset" onClick = {this.props.reset} >Reset Table</button>
        </div>
        );
    }
}  
export default ButtonMenu;