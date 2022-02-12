import React from 'react';

const newsContext = React.createContext({articles: null,
error: null, hasError: false})

export default newsContext;