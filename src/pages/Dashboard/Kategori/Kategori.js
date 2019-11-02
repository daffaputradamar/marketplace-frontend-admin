import React, { useContext, useState, useEffect } from "react";
import KategoriTambah from "./KategoriTambah";
import KategoriList from "./KategoriList";
import { UserContext, ENDPOINT } from "../../../App";
import axios from "axios";
import { Segment, Dimmer, Loader, Image } from "semantic-ui-react";

function Kategori(props) {
  const context = useContext(UserContext);
  const [kumpulanKategori, setKumpulanKategori] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${ENDPOINT}/kategori`, {
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
      .post(`${ENDPOINT}/kategori`, newKategori, {
        headers: { Authorization: `Bearer ${context.token}` }
      })
      .then(res => {
        console.log(res.data);
        setKumpulanKategori([...kumpulanKategori, res.data]);
      });
  }

  function deleteKategori(id) {
    console.log(id);
    axios.delete(`${ENDPOINT}/kategori/${id}`).then(res => {
      const newKumpulanKategori = kumpulanKategori.filter(
        kategori => kategori.id_kategori != id
      );
      setKumpulanKategori(newKumpulanKategori);
    });
  }

  return (
    <React.Fragment>
      {!loading ? (
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
      )}
    </React.Fragment>
  );
}

export default Kategori;
