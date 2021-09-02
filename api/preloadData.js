const { User, CardProperty, CommunalArch,FortuneCard,Railway } = require('./src/db')

const { cardpropertiesData } = require('./dbData/cardProperties')
const { usersData } = require('./dbData/userData')
const { comunalCards } = require('./dbData/comunalArch')
const { luckyCards } = require('./dbData/FortuneCard')
const {railwayCards} = require('./dbData/Railway')

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
        await FortuneCard.bulkCreate(luckyCards)
        //---------|RailwayCards|---------//
        await Railway.bulkCreate(railwayCards)
    }
}

module.exports = { preloadData }