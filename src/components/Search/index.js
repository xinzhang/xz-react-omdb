import React, { useState, useEffect } from 'react';
import { searchMovies } from 'api/omdbApi';

function Search() {
  const [data, setData] = useState({ Search: [] });
  const [query, setQuery] = useState('redux');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const result = await searchMovies(search);
        console.log(result.data.Search[0].title);
        setData(result.data);
      } catch (e) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [search]);

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="button" onClick={() => setSearch(query)}>
        Search
      </button>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div> Loading ... </div>
      ) : (
        <ul>
          {data.Search.map((item) => (
            <li key={item.imdbID}>
              <a href={item.imdbID}>{item.Title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Search;
