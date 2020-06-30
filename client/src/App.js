import React from 'react';

import {  withRouter  } from 'react-router-dom';





import Contact from './Contact/contact';





const App = (props) => {
    const {location} = props;

    return (
        <div className="divConteners">
 
            <Contact/>
        </div>
    )
}
export default withRouter(App);

