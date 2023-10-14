import React from 'react';


function Footer() {

const currentYear =new Date().getFullYear();
    return (
    <footer className="text-gray-400 text-center">
        <p>
        copyright © {currentYear}
        </p>
    </footer>);
}


export default Footer;