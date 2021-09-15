import React from "react";
import Tutorial from "../Tutorial";
import Ranking from "../Ranking";
import { Room, DisplayGameBeta, Chat } from "./../../components";
import "./DashBoardBeta.css";
import { useSelector } from "react-redux";


const DashBoardBeta = () => {
  const { status } = useSelector((state) => state.henropolyGame);
  if (status === "inGame") {
    return (
     
      <div className="beta-space-game color-blanco">
        <div className="beta-box-game">
          <div className="asd"></div>
          <div className="asd"></div>
          <DisplayGameBeta />
        </div>
      </div>
    );
  } else {
    return (
      // <div className="DashBoardBeta-todo">
      //   <div >
      //     <div className="DashBoardBeta-hijo">
      //       <div className='index-space'></div>
      //         <div className='index-space'></div>
      //           <div className="DashBoardBeta-position">
      //             <div className="DashBoardBeta-total">
      //               <Tutorial />
      //             </div>
      //           </div>
      //           <div className="beta-space-game color-blanco">
      //             <div className="beta-box-game">
      //               <div className="asd"></div>
      //                   <div className="asd"></div>
      //                    <Room />
      //                     <Chat />
      //                   </div>
      //               </div>
      //               <div>
      //             <div>
      //               <Ranking />
      //             </div>
      //           </div>
      //       </div>
      //     </div>
      //   </div>
      <div className="dashBoard-beta-margin">
        <div className="repeat-total">
          <div > 
            <Tutorial />
          </div>
          <div className="">
            <Room />
            <Chat />
          </div>
          <div>
            <Ranking />
          </div>
        </div>
      </div>
    );
  }
};
export default DashBoardBeta;
