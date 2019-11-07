import React, { useState } from "react";
import { Form, Button, Input, Header, Grid } from "semantic-ui-react";

function KategoriTambah(props) {
  const [namaKategori, setNamaKategori] = useState("");

  function addKategori(e) {
    props.addKategori(namaKategori);
    setNamaKategori("");
  }

  return (
    <React.Fragment>
      <Header as="h2">Kategori</Header>
      <Grid>
        <Grid.Column width={12}>
          <Form.Field>
            <Input
              fluid
              placeholder="Kategori"
              value={namaKategori}
              onChange={e => setNamaKategori(e.target.value)}
            />
          </Form.Field>
        </Grid.Column>
        <Grid.Column width={4}>
          <Button fluid onClick={addKategori}>
            Tambah
          </Button>
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
}

const styles = {
  marginCard: {
    marginTop: "15px"
  },
  linkPosition: {
    position: "relative",
    left: "74%",
    fontSize: "15px"
  },
  buttonPosition: {
    position: "relative",
    top: "610%",
    left: "76%",
    transform: "translate(-76%,-610%)"
  }
};

export default KategoriTambah;
