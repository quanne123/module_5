import React from 'react';

function Layout(props) {
    return (
        <div>
            <header>{props.header}</header>
            <nav>{props.navigation}</nav>
            <main>{props.children}</main>
            <footer>{props.footer}</footer>
        </div>
    );
}

export default Layout;
