import React, { useState, useContext, useEffect } from "react";
import { Table, Button, Header, Grid, Icon } from "semantic-ui-react";
import KonfirmasiPenarikanItem from "./KonfirmasiPenarikanItem";
import axios from "axios";
import { UserContext, HOSTNAME } from "../../../App";

function Penarikan() {
  const context = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [kumpulanPenarikan, setKumpulanPenarikan] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios.get(`${HOSTNAME}/penarikan/unconfirmed`).then(res => {
      setKumpulanPenarikan(res.data);
      setLoading(false);
    });
  }, []);

  function onConfirmClick(id) {
    axios
      .put(
        `${HOSTNAME}/penarikan/${id}/konfirmasi`,
        {},
        {
          headers: { Authorization: `Bearer ${context.token}` }
        }
      )
      .then(() => {
        axios.get(`${HOSTNAME}/penarikan/unconfirmed`).then(res => {
          setKumpulanPenarikan(res.data);
        });
      });
  }
  return kumpulanPenarikan.length ? (
    kumpulanPenarikan.map(penarikan => {
      const dateTime = new Date(penarikan.createdAt);
      const date = dateTime.getDate();
      const month = dateTime.getMonth() + 1;
      const year = dateTime.getFullYear();
      const hour = dateTime.getHours();
      const minutes = dateTime.getMinutes();
      return (
        <KonfirmasiPenarikanItem
		  key={penarikan.id_penarikan}
		  idPenarikan={penarikan.id_penarikan}
          noRek={penarikan.no_rek}
          atasNama={penarikan.atas_nama}
          tglPenarikan={`${date}-${month}-${year} ${hour}:${minutes}`}
          jumlah={penarikan.jumlah}
		  konfirmasi={penarikan.konfirmasi}
		  onConfirmClick={onConfirmClick}
        />
      );
    })
  ) : (
    <p>Penarikan kosong</p>
  );
}

export default Penarikan;
