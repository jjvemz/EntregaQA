import React from "react";
import { List, Button, Table } from "antd";
import moment from "moment";
import { EditOutlined } from "@ant-design/icons";
import "./BillList";
export default function BillList(props) {
  console.log("factura de lista", props);
  const { bills, editBill } = props;

  return (
    <div className="posts-list">
      <List
        dataSource={bills.docs}
        renderItem={(bill, index) => (
          <Bill bill={bill} index={index} editBill={editBill} />
        )}
      />
    </div>
  );
}

function Bill(props) {
  const { bill, editBill, index } = props;

  const columns = [
    {
      title: "Precio unitario",
      dataIndex: "punit",
    },
    {
      title: "Detalle",
      dataIndex: "detail",
    },
    {
      title: "Cantidad",
      dataIndex: "cant",
    },
  ];
  const data = [];
  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => editBill(bill)}>
          <EditOutlined />
        </Button>,
      ]}
    >
      <List.Item.Meta
        title={
          <p key={index}>
            RUT: <span>{bill.rut}</span>
          </p>
        }
        description={
          <>
            <p key={index}>
              Fecha: <span>{moment(bill.fecha).format("DD/MM/YYYY")}</span>
            </p>
            <p key={index}>
              Telefono: <span>{bill.telefono}</span>
            </p>
            <p key={index}>
              {bill.billRef.map((balance, x) => (
                <table>
                  <tr>
                    <th> Precio Unitario </th>
                    <th> Detalle </th>
                    <th> Cantidad </th>
                  </tr>
                  <tr>
                    <th key={x}> {balance.punitary} </th>
                    <th key={x}> {balance.detail} </th>
                    <th key={x}> {balance.cant} </th>
                  </tr>
                </table>
              ))}
            </p>
          </>
        }
      />
    </List.Item>
  );
}

/*   <li key={index}> {balance.punitary} </li>
                  <li key={index}> {balance.detail} </li>
                  <li key={index}> {balance.cant} </li>
                */
