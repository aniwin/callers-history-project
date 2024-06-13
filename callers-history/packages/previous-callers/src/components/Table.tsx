// src/components/Table.tsx
import React from "react";

const Table: React.FC = () => {
  return (
    <div className="max-w-4xl overflow-x-auto">
      <table className="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Time of Interaction</th>
            <th>Client Type</th>
            <th>Client Search</th>
            <th>Reference Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mr. Sandeep Clark</td>
            <td>10/03/2024 9.25am</td>
            <td>Private Individual</td>
            <td>Client Search</td>
            <td>1003333330</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
