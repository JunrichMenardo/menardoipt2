import '../sass/menardo.scss';
import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom/client';

import Example from './components/Example';

const rootElement = document.getElementById('app');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<Example />);
}
