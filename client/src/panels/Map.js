import React from "react";
import * as mapboxgl from "mapbox-gl";
import * as MapboxLanguage from "@mapbox/mapbox-gl-language"

export class Map extends React.Component {
    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoicmluYXRzcCIsImEiOiJjam9hYTNiZmYxaXZiM3FvMTZpMGc2aGxlIn0.S9R4ES8XTP44L-NZNg00Mg';
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v10',
            touchZoomRotate: true,
            zoom: 7
        });
        this.map.addControl(new MapboxLanguage({
            defaultLanguage: 'ru'
        }));
    }

    componentWillUnmount() {
        this.map.remove();
    }

    style = {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100%'
    };

    render() {
             return <div style={this.style} ref={el => this.mapContainer = el} />;
    }
}
