const { User, CardProperty, CommunalArch } = require('./src/db')

const { cardpropertiesData } = require('./dbData/cardProperties')
const { usersData } = require('./dbData/userData')
const { comunalCards } = require('./dbData/comunalArch')

const preloadData = async () => {
    const searchUsers = await User.findOne()
    if (searchUsers === null) {
        //---------|users|---------//
        await User.bulkCreate(usersData)
        //---------|cardsProperties|---------//
        await CardProperty.bulkCreate(cardpropertiesData)
        //---------|comunalArch|---------//
        await CommunalArch.bulkCreate(comunalCards)
        //---------|FortuneCard|---------//
    }
}

module.exports = { preloadData }