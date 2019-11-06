import React from 'react';
import { Table } from 'semantic-ui-react';

function Anggota() {
	return (
		<Table fixed celled textAlign="center">
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Username</Table.HeaderCell>
					<Table.HeaderCell>Tanggal Terdaftar</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell>dataUsername</Table.Cell>
					<Table.Cell>dataTanggal</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table>
	);
}

export default Anggota;
