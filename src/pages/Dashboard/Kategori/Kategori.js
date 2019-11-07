import React, { useContext, useState, useEffect } from "react";
import KategoriTambah from "./KategoriTambah";
import KategoriList from "./KategoriList";
import { UserContext, HOSTNAME } from "../../../App";
import axios from "axios";
import { Segment, Dimmer, Loader, Image } from "semantic-ui-react";

function Kategori(props) {
  const context = useContext(UserContext);
  const [kumpulanKategori, setKumpulanKategori] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${HOSTNAME}/kategori`, {
        headers: { Authorization: `Bearer ${context.token}` }
      })
      .then(res => {
        setKumpulanKategori(res.data);
        setLoading(false);
      });
  }, []);

  function addKategori(kategori) {
    const newKategori = {
      nama_kategori: kategori
    };
    axios
      .post(`${HOSTNAME}/kategori`, newKategori, {
        headers: { Authorization: `Bearer ${context.token}` }
      })
      .then(res => {
        console.log(res.data);
        setKumpulanKategori([...kumpulanKategori, res.data]);
      });
  }

  function deleteKategori(id) {
    console.log(id);
    axios.delete(`${HOSTNAME}/kategori/${id}`).then(res => {
      const newKumpulanKategori = kumpulanKategori.filter(
        kategori => kategori.id_kategori != id
      );
      setKumpulanKategori(newKumpulanKategori);
    });
  }

  return !loading ? (
    <>
      <KategoriTambah addKategori={addKategori} />
      <KategoriList
        deleteKategori={deleteKategori}
        kumpulanKategori={kumpulanKategori}
      />
    </>
  ) : (
    <Segment>
      <Dimmer active inverted>
        <Loader inverted content="Loading" />
      </Dimmer>
    </Segment>
  );
}

export default Kategori;
