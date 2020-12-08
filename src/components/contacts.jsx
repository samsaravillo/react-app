import React from "react";
import { Table } from "reactstrap";

const Contacts = ({ contacts }) => {
  return (
    <div>
      <center>
        <h4>Contact List Sample</h4>
      </center>
      <div>
        {contacts.map((contact) => (
          <div className="card" key={contact.id}>
            <div className="card-body">
              <h5 className="card-title">{contact.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
              <p className="card-text">{contact.company.catchPhrase}</p>
            </div>
          </div>
        ))}
      </div>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Contacts;
