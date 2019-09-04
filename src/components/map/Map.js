import React, { useState } from 'react';
import './Map.css'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';


export const pointerIcon = new L.Icon({
    iconUrl: require('../../assets/person-pin.svg'),
    iconRetinaUrl: require('../../assets/person-pin.svg'),
    iconAnchor: [0, 0],
    popupAnchor: [15, 0],
    iconSize: [30, 30],
    shadowUrl: '../../assets/marker-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [0, 0],
  })

function Map() {

    const pos = {
        lat: 3.427948,
        lng: -76.520851,
        zoom: 13,
    }

    return (
        <LeafletMap className="map" center={[pos.lat,pos.lng]} zoom={pos.zoom}>
            <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[3.439269,-76.525011]} icon={pointerIcon} onClick={() => console.log("Click!!")}>
                <Popup>
                    <div>
                        <p>Hola Mundo</p>
                    </div>
                </Popup>
            </Marker>
        </LeafletMap>
    )
}

export default Map;