import React from 'react';
import NameItem from './NameItem';

const NamesCont = () => {
    return (
        <section className="namesCont">
            <h3>Your list is...</h3>
            <NameItem />
            <NameItem />
            <NameItem />
        </section>
    )
}

export default NamesCont;