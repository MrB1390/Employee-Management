import React from 'react';
import { Provider } from 'react-redux';
import { empStore } from './EmpStore';

const DataContext = ({children}) => {
    return (
        <div>
            <Provider store={empStore}>
                {children}
            </Provider>
        </div>
    );
};

export default DataContext;