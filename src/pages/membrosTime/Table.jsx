import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { recuperaUsuariosDoTime } from "../../services/Api";

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
  return (
    <div>
      <div className="card">
        <DataTable value={usuarios.data} responsiveLayout="scroll">
          <Column field="nome" header="Nome"></Column>
          <Column field="email" header="E-mail"></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default DataTableTime;
