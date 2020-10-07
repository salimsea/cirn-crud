const mainColors = {
    blue1: '#00509D',
    blue2: '#003F88',
    blue3: '#00296B',
    yellow1: '#FFD500',
    yellow2: '#FDC500',
    dark1: '#52965D',
    dark2: '#B9B9B9',
}
// const mainColors = {
//     green1: '#52965D',
//     green2: '#52965D',
//     dark1: '#52965D',
//     dark2: '#B9B9B9',
//     grey1: '#7D8797',
//     grey2: '#E9E9E9',
// }

export const colors = {
    primary: mainColors.blue1,
    secondary: mainColors.blue3,
    dark1: mainColors.dark1,
    dark2: mainColors.dark2,
    yellow1: mainColors.yellow1,
    yellow2: mainColors.yellow2,
    white: 'white',
    black: 'black',
    text: {
        primary: mainColors.dark1,
        secondary: mainColors.grey1,
        menuInactive: mainColors.dark2,
        menuActive: mainColors.blue1,
    },
    button: {
        primary: {
            background: mainColors.blue1,
            text: 'white',
        },
        secondary: {
            background: 'white',
            text: mainColors.dark1,
        },
    },
    border: mainColors.blue1,
    cardLight: mainColors.blue2,
}