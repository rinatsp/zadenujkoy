import React from 'react';
import PropTypes from 'prop-types';
import {Panel, ListItem, Group, Avatar, PanelHeader, Button, Tabs, TabsItem, FixedLayout} from '@vkontakte/vkui';
import {Map} from "./Map";


const Home = props => (
	<Panel id={props.id} style={{ width: '100%', height: '100%'}}>
		<PanelHeader>КэшЛокатор</PanelHeader>

		{props.fetchedUser &&
		<Group title="User Data Fetched with VK Connect">
			<ListItem
				before={<Avatar src={props.fetchedUser.photo_200}/>}
				description={props.fetchedUser.city.title}
			>
				{`${props.fetchedUser.first_name} ${props.fetchedUser.last_name}`}
			</ListItem>
		</Group>
		}

		<Map />

        <FixedLayout vertical="bottom" id={props.id}>
            <Tabs>
                <TabsItem>
                    <Button size="xl" level="2" onClick={props.go} data-to="filter" >
                        FILTERS
                    </Button>
                </TabsItem>
                <TabsItem>
                    <Button size="xl" level="2" onClick={props.go} data-to="aboutpanel">
                        ABOUT
                    </Button>
                </TabsItem>
            </Tabs>
        </FixedLayout>


	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};




export default Home;
