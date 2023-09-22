import { useEffect } from 'react';
import '@openglobus/og/css/og.css';
import './App.css';
import { XYZ, Globe, GlobusTerrain } from '@openglobus/og';

export const App = () => {
  useEffect(() => {
    const osm = new XYZ("OpenStreetMap", {
      isBaseLayer: true,
      url: "//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      visibility: true,
    });
    const globus = new Globe({
      target: "globus", // a HTMLDivElement which its id is `globus`
      name: "Earth",
      terrain: new GlobusTerrain(),
      layers: [osm],
      autoActivate: true,
      fontsSrc: "../res/fonts",  // Fonts folder
      resourcesSrc: "../res",    // Night and water mask terxtures folder
      viewExtent: [5.56707, 45.15679, 5.88834, 45.22260]
    });
  }, []);
  return (
    <div id="globus" className="Openglobus-map"></div>
  );
}
