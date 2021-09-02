const { User, CardProperty } = require('./src/db')

const { cardpropertiesData } = require('./dbData/cardProperties')
const { usersData } = require('./dbData/userData')
const test= {
    name: " CSS",
    versionAlpha: 2,
    versionOne: 10,
    versionTwo: 30,
    versionThree: 90,
    versionFour: 160,
    versionPremium: 250,
    aditional: "además V4.0",
    commonVersion: 50,
    premiumVersion: 50,
    licenseValue: 30,
    color: "brown"
}

const preloadData = async () => {
    const searchUsers = await User.findOne()
    if (searchUsers === null) {
        //---------|users|---------//
        await User.bulkCreate(usersData)
        //---------|cardsProperties|---------//
        await CardProperty.bulkCreate(cardpropertiesData)
    }
}

module.exports = { preloadData }