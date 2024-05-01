"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

/**
 * Props for `Map`.
 */
export type MapProps = SliceComponentProps<Content.MapSlice>;

/**
 * Component for "Map" Slices.
 */
const Map = ({ slice }: MapProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <MapContainer
        style={{ height: "100vh" }}
        zoom={13}
        scrollWheelZoom={true}
        center={[
          slice.primary.coordinates.longitude,
          slice.primary.coordinates.latitude,
        ]}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </section>
  );
};

export default Map;
