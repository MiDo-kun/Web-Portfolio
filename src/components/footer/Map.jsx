import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';

const Location = () => {
  const position = [6.632264, 124.597816];
  const laptopMarker = L.icon({
    iconUrl: './laptop.gif',
    iconSize: [40, 40],
    popupAnchor: [0, -20],
  })

  const marker = useRef(null);
  return (
    <div
      className="w-[370px] h-[312px] tablet-md:w-full mobile-lg:mb-2 mobile-lg:h-[300px] mobile-md:h-[270px] mobile-xs:h-[250px]">

      <MapContainer whenReady={() => {
        setTimeout(() => {
          marker.current.openPopup();
        }, 3000);
      }} center={position} zoom={6} scrollWheelZoom={false} style={{ zIndex: 0 }} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker ref={marker} position={position} icon={laptopMarker}>
          <Popup maxWidth={250}>
            Hi! <img src='./wave.gif' width='15' height='15' className='inline-block mb-1 mr-1' /> are you interested where I live?
            You can find me here!
          </Popup>
        </Marker>
      </MapContainer >

    </div>
  )
}

export default Location;