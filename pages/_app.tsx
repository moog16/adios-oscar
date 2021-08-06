import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const brand = {
  50: '#F4F4F7',
  100: '#eeecff',
  500: '#615DB7',
  900: '#363286',
}
const brandSecondary = {
  50: '#fffadb',
  100: '#fef1ae',
  200: '#fce880',
  300: '#fbdf4f',
  400: '#F9D412',
}

const logo = {
  primaryColorLight: 'white',
  secondaryColorLight: '#17C7A4',
  primaryColorDark: '#363286',
  secondaryColorDark: '#2EA38A',
}

const fontSizes = {
  heroMobile: '48px',
  heroDesktop: '60px',
  headline1Mobile: '32px',
  headline1Desktop: '56px',
  headline2Mobile: '24px',
  headline2Desktop: '40px',
  headline3Mobile: '20px',
  headline3Desktop: '32px',
  headline4Mobile: '20px',
  headline4Desktop: '24px',
  subtitle: '12px',
  body: '16px',
  bodyLarge: '18px',
  bodyLargeSemibold: '18px',
  bodySemibold: '16px',
  bodySmall: '14px',
  bodySmallSemibold: '14px',
  caption: '10px',
  captionSemibold: '10px',
}

const theme = extendTheme({
  colors: {
    brand,
    brandSecondary,
    logo,
  },
  textStyles: {
    hero: {
      fontFamily: 'heading',
      fontSize: [fontSizes.heroMobile, null, fontSizes.heroDesktop],
      lineHeight: ['64px', null, '80px'],
      fontWeight: 'semibold',
    },
    headline1: {
      fontFamily: 'heading',
      fontSize: [fontSizes.headline1Mobile, null, fontSizes.headline1Desktop],
      lineHeight: ['40px', null, '64px'],
      fontWeight: 'semibold',
    },
    headline2: {
      fontFamily: 'heading',
      fontSize: [fontSizes.headline2Mobile, null, fontSizes.headline2Desktop],
      lineHeight: ['32px', null, '48px'],
      fontWeight: 'semibold',
    },
    headline3: {
      fontFamily: 'heading',
      fontSize: [fontSizes.headline3Mobile, null, fontSizes.headline3Desktop],
      lineHeight: ['24px', null, '36px'],
      fontWeight: 'semibold',
    },
    headline4: {
      fontFamily: 'body',
      fontSize: [fontSizes.headline4Mobile, null, fontSizes.headline4Desktop],
      lineHeight: ['24px', null, '32px'],
      fontWeight: 'bold',
    },
    subtitle: {
      fontFamily: 'body',
      fontSize: [fontSizes.subtitle],
      lineHeight: '16px',
      letterSpacing: '0.3px',
      textTransform: 'uppercase',
    },
    body: {
      fontFamily: 'body',
      fontSize: [fontSizes.body],
      lineHeight: '24px',
      fontWeight: 'normal',
    },
    bodyLarge: {
      fontFamily: 'body',
      fontSize: [fontSizes.bodyLarge],
      lineHeight: '24px',
      fontWeight: 'normal',
    },
    bodyLargeSemibold: {
      fontFamily: 'body',
      fontSize: [fontSizes.bodyLargeSemibold],
      lineHeight: '24px',
      fontWeight: 'bold',
    },
    bodySemibold: {
      fontFamily: 'body',
      fontSize: [fontSizes.bodySemibold],
      lineHeight: '24px',
      fontWeight: 'bold',
    },
    bodySmall: {
      fontFamily: 'body',
      fontSize: [fontSizes.bodySmall],
      lineHeight: '22px',
      fontWeight: 'normal',
    },
    bodySmallSemibold: {
      fontFamily: 'body',
      fontSize: [fontSizes.bodySmallSemibold],
      lineHeight: '22px',
      fontWeight: 'bold',
    },
    caption: {
      fontFamily: 'body',
      fontSize: [fontSizes.caption],
      lineHeight: '16px',
      fontWeight: 'normal',
    },
    captionSemibold: {
      fontFamily: 'body',
      fontSize: [fontSizes.captionSemibold],
      lineHeight: '16px',
      fontWeight: 'bold',
    },
  },
  fontWeights: {
    light: 200,
    medium: 300,
    normal: 400,
    semibold: 500,
    bold: 600,
    extrabold: 700,
  },
  fontSizes,
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
