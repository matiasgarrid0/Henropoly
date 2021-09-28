import React from "react";
import { useSelector } from "react-redux";
import "./PropertyCard.css";


const PropertyCard = ({ data, username, buy, henryCoin }) => {
  const { user } = useSelector((state) => state.auth);



  return (
    <div className="all">
      <div className="cnt">
        <div
          className={`propertyCard-div-title propertyCard-color-card-${data.color}`}
        >
          <label className="card-title-card">{data.name}</label>
        </div>
        <div className="alignItemsssssss">
          <ul className="listStile-none">
            <p>
              <span className="card-span-bold">Versión desarrollo:</span>{" "}
              {data.versionAlpha}$
            </p>
            <p>
              <span className="card-span-bold">Versión uno:</span>{" "}
              {data.versionOne}$
            </p>
            <p>
              <span className="card-span-bold">Versión dos:</span>{" "}
              {data.versionTwo}$
            </p>
            <p>
              <span className="card-span-bold">Versión tres:</span>{" "}
              {data.versionThree}$
            </p>
            <p>
              <span className="card-span-bold">Versión cuatro:</span>{" "}
              {data.versionFour}$
            </p>
            <p>
              <span className="card-span-bold">Versión Premium:</span>{" "}
              {data.versionPremium}$
            </p>
          </ul>
          <div className="line-card"></div>
          <p className="pgame">
            <span className="card-span-bold">Adicional:</span> {data.aditional}
          </p>
          <p className="pgame">
            <span className="card-span-bold">Versión Comun:</span>{" "}
            {data.commonVersion}$
          </p>
          <p className="pgame">
            <span className="card-span-bold">Versión Premium:</span>{" "}
            {data.premiumVersion}$
          </p>
          <div className="line-card"></div>
          <p className="pgame-compra">
            <span className="card-span-bold">Valor de compra:</span>{" "}
            {data.licenseValue}$
          </p>
        </div>
        {username === user.username && henryCoin >= data.licenseValue ? <button className='propertycard-button' onClick={buy}>Comprar</button> : <span>No posee fondos suficientes</span>}
      </div>
    </div>
  );
};   
export default PropertyCard;