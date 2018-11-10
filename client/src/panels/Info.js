import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, platform, IOS, Div, Group, InfoRow} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';


export class Info extends React.Component {

    osname = platform();

    render() {
        return (
            <Panel id={this.props.id}>
                <PanelHeader
                    left={<HeaderButton onClick={this.props.go} data-to="home">
                        {this.osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                    </HeaderButton>}
                >
                    Информация о банке
                </PanelHeader>

                <Group>
                    <Div>
                        <InfoRow title='Название'>
                            name
                            {/*				{this.props.name}*/}
                        </InfoRow>
                    </Div>
                </Group>
                <Group>
                    <Div>
                        <InfoRow title='Адрес'>
                            address
                            {/*                {this.props.address}*/}
                        </InfoRow>
                    </Div>
                </Group>
                <Group>
                    <Div>
                        <InfoRow title='Расстояние'>
                            distance
                            {/*                {this.props.distance}*/}
                        </InfoRow>
                    </Div>
                </Group>

            </Panel>
        )
    }
}


Info.propTypes = {

    /*
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        distance: PropTypes.number().isRequired,
    */
};






