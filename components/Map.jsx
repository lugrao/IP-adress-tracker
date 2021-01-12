import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import "leaflet-defaulticon-compatibility"
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'


const Map = ({ data }) => {
    const [ipData, setIpData] = React.useState({
        location: {
            lat: 55,
            lng: 55
        }
    });
    
    console.log(ipData.location);

    // React.useEffect(() => {
    //     setIpData(data);
    // }, [data])

    const position = [55, 55]
    return (
        <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: 400, width: "100%" }}
        >
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