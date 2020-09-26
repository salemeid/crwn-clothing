import React from 'react';

import './homepage.styles.scss'

import '../../components/directory-menu/directory-menu.component'
import Directory from '../../components/directory-menu/directory-menu.component';

const HomePage = () => (

    <div className='homepage'>
        <Directory />
    </div>
);

export default HomePage;
