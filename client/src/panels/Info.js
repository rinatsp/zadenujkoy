import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, platform, IOS, View, Div, Group} from '@vkontakte/vkui';
import './Persik.css';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import connect from "@vkontakte/vkui-connect";
import Home from "./Home";


const osname = platform();


const Info = props => (
	<Panel id={props.id}>
        <PanelHeader
            left={<HeaderButton onClick={props.go} data-to="home">
                {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>}
        >
            Информация о банке
        </PanelHeader>

        <Group title='Название'>
            <Div>
                name
                {/*				{this.props.name}*/}
            </Div>
        </Group>
        <Group title='Адрес'>
            <Div>
                address
                {/*                {this.props.address}*/}
            </Div>
        </Group>
        <Group title='Расстояние'>
            <Div>
                distance
                {/*                {this.props.distance}*/}
            </Div>
        </Group>

    </Panel>
);

Info.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,

/*
	name: PropTypes.string.isRequired,
	address: PropTypes.string.isRequired,
	distance: PropTypes.number().isRequired,
*/
};

export default Info;





