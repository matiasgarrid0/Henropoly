import React from "react";
import { Board } from "..";

const ViewBoard = () =>{
    return(
      
      <div className='board-total-view'>
      <div style={{width:'100%'}}>
        <div style={{margin:'auto'}}>
        <div className="board-square-3d">
          <div className="board-responsive-3d">
            <Board></Board>
          </div>
        </div>
        </div>
        </div>
        </div>  
    )

}
export default ViewBoard;