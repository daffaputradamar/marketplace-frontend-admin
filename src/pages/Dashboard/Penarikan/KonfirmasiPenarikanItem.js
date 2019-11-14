import React from 'react'
import { Button, Header,Grid,Icon, Segment, Container } from "semantic-ui-react";

function KonfirmasiPenarikanItem(props) {
    return (
        <Container>

        <Grid columns={3} celled textAlign="center" verticalAlign="middle">
          <Grid.Column width={8} textAlign="left">
            <Header>{props.tglPenarikan}</Header>
            <Header size="medium">
              <Icon name="file alternate outline" />
              <Header.Content>
                {props.noRek}
                <Header.Subheader>{props.atasNama}</Header.Subheader>
              </Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header size="huge">
              <Header.Content>
                <Header.Subheader>Jumlah Penarikan : </Header.Subheader>
                Rp. {props.jumlah}
              </Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Column width={3}>
          <Button basic color="green" onClick={props.onConfirmClick.bind(this, props.idPenarikan)}>
            Konfirmasi Penarikan
          </Button>
          </Grid.Column>
        </Grid>
        </Container>
      );
}

export default KonfirmasiPenarikanItem
