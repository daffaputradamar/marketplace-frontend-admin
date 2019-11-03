import React from 'react';
import { Table, Button } from 'semantic-ui-react';

function Anggota() {
	return (
		<Table fixed celled textAlign="center">
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Username</Table.HeaderCell>
					<Table.HeaderCell>Bukti Bayar</Table.HeaderCell>
					<Table.HeaderCell>Action</Table.HeaderCell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>dataUsername</Table.Cell>
					<Table.Cell>dataBukti</Table.Cell>
					<Table.Cell>
						<Button basic color="green">
							Konfirmasi
						</Button>
					</Table.Cell>
				</Table.Row>
			</Table.Header>
		</Table>
	);
}

export default Anggota;
