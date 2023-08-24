import Document, { Html, Head, Main, NextScript } from 'next/document'

import { theme } from '@config/theme'
import { ColorModeScript } from '@ecommerce/ui'

interface HeadlessProps {
  helmet: any
}

class HeadlessDocument extends Document<HeadlessProps> {
  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

HeadlessDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps
  }
}

export default HeadlessDocument
