import React, { useContext, useState } from "react";
import axios from "axios";
import { Menu, Button, Container, Grid, Segment } from "semantic-ui-react";
import { UserContext } from "../../App";
import LogTransaksi from "./Transaksi/LogTransaksi";

function Dashboard() {
  const context = useContext(UserContext);
  const listActiveItem = {
    transaksi: "konfirmasiTransaksi"
  };

  const [activeItem, setActiveItem] = useState(listActiveItem.transaksi);

  const [kumpulanTransaksi, setKumpulanTransaksi] = useState([]);

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
          </Grid.Column>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Dashboard;
