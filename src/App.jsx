import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CountryCollection } from './countryRESTAPI/countryCollection';
import { getCountries } from './countryRESTAPI/getCountries';
import { Layout } from './pages/Layout';
import { Details } from './pages/Details';
import { Home } from './pages/Home';
import React, { useEffect, useState } from 'react';

import './styles/styles.css';

const App = () => {
  const [data, setData] = useState(new CountryCollection());

  useEffect(() => {
    async function getData() {
      setData(await getCountries());
    }
    getData();
  }, []);

  if (data.isEmpty()) return null;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home countryData={data} />} />
          <Route path='/details' element={<Details countryData={data} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
