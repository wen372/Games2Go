import React from 'react';
import reactDom from 'react-dom';
import BoardView from '../components/Board';
import '../main.scss';
import '../styles.scss';

const App = () => {
    return <h1>2048</h1>;
};

reactDom.render(<App />, document.getElementById('root'));

function two48Page(props) {
    return<BoardView />
    
}
export default two48Page;