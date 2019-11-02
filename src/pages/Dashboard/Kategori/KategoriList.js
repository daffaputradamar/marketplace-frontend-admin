import React from "react";
import { Table, Button, Header } from "semantic-ui-react";

function KategoriList(props) {
  return props.kumpulanKategori.length !== 0 ? (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Nama Kategori</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.kumpulanKategori.map(kategori => {
          return (
            <Table.Row key={kategori.id_kategori}>
              <Table.Cell>{kategori.nama_kategori}</Table.Cell>
              <Table.Cell>
                <Button
                  basic
                  color="red"
                  onClick={props.deleteKategori.bind(
                    this,
                    kategori.id_kategori
                  )}
                >
                  Hapus
                </Button>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  ) : (
    <Header as="h2">Kategori kosong</Header>
  );
}

export default KategoriList;
