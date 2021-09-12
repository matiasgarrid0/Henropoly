
import React from 'react';
import './PropertyCard.css';

//{ name, versionAlpha, versionOne, versionTwo, versionThree, versionFour, versionPremium, aditional, commonVersion, premiumVersion, licenseValue }
const PropertyCard = ({ data }) => {
    return (
        <div className="luckyCard-background-initial">
            <div className={`propertyCard-div-title propertyCard-color-card-${data.color}`}>
                <div className="luckyCard-background">
                    <h1 className="card-title-card">{data.name}</h1>
                    <ul className='luckyCard-h3"'>
                        <p><span className="card-span-bold">Version desarrollo:</span> {data.versionAlpha}$</p>
                        <p><span className="card-span-bold">Version uno:</span> {data.versionOne}$</p>
                        <p><span className="card-span-bold">Version dos:</span> {data.versionTwo}$</p>
                        <p><span className="card-span-bold">Version tres:</span> {data.versionThree}$</p>
                        <p><span className="card-span-bold">Version cuatro:</span> {data.versionFour}$</p>
                        <p><span className="card-span-bold">Version Premium:</span> {data.versionPremium}$</p>
                    </ul>
                    <div className="line-card"></div>
                    <p className="pgame"><span className="card-span-bold">Adicional:</span> {data.aditional}</p>
                    <p className="pgame"><span className="card-span-bold">Version Comun:</span> {data.commonVersion}$</p>
                    <p className="pgame"><span className="card-span-bold">Version Premium:</span> {data.premiumVersion}$</p>
                    <p className="pgame"><span className="card-span-bold">Valor de la Licencia:</span> {data.licenseValue}$</p>
                    <button>comprar</button>
                    <button>cancelar</button>
                </div>
            </div>

        </div>
    )
}
export default PropertyCard;