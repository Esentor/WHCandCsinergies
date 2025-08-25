// pages/index.js
import unitsData from '../data/units.json';
import lordsData from '../data/warlords.json';

export default function SynergyTable() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Warhammer Synergy Table</h1>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '100%',
          border: '1px solid #ddd',
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: '1px solid #ddd',
                padding: '8px',
                backgroundColor: '#f2f2f2',
              }}
            >
              Unit / Warlord
            </th>
            {lordsData.map((lord) => (
              <th
                key={lord.id}
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  backgroundColor: '#f2f2f2',
                }}
              >
                {lord.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {unitsData.map((unit) => (
            <tr key={unit.id}>
              <td
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  fontWeight: 'bold',
                }}
              >
                {unit.name}
              </td>
              {lordsData.map((lord) => (
                <td
                  key={`${unit.id}-${lord.id}`}
                  style={{
                    border: '1px solid #ddd',
                    padding: '8px',
                  }}
                >
                  {/* Empty cell, just showing the grid */}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
