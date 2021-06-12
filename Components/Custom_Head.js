import Head from 'next/head';

export default function Custom_head({title}) {
  return (
    <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <meta name="author" content="Naren Karthik B M" />
    </Head>
  )
}
