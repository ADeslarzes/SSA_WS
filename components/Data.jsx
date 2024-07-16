import React, { useEffect } from 'react';

// Function to format TLE data (array) into a table
function formatTLEData(tleData) {
  // Generate table rows from the TLE data
  const rows = Object.keys(tleData).map((name, index) => (
    <tr key={index}>
      <td className="border px-4 py-2">{name}</td>
      <td className="border px-4 py-2 whitespace-pre-wrap">
        {tleData[name].tle[0]}<br />{tleData[name].tle[1]}
      </td>
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
