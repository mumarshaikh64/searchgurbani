import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetWrapper = ({ title, description, keywords, image, url }) => {
  console.log("@@@@@@@@@@",url)
  if (!title) {
    console.warn('HelmetWrapper: Missing title prop. Default title will be used.');
  }

  const defaultTitle = 'Search Gurbani : Gurbani Research Website';
  const defaultDescription = 'A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas Vaaran, Kabit Bhai Gurdaas ,Sri Dasam Granth Sahib, exegesis , Gurbani, Gurbanee vichaar';
  const defaultImage = 'https://www.searchgurbani.com/assets/img/sg-ggs1.png'; // Replace with a real default image path
  const defaultUrl = 'https://searchgurbani.com';
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:author" content="Gateway to Sikhism Foundation" />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@searchgurbani" />
      <meta property="twitter:creator" content="@searchgurbani" />
      <meta property="twitter:title" content={title || defaultTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image:src" content={image || defaultImage} />
      <meta property="twitter:image:width" content="1200" />
      <meta property="twitter:image:height" content="630" />
</Helmet>
  );
};

export default HelmetWrapper;
