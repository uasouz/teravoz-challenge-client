import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// @ts-ignore
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import store from "./modules/store";
import WebSocketConnection from "./components/WebSocketConnection/WebSocketConnection";

const Root = ({ store }: {store: any}) => (
    <Router>
        <Provider store={store}>
            <Route path="/" component={App} />
            <WebSocketConnection
                host={`ws://127.0.0.1:4000`}/>
        </Provider>
    </Router>
);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
