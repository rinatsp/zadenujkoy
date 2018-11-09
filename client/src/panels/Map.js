import ReactMapGL from 'react-map-gl';
import React from "react";

export class Map extends React.Component {

    state = {
        viewport: {
            width: '100%',
            height: '95.5vmin',
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8,
        }
    };

    render = () => {
        return (
            <ReactMapGL
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
                mapboxApiAccessToken={'pk.eyJ1IjoicmluYXRzcCIsImEiOiJjam9hYTNiZmYxaXZiM3FvMTZpMGc2aGxlIn0.S9R4ES8XTP44L-NZNg00Mg'}
            />);
    }
}
