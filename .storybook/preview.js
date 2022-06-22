import GlobalStyles from '/styles/global'


export const decorators =[
  (Story) => (
    <>
    <GlobalStyles/>
    <Story/>
    </>
  )
]

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};