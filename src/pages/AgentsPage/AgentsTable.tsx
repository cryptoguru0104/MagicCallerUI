import React from 'react'
import { MDBBtn, MDBIcon } from 'mdbreact'
import objectPath from 'object-path'

type Props = {
  data: Agent[]
  onEdit(agent: Agent): void
  onDelete(agent: Agent): void
}

const AgentsTable: React.FC<Props> = ({ data, onEdit, onDelete }) => (
  <React.Fragment>
    {data.map(row => (
      <tr key={row.id}>
        <td>{row.name}</td>
        <td>{objectPath.get(row, 'Integration.partner')}</td>
        <td>{row.phone}</td>
        <td>
          <MDBBtn
            size="sm"
            color="success"
            className="m-0 mr-2"
            floating
            onClick={() => {
              onEdit(row)
            }}
          >
            <MDBIcon icon="pen" size="sm" />
          </MDBBtn>

          <MDBBtn
            size="sm"
            color="danger"
            className="m-0"
            onClick={() => {
              onDelete(row)
            }}
            floating
          >
            <MDBIcon icon="trash" size="sm" />
          </MDBBtn>
        </td>
      </tr>
    ))}
  </React.Fragment>
)

export default AgentsTable
