import React, { useState, useEffect } from "react";
import { Table, Segment, Dimmer, Loader, Image } from "semantic-ui-react";
import axios from "axios";
import { HOSTNAME } from "../../../App";

function Anggota() {
  const [kumpulanPengguna, setkumpulanPengguna] = useState([]);
  const [kumpulanAnggota, setKumpulanAnggota] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`${HOSTNAME}/pengguna`).then(res => {
      setkumpulanPengguna(res.data);
      const anggotas = res.data.filter(anggota => anggota.keanggotaan);
      setKumpulanAnggota(anggotas);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Segment>
      <Dimmer active inverted>
        <Loader inverted content="Loading" />
      </Dimmer>

      <Image src="/images/wireframe/short-paragraph.png" />
    </Segment>
  ) : (
    <Table fixed celled textAlign="center">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width="2">Id</Table.HeaderCell>
          <Table.HeaderCell>Nama</Table.HeaderCell>
          <Table.HeaderCell>Username</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {kumpulanAnggota.map(anggota => {
          return (
            <Table.Row>
              <Table.Cell>{anggota.id_pengguna}</Table.Cell>
              <Table.Cell>{anggota.nama}</Table.Cell>
              <Table.Cell>{anggota.username}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}

export default Anggota;
