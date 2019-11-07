import React, { useContext, useState } from "react";
import axios from "axios";
import { Menu, Button, Container, Grid, Segment } from "semantic-ui-react";
import { UserContext } from "../../App";
import LogTransaksi from "./Transaksi/LogTransaksi";
import Kategori from "./Kategori/Kategori";
import Penarikan from "./Penarikan/Penarikan";
import KonfirmasiPenarikan from "./Penarikan/KonfirmasiPenarikan";
import Anggota from "./Anggota/Anggota";
import KonfirmasiAnggota from "./Anggota/KonfirmasiAnggota";

function Dashboard() {
  const context = useContext(UserContext);
  const listActiveItem = {
    transaksi: "konfirmasiTransaksi",
    kategori: "kategoriTransaksi",
    penarikan: "penarikan",
    konfirmasiPenarikan: "konfirmasiPenarikan",
    anggota: "anggota",
    konfirmasiAnggota: "konfirmasiAnggota"
  };

  const [activeItem, setActiveItem] = useState(listActiveItem.anggota);

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
                <Menu.Header>Anggota</Menu.Header>
                <Menu.Menu>
                  <Menu.Item
                    name="Konfirmasi Anggota"
                    active={activeItem === listActiveItem.konfirmasiAnggota}
                    onClick={event =>
                      setActiveItem(listActiveItem.konfirmasiAnggota)
                    }
                    disabled
                  />
                  <Menu.Menu>
                    <Menu.Item
                      name="Daftar Anggota"
                      active={activeItem === listActiveItem.anggota}
                      onClick={event => setActiveItem(listActiveItem.anggota)}
                    />
                  </Menu.Menu>
                </Menu.Menu>
              </Menu.Item>
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
                    name="Kategori Produk"
                    active={activeItem === listActiveItem.kategori}
                    onClick={event => setActiveItem(listActiveItem.kategori)}
                  />
                </Menu.Menu>
              </Menu.Item>
              <Menu.Item disabled>
                <Menu.Header>Iuran</Menu.Header>
                <Menu.Menu>
                  <Menu.Item name="Iuran Pokok" disabled />
                </Menu.Menu>
                <Menu.Menu>
                  <Menu.Item name="Iuran Wajib" disabled />
                </Menu.Menu>
                <Menu.Menu>
                  <Menu.Item name="Iuran Sukarela" disabled />
                </Menu.Menu>
              </Menu.Item>
              <Menu.Item disabled>
                <Menu.Header>Penarikan</Menu.Header>
                <Menu.Menu>
                  <Menu.Item
                    name="Konfirmasi Penarikan"
                    active={activeItem === listActiveItem.konfirmasiPenarikan}
                    onClick={event =>
                      setActiveItem(listActiveItem.konfirmasiPenarikan)
                    }
                    disabled
                  />
                </Menu.Menu>
                <Menu.Menu>
                  <Menu.Item
                    name="Daftar Penarikan"
                    active={activeItem === listActiveItem.penarikan}
                    onClick={event => setActiveItem(listActiveItem.penarikan)}
                    disabled
                  />
                </Menu.Menu>
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column stretched width={12}>
            {activeItem === listActiveItem.konfirmasiAnggota && (
              <KonfirmasiAnggota />
            )}
            {activeItem === listActiveItem.anggota && <Anggota />}
            {activeItem === listActiveItem.transaksi && <LogTransaksi />}
            {activeItem === listActiveItem.kategori && <Kategori />}
            {activeItem === listActiveItem.penarikan && <Penarikan />}
            {activeItem === listActiveItem.konfirmasiPenarikan && (
              <KonfirmasiPenarikan />
            )}
          </Grid.Column>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Dashboard;
