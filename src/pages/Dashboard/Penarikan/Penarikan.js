import React from 'react';
import { Table } from 'semantic-ui-react';

function Penarikan() {
	return (
		<Table fixed celled textAlign="center">
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Invoice</Table.HeaderCell>
					<Table.HeaderCell>Username</Table.HeaderCell>
					<Table.HeaderCell>Jumlah</Table.HeaderCell>
					<Table.HeaderCell>Tanggal</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell>dataInvoice</Table.Cell>
					<Table.Cell>dataUsername</Table.Cell>
					<Table.Cell>dataJumlah</Table.Cell>
					<Table.Cell>dataTanggal</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table>
	);
}

export default Penarikan;
