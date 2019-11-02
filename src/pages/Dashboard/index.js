import React, { useContext, useState } from "react";
import axios from "axios";
import { Menu, Button, Container, Grid, Segment } from "semantic-ui-react";
import { UserContext } from "../../App";
import LogTransaksi from "./Transaksi/LogTransaksi";
import Kategori from "./Kategori/Kategori";

function Dashboard() {
  const context = useContext(UserContext);
  const listActiveItem = {
    transaksi: "konfirmasiTransaksi",
    kategori: "kategoriTransaksi"
  };

  const [activeItem, setActiveItem] = useState(listActiveItem.kategori);

  return (
    <React.Fragment>
      <Menu>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button onClick={context.logout}>Logout</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Container>
        <Grid>
          <Grid.Column width={4}>
            <Menu vertical>
              <Menu.Item>
                <Menu.Header>Transaksi</Menu.Header>

                <Menu.Menu>
                  <Menu.Item
                    name="Konfirmasi Transaksi"
                    active={activeItem === listActiveItem.transaksi}
                    onClick={event => setActiveItem(listActiveItem.transaksi)}
                  />
                </Menu.Menu>
              </Menu.Item>
              <Menu.Item>
                <Menu.Header>Kategori</Menu.Header>

                <Menu.Menu>
                  <Menu.Item
                    name="Katrgori Produk"
                    active={activeItem === listActiveItem.kategori}
                    onClick={event => setActiveItem(listActiveItem.kategori)}
                  />
                </Menu.Menu>
              </Menu.Item>
              <Menu.Item disabled>
                <Menu.Header>Iuran</Menu.Header>
                <Menu.Menu>
                  <Menu.Item name="Iuran Wajib" />
                </Menu.Menu>
                <Menu.Menu>
                  <Menu.Item name="Iuran Bulanan" />
                </Menu.Menu>
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column stretched width={12}>
            {activeItem === listActiveItem.transaksi && <LogTransaksi />}
            {activeItem === listActiveItem.kategori && <Kategori />}
          </Grid.Column>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Dashboard;
