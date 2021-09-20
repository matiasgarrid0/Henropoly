import React from "react";
import { useSelector } from "react-redux";
import "./ServiceCard.css";
import { FcWiFiLogo, FcIdea } from "react-icons/fc";
const ServiceCard = ({ data, username, buy }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      {data.name === "ELECTRICITY COMPANY" ? 
        <div className="serviceCard-background-no-repeat">
          <div className="servicecard-divtitle">
            <label className="serviceCard-h3">ELECTRICITY COMPANY</label>
            <span>Valor de la licencia:{data.licenseValue}$</span>
          </div>
          <div>
            <FcIdea className="cardservice-icon" />
          </div>

          <div className="servicecard-div-btn">
            {username === user.username && (
              <button className="servicecard-button" onClick={buy}>
                comprar
              </button>
            )}
          </div>
        </div>
       : 
        <div className="serviceCard-background-no-repeat">
          <div className="servicecard-divtitle">
            <label className="serviceCard-h3">INTERNET COMPANY</label>
            <span>Valor de la licencia:{data.licenseValue}$</span>
          </div>
          <div>
            <FcWiFiLogo className="cardservice-icon" />
          </div>

          <div className="servicecard-div-btn">
            {username === user.username && (
              <button className="servicecard-button" onClick={buy}>
                comprar
              </button>
            )}
          </div>
        </div>
      }
    </div>
  );
};
export default ServiceCard;

