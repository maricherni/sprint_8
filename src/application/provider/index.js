import {createContext,useState} from 'react';

export default ({ children }) =>{
    const [authenticated,setAuthenticated] = useState({});
    return (            
      <AppContext.Provider value={[authenticated,setAuthenticated]}>
          {children}
      </AppContext.Provider>  
    );
}

export const AppContext = createContext();