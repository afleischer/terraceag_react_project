import React from 'react';

//import { editUser } from ‘containers/AppContainer/actions’;

//import {App} from '../../../main';

export const MainTable = () => {
  let i;
  let gridArray=[];
  let iter = 4;
  let length = this.state.gridState.length-1;


  inputId = this.state.cellValues.cellId;

  console.log("The Rows are:"+this.state.gridState[length-1].rows);
  
  for(let i = 0; i <=this.state.gridState[length].rows; i++){
   let children = [];

     for( let j = 0; j <= this.state.gridState[length].columns; j++){

       /****************
       Default values in default fields
       *****************/

         if(i == 0 && j == 0){
           children.push(<th>Item</th>)
         }
         if(i == 0 && j == 1){
           children.push(<th>Cost</th>)
         }
         if(i == 1 && j == 0){
           children.push(<td><input key={1} defaultValue = "Apples" onBlur={this.onInputChange} id = {1} ></input></td>)
           //Throws a warning stating I cannot update during an existing state transisition.  
           //this.setState({inputId : this.inputId + 1});
         }
         if(i == 1 && j == 1){
           children.push(<td><input key={2} defaultValue = "$20" onBlur={this.onInputChange} id = {2} ></input></td>)
             //this.setState({inputId : this.inputId + 1});
         }
         if(i == 2 && j == 0){
           children.push(<td><input key={3} defaultValue = "Oranges" onBlur={this.onInputChange} id = {3} ></input></td>)
             //this.setState({inputId : this.inputId + 1});
         }
         if(i == 2 && j == 1){
           children.push(<td><input key={4} defaultValue = "$12" onBlur={this.onInputChange} id = {4} ></input></td>)
             //this.setState({inputId : this.inputId + 1});
         }

         /***********************
         Allow for blank new fields.  Push a header <th> cell if it's the top row, 
         Push a <td> cell if not.
         ***********************/


         if((i > 2) || (j > 1)){
           if(i == 0){
             children.push(<th><input key={iter++} placeholder="Enter Field Value" value ={this.state.cellValue} onBlur={this.onInputChange} id = {iter++} key={inputId}></input></th>)
             //this.setState({inputId : this.inputID + 1});
           } else {
             children.push(<td><input key={iter++} placeholder="Enter Value" value ={this.state.cellValue} onBlur={this.onInputChange} id = {iter++} key={inputId}></input></td>)
             //this.setState({inputId : this.inputId + 1});
           }
         }

     }

   gridArray.push(<tr>{children}</tr>)

   
   }

   //map to apply unique key 
   //const mapGrid = gridArray.map(input => this.key = 'input'+iter++)
     /*
   for(let i = 0; i <= gridArray.length-1; i++){
       gridArray[i].id = iter;
       gridArray[i].key= iter++;
     }
     */
   return gridArray;

}



 class baseTable extends React.Component{
  constructor(props){
    //properties
    super(props);
  }
        //Idea 1: for each element of the table, make sure to 
      tableGen(){
        let i;
             let gridArray=[];
             let iter = 4;
             let length = this.state.gridState.length-1;
      
      
             inputId = this.state.cellValues.cellId;
      
             console.log("The Rows are:"+this.state.gridState[length-1].rows);
             
             for(let i = 0; i <=this.state.gridState[length].rows; i++){
              let children = [];
      
                for( let j = 0; j <= this.state.gridState[length].columns; j++){
      
                  /****************
                  Default values in default fields
                  *****************/
      
                    if(i == 0 && j == 0){
                      children.push(<th>Item</th>)
                    }
                    if(i == 0 && j == 1){
                      children.push(<th>Cost</th>)
                    }
                    if(i == 1 && j == 0){
                      children.push(<td><input key={1} defaultValue = "Apples" onBlur={this.onInputChange} id = {1} ></input></td>)
                      //Throws a warning stating I cannot update during an existing state transisition.  
                      //this.setState({inputId : this.inputId + 1});
                    }
                    if(i == 1 && j == 1){
                      children.push(<td><input key={2} defaultValue = "$20" onBlur={this.onInputChange} id = {2} ></input></td>)
                        //this.setState({inputId : this.inputId + 1});
                    }
                    if(i == 2 && j == 0){
                      children.push(<td><input key={3} defaultValue = "Oranges" onBlur={this.onInputChange} id = {3} ></input></td>)
                        //this.setState({inputId : this.inputId + 1});
                    }
                    if(i == 2 && j == 1){
                      children.push(<td><input key={4} defaultValue = "$12" onBlur={this.onInputChange} id = {4} ></input></td>)
                        //this.setState({inputId : this.inputId + 1});
                    }
      
                    /***********************
                    Allow for blank new fields.  Push a header <th> cell if it's the top row, 
                    Push a <td> cell if not.
                    ***********************/
      
      
                    if((i > 2) || (j > 1)){
                      if(i == 0){
                        children.push(<th><input key={iter++} placeholder="Enter Field Value" value ={this.state.cellValue} onBlur={this.onInputChange} id = {iter++} key={inputId}></input></th>)
                        //this.setState({inputId : this.inputID + 1});
                      } else {
                        children.push(<td><input key={iter++} placeholder="Enter Value" value ={this.state.cellValue} onBlur={this.onInputChange} id = {iter++} key={inputId}></input></td>)
                        //this.setState({inputId : this.inputId + 1});
                      }
                    }
      
                }
      
              gridArray.push(<tr>{children}</tr>)
      
              
              }
      
              //map to apply unique key 
              //const mapGrid = gridArray.map(input => this.key = 'input'+iter++)
                /*
              for(let i = 0; i <= gridArray.length-1; i++){
                  gridArray[i].id = iter;
                  gridArray[i].key= iter++;
                }
                */
              return gridArray;

      }
        
}

//const MainTable = new baseTable;


export default MainTable;