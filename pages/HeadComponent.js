import Head from "next/head";

const HeadComponent = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=4be6f29d095bc56cb800cc08ea6b3480"
        />
      </Head>
    </>
  );
};

export default HeadComponent;
