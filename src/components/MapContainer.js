import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import mapStyle from '../data/mapStyle.json';

class MapContainer extends Component {

    onMarkerClick(props, marker, e) {
        console.log(marker);
    }

    mapLoaded(mapProps, map) {
        map.setOptions({
            styles: mapStyle.style
        })
    };

    render() {
        const style = {
            height: 516
        };

        const containerStyle = {
            position: 'relative',  
            width: '100%',
            height: '100%'
        };

        const coords = { lat: 43.986997, lng: 22.878174 };

        return (
            <Map 
                google={this.props.google} 
                initialCenter={coords}
                zoom={19} style={style} 
                containerStyle={containerStyle}
                onReady={(mapProps, map) => this.mapLoaded(mapProps, map)}
                >
                <Marker onClick={this.onMarkerClick.bind(this)} name='DNA' title='Studio Location' />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB4f_0GEJNU0HRmtnyttvbFRdOVFoUEMgU'
})(MapContainer)