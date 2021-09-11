import React from 'react';
import './Card.css';

//{ name, versionAlpha, versionOne, versionTwo, versionThree, versionFour, versionPremium, aditional, commonVersion, premiumVersion, licenseValue }
const Card = (data) => {
    console.log('dataCard',data)
    return (
        <div className= "all">
            <div className ="cnt">
            <div className={`propertyCard-div-title propertyCard-color-card-${data.color}`}>
              <label className="card-title-card">{data.name}</label>
            </div>
                <div className="alignItemsssssss">
                    <ul className='listStile-none'>
                        <p><span className="card-span-bold">Version desarrollo:</span> {data.versionAlpha}$</p>
                        <p><span className="card-span-bold">Version uno:</span> {data.versionOne}$</p>
                        <p><span className="card-span-bold">Version dos:</span> {data.versionTwo}$</p>
                        <p><span className="card-span-bold">Version tres:</span> {data.versionThree}$</p>
                        <p><span className="card-span-bold">Version cuatro:</span> {data.versionFour}$</p>
                        <p><span className="card-span-bold">Version Premium:</span> {data.versionPremium}$</p>
                    </ul>
                    <div className="line-card"></div>
                    <p className = "pgame"><span className="card-span-bold">Adicional:</span> {data.aditional}</p>
                    <p className = "pgame"><span className="card-span-bold">Version Comun:</span> {data.commonVersion}$</p>
                    <p className = "pgame"><span className="card-span-bold">Version Premium:</span> {data.premiumVersion}$</p>
                    <p className = "pgame"><span className="card-span-bold">Valor de la Licencia:</span> {data.licenseValue}$</p>
                </div>    
            </div>
        </div>
    )
}
export default Card;
    // id:1,
    //         type:"property",
    //         name: " CSS",
    //         versionAlpha: 2,
    //         versionOne: 10,
    //         versionTwo: 30,
    //         versionThree: 90,
    //         versionFour: 160,
    //         versionPremium: 250,
    //         aditional: "además V4.0",
    //         commonVersion: 50,
    //         premiumVersion: 50,
    //         licenseValue: 30,
    //         color: "brown"


/**            <div className = {cardCss.h1btn}>
                <Link to = {`/detail/${id}`} style={{ textDecoration: 'none' }} >
                    <h1 className={cardCss.h1}>{name}</h1>
                </Link>
                {
                    createdDb === true ? (
                        <button className={cardCss.btonClose} onClick={e => handleDelete(e)}>X</button>
                    )
                        : null
                }
            </div>
            <img src={img} alt="img not found" width="350" height="200" />
            <p className={cardCss.p}>{genres.map(e => e + " / ")}</p>
            <div className ={cardCss.div}>
            <img src="https://i.ibb.co/6Zf7BHP/11.png" alt="not found"  width="35" height="20" />
            <p className={cardCss.pgame}>{rating}</p>
            </div> */