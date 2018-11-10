import React from 'react';

import { Panel, Group, PanelHeader, Div, Link,HeaderButton, platform, IOS} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';


export class AboutPanel extends React.Component {

    render() {
        const osname = platform();

        return (
            <Panel id={this.props.id}>
                <PanelHeader
                    left={<HeaderButton onClick={this.props.go} data-to="home">
                        {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                    </HeaderButton>}
                >
                    О программе
                </PanelHeader>
                <Group title="Исходный код">
                    <Div>
                        Исходный код доступен на <Link href="https://github.com/rinatsp/zadenujkoy/branches" target="_blank">GitHub</Link>.
                        <br/>
                        <br/>
                        Документация <Link href="https://vk.com/dev/vk_apps_docs" target="_blank">VK Apps платформы</Link>.
                    </Div>
                </Group>

            </Panel>
        );
    }
}

