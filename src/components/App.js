import React from 'react';

import Post from './Post';

export default class App extends React.Component {
    render(){
        return(
            <div>
                <h1>Olá mundo</h1>
                <Post title="Aprendendo React" />
                <Post title="Eu vou fazer o novo Facebook!" />
                <Post title="Ele vai ter varios textoes de tia" />
            </div>
        )
    }
}