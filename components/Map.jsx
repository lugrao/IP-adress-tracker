import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import "leaflet-defaulticon-compatibility"
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

const Map = ({ data }) => {
    
    const [ipData, setIpData] = React.useState({
        location: {
            lat: 55,
            lng: 55
        }
    });

    React.useEffect(() => {
        if (data) setIpData(data);
    }, [data]);

    const position = [ipData.location.lat, ipData.location.lng]

    return (
        <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: 400, width: "100%" }}
        >
            <ChangeView center={position} zoom={13} />
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
        </MapContainer>)
}

export default Map