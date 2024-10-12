import React, {createContext, useState} from 'react';

// Create the context
export const QueryStringContext = createContext();

// Create a Provider component
const QueryStringProvider = ({children}) => {
  const [queryString, setQueryString] = useState('');

  return (
    <QueryStringContext.Provider value={{queryString, setQueryString}}>
      {children}
    </QueryStringContext.Provider>
  );
};

export default QueryStringProvider;
