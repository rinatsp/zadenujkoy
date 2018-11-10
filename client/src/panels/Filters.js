import {
    Panel,
    PanelHeader,
    HeaderButton,
    platform,
    IOS,
    FormLayout,
    Input,
    Select,
    Slider,
} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import React from "react";
import PropTypes from "prop-types";


export class Filters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePanel: 'filter',
            fetchedUser: null,
            value2: 0.2
        };
    }

    osname = platform();

    render() {
        return (
            <Panel id={this.props.id}>
                <PanelHeader
                    left={<HeaderButton onClick={this.props.go} data-to="home">
                        {this.osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                    </HeaderButton>}
                >
                    Фильтры поиска
                </PanelHeader>

                <br/>

                <FormLayout>
                    <Input type="text" top="Название банка:"/>
                    <Select top="Тип устройства:" placeholder="АТМ, терминал, касса">
                        <option value="atm">АТМ</option>
                        <option value="terminal">Терминал</option>
                        <option value="shop">Касса</option>
                    </Select>
                    <Slider
                        step={0.2}
                        min={0.2}
                        max={10}
                        value={Number(this.state.value2)}
                        onChange={value2 => this.setState({value2})}
                        top="Расстояние до банкомата (км):"
                    />

                    <Input value={String(this.state.value2)} onChange={e => this.setState({value2: e.target.value})}/>


                </FormLayout>

            </Panel>
        );
    }
}

Filters.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};