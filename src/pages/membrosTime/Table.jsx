import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  recuperaUsuariosDoTime,
  removeUsuarioDoTime,
} from "../../services/Api";
import { Button } from "primereact/button";

const DataTableTime = () => {
  let { idTime } = useParams();
  useEffect(() => {
    obterUsuarios();
  }, []);

  const [usuarios, setUsuarios] = useState([]);
  const obterUsuarios = async () => {
    const response = await recuperaUsuariosDoTime(idTime);
    setUsuarios(response);
  };

  const removerUsuario = async (email) => {
    const emailLogado = localStorage.getItem("email");
    if (emailLogado !== email) {
      await removeUsuarioDoTime(email);
    }
    window.location.reload();
  };
  const actionBodyTemplate = (rowData) => {
    return (
      <Button
        type="button"
        label="Remover"
        onClick={() => removerUsuario(rowData.email)}
      ></Button>
    );
  };

  return (
    <div>
      <div className="card">
        <DataTable value={usuarios.data} stripedRows responsiveLayout="scroll">
          <Column field="nome" header="Nome"></Column>
          <Column field="email" header="E-mail"></Column>
          <Column
            headerStyle={{ width: "4rem", textAlign: "center" }}
            bodyStyle={{ textAlign: "center", overflow: "visible" }}
            body={actionBodyTemplate}
          />
        </DataTable>
      </div>
    </div>
  );
};

export default DataTableTime;
