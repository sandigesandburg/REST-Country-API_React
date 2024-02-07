import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CountryData } from './countryData/countryData';
import { getDataOfCountries } from './countryRESTAPI/getDataOfCountries';
import { Layout } from './pages/Layout';
import { Details } from './pages/Details';
import { Home } from './pages/Home';
import React, { useEffect, useState } from 'react';

import './styles.css';

const App = () => {
  const [data, setData] = useState(new CountryData());

  useEffect(() => {
    async function getData() {
      const countryData = await getDataOfCountries();
      setData(new CountryData(countryData));
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
