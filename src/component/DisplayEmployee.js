import { useState, useEffect } from 'react';

export default function Employee() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/employee")
      .then(res => res.json())
      .then(data => {
        setEmployees(data);
        setLoading(false);
      })
      .catch(e => console.log(e));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Employee List</h1>
      <table className="table table-bordered data-table ">
        <thead>
          <tr>
          <th>Id</th>
            <th>Name</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
            <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
