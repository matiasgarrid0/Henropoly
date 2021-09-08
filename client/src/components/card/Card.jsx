import React from 'react';
import './Card.css';


 const Card = ({data}/*{name,versionAlpha,versionOne,versionTwo,versionThree,versionFour,versionPremium,aditional,commonVersion,premiumVersion,licenseValue }*/) => {
    return(
        <div>
            <h3>{data.name}</h3>
            <ul>
                <li>Version Alpha: {data.versionAlpha}</li>
                <li>Version One: {data.versionOne}</li>
                <li>Version Two: {data.versionTwo}</li>
                <li>Version Three: {data.versionThree}</li>
                <li>Version Four: {data.versionFour}</li>
                <li>Version Pre: {data.versionPremium}</li>
            </ul>
            <span>Aditional:{data.aditional}</span>
            <span>CommonVersion:{data.commonVersion}</span>
            <span>PremiumVersion:{data.premiumVersion}</span>
            <span>LicenseValue:{data.licenseValue}</span>
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