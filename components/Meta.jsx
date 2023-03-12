import Head from "next/head";

export const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />

      {/* //* FavIcon: Magnifying Glass */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="favicon_io/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon_io/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon_io/favicon-16x16.png"
      />
      <link rel="manifest" href="favicon_io/site.webmanifest" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Odds Tracker",
  keywords: "bettings, odds, tracking, sports",
  description: "Compare odds amongst rival bookmakers",
};
