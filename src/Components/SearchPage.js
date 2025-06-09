// src/Components/SearchPage.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/SearchPage.css'; // optional, you can create this file

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchPage() {
  const queryParam = useQuery();
  const query = queryParam.get('q') || '';

  const fakeResults = [
   
    'hr@nititechnologiesindia.in',
    'info@nititechnologiesindia.in',
    '+91 8149615561',
    'Contact Support: +91 8149615561 , Email: info@nititechnologiesindia.in / hr@nititechnologiesindia.in ',
    'About Our Team',
  ];

  const filteredResults = fakeResults.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-page">
      <h1>Search Results</h1>
      <p>You searched for: <strong>{query}</strong></p>

      {filteredResults.length > 0 ? (
        <ul className="search-results">
          {filteredResults.map((item, index) => (
            <li key={index} className="search-result-item">{item}</li>
          ))}
        </ul>
      ) : (
        <p>No results found for "<strong>{query}</strong>".</p>
      )}
    </div>
  );
}

export default SearchPage;
