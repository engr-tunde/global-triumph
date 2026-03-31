import React from 'react';
import { Helmet } from 'react-helmet';

const TopHead = ({ pageTitle }) => {
  return (
    <Helmet>
      <title>{pageTitle} - Global Triumph Market Plus Multiconcept</title>
      <meta
        name="description"
        content={`${pageTitle} - Global Triumph Market Plus Multiconcept is a real estate and properties investments Company whose focuse spans across a variety of firms such as real estate investments, properties sales, CCTV camera installation and services, visa related services, buying and selling of properties and properties professional management.`}
      />
      <meta
        name="keywords"
        content="Global Triumph Market Plus Multiconcept, GTMPM, Housing, House for Sales, House for rent, Real Estate, Property Investment, Investments, Visa Processing, Visa, Travel, House for Sale in Lagos, Propertues for sale in Lagos, Buy properties in Lagos, Property Management, Visa Services, CCTV camera installation, interior deco, Global Triumph"
      />
      <meta
        name="author"
        content="Mudashir Tunde (Tee King) - Jaflah Software Development Company"
      />
    </Helmet>
  );
};

export default TopHead;
