import Head from 'next/head'

import { Button, I18n } from '@ecommerce/ui'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Button colorScheme="blue">
        <I18n id="global.submit" />
      </Button>
    </>
  )
}

export default Home
