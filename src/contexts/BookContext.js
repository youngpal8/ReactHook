import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books] = useState([
         {title: 'name of the wind', id: 1},
         {title: 'name of the boy', id: 2},
         {title: 'name of the girl', id: 3},
         {title: 'name of the just', id: 4},
    ]);

    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;
