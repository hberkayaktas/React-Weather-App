import { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import axios from "axios";
import CountryContext from '../context/CountryContext';


function FetchComponent() {
      const {country, setCountry} = useContext(CountryContext);
      const {currentContryid, setCurrentCountryid} = useContext(CountryContext);
 
  useEffect(() => {
    axios("http://localhost:3000/locallist?country=TR").then((res) =>
      setCountry(res.data)
    );
  }, []);

  // console.log(users)
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      country: "295781",
      name:"Demre",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container">
      <div className="row bg-light">
        <div className="col">
          <h1>Weather app</h1>
          <form onSubmit={handleSubmit}>
            <select
              className="form-control"
              name="country"
              value={values.country}
              onChange={handleChange}
            >
              {country.map((q) =>(<option key={q.id} name={q.name} value={q.id}>{q.name}</option>))}
            </select>
            {/* <p>{JSON.stringify(values)}</p> */}
            <p>{setCurrentCountryid(values)}</p>
            <p>{/* console.log(typeof(currentContry.country)) */ }</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FetchComponent;
