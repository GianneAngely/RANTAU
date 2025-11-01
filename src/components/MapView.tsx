import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import { Kost } from "@/data/kosts";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

interface MapViewProps {
  kosts: Kost[];
  center?: [number, number];
  zoom?: number;
  onKostClick?: (kost: Kost) => void;
}

const maroonIcon = new Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function MapController({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);
  return null;
}

export default function MapView({
  kosts,
  center = [-8.65, 115.22],
  zoom = 12,
  onKostClick,
}: MapViewProps) {
  return (
    <div className="h-full w-full rounded-2xl overflow-hidden shadow-lg">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapController center={center} />
        {kosts.map((kost) => (
          <Marker
            key={kost.id}
            position={kost.coords}
            icon={maroonIcon}
            eventHandlers={{
              click: () => {
                if (onKostClick) onKostClick(kost);
              },
            }}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-[#B7262B]">{kost.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{kost.address}</p>
                <p className="text-sm font-semibold text-[#B7262B]">
                  {kost.price}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
