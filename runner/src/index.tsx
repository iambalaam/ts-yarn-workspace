import * as React from 'react';
import {render} from 'react-dom'
import {B} from 'dependency';

const App = () => (
    <h1><B/></h1>
)
render(
    <App/>,
    document.getElementById('root')
);
