import React from 'react';
import connect from '@vkontakte/vkui-connect';
import {View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import {AboutPanel} from "./panels/AboutPanel";
import {Filters} from "./panels/Filters";
import {Home} from "./panels/Home";
import {Info} from "./panels/Info";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePanel: 'home',
            fetchedUser: null,
        };
    }

    componentDidMount() {
        connect.subscribe((e) => {
            switch (e.detail.type) {
                case 'VKWebAppGetUserInfoResult':
                    this.setState({fetchedUser: e.detail.data});
                    break;
                default:
                    console.log(e.detail.type);
            }
        });
        connect.send('VKWebAppGetUserInfo', {});
    }

    go = (e) => {
        this.setState({activePanel: e.currentTarget.dataset.to})
    };

    render() {
        return (
            <View activePanel={this.state.activePanel}>
                <Home id="home" fetchedUser={this.state.fetchedUser} go={this.go}/>
                <Info id="info" fetchedUser={this.state.fetchedUser} go={this.go}/>
                <AboutPanel id="aboutpanel" fetchedUser={this.state.fetchedUser} go={this.go}/>
                <Filters id="filter" go={this.go}/>

            </View>
        );
    }
}

export default App;
