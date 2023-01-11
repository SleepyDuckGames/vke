import React from 'react';
import ContactsTitle from './Contacts-title/Contacts-title';
import Information from './Information/Information';
import Map from './Map/Map'

const Contacts = () => {
    return (
        <div className="contacts">
            <ContactsTitle/>
            <Information/>
            <Map/>
		</div>
    );
}

export default Contacts;