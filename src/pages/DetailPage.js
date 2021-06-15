import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header/Header';
import Detail from '../components/detail/Detail';

DetailPage.propTypes = {
    
};

function DetailPage(props) {
    return (
        <div>
            <Header></Header>
            <Detail></Detail>
            
        </div>
    );
}

export default DetailPage;