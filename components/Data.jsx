import React, { useEffect, useState } from 'react';
import tleData from '/public/data/TLE_Light.json';
// Function to format TLE data (array) into a table
function formatTLEData() {
  const transformedData = Object.keys(tleData).map(key => ({
    name: key,
    tle1: tleData[key].tle[0],
    tle2: tleData[key].tle[1],
    color: tleData[key].color,
  }));
  // Generate table rows from the TLE data
  const rows = Object.keys(tleData).map(key => (
    <tr>
      <td className="border px-4 py-2">{key}</td>
      <td className="border px-4 py-2 whitespace-pre-wrap">{tleData[key].tle[0]}<br/>{tleData[key].tle[1]}</td>
    </tr>
  ));

  // Return the complete table
  return (
    <table className="table-auto w-full text-white text-left text-sm">
      <thead>
        <tr>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">TLE</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

// Data component to display the formatted TLE data
export default function Data({ tleData, onLoad }) {
  useEffect(() => {
    if (onLoad) {
      onLoad();
    }
  }, [onLoad]);

  return <div>{formatTLEData(tleData)}</div>;
}
