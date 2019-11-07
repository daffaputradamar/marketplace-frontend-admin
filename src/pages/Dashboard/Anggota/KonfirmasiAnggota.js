import React from "react";
import { Table, Button } from "semantic-ui-react";

function Anggota() {
  return (
    <Table fixed celled textAlign="center">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width="2">Id</Table.HeaderCell>
          <Table.HeaderCell>Nama</Table.HeaderCell>
          <Table.HeaderCell>Bukti Bayar</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Id</Table.Cell>
          <Table.Cell>Tes Nama</Table.Cell>
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
