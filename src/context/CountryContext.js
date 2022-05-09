import { createContext, useState } from "react";

const CountryContext = createContext();
export const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState([]);
  const [currentContryid, setCurrentCountryid] = useState({"country":"296138"});
  const [currentContry, setCurrentCountry] = useState({"coord":{"lon":37.7583,"lat":39.8978}});

  const values = {
    country,
    setCountry,
    currentContry,
    setCurrentCountry,
    currentContryid,
    setCurrentCountryid,
  };
  return (
    <CountryContext.Provider value={values}>{children}</CountryContext.Provider>
  );
};
export default CountryContext;
