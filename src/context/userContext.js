import React from 'react';

const userContext = React.createContext({user: null,
isLogged: 'initial'})

export default userContext