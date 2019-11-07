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
      <Header as="h2" style={{marginBottom:-250}}>Kategori</Header>
      <Grid style={{marginBottom:-250}}>
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

export default KategoriTambah;
