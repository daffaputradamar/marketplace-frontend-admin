import React, { useState } from "react";
import {
  Container,
  Accordion,
  Icon,
  Grid,
  Header,
  Segment,
  Button
} from "semantic-ui-react";

function KonfirmasiIklan(props) {
  const [activeIndex, setActiveIndex] = useState(null);
  console.log(props);

  function handleClick(event, titleProps) {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  }
  return (
    <Container>
      <Segment style={styles.verticalSpace}>
        <Grid columns={3} celled verticalAlign="middle" textAlign="center">
          <Grid.Column width={5} textAlign="left">
            <Header size="medium">
              <Header.Content style={styles.h2}>Nama Usaha</Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header size="huge">
              <Header.Content>
                <Header.Subheader>Jumlah Hari Pengiklanan :</Header.Subheader>
                30 Hari
              </Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Column width={5}>
            <Button basic color="green">
              Konfirmasi Pengiklanan
            </Button>
          </Grid.Column>
        </Grid>
        <Accordion fluid styled>
          <Accordion.Title
            active={activeIndex === 4}
            index={4}
            onClick={handleClick}
          >
            <Icon name="dropdown" />
            Bukti Transaksi
          </Accordion.Title>

          <Accordion.Content active={activeIndex === 4}>
            Gambare
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={handleClick}
          >
            <Icon name="dropdown" />
            Gambar Produk
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            Gambare
          </Accordion.Content>
        </Accordion>
      </Segment>
    </Container>
  );
}

export default KonfirmasiIklan;

const styles = {
  box: {
    width: "100%",
    display: "flex",
    flexDirection: "row"
  },
  boxColon: {
    marginLeft: 10
  },
  boxValue: {
    marginLeft: 10
  },
  titleMargin: {
    marginLeft: 18,
    padding: 0
  },
  date: {
    marginLeft: 18,
    padding: 0
  },
  floatRight: {
    textAlign: "right"
  },
  verticalSpace: {
    marginBottom: 20
  },
  h2: {
    padding: 10
  }
};
