import React, { useState, useEffect } from "react";
import { Row, Col, Form, Input, Button, DatePicker, notification } from "antd";
import moment from "moment";
import { getAccessTokenApi } from "../../api/auth";
import { addBillApi, updateBillApi } from "../../api/bill";

export default function AddEditBillForm(props) {
  const { setIsVisibleModal, setReloadBills, bill } = props;
  const [billData, setBillData] = useState({});

  useEffect(() => {
    if (bill) {
      setBillData(bill);
    } else {
      setBillData({});
    }
  }, [bill]);

  const processBill = (e) => {
    e.preventDefault();

    if (!bill) {
      addBill();
    } else {
      updateBill();
    }
  };

  const addBill = () => {
    const token = getAccessTokenApi();

    addBillApi(token, billData)
      .then((response) => {
        const typeNotification = response.code === 200 ? "success" : "warning";
        notification[typeNotification]({
          message: response.message,
        });
        setIsVisibleModal(false);
        setReloadBills(true);
        setBillData({});
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor.",
        });
      });
  };

  const updateBill = () => {
    const token = getAccessTokenApi();
    updateBillApi(token, bill._id, billData)
      .then((response) => {
        const typeNotification = response.code === 200 ? "success" : "warning";
        notification[typeNotification]({
          message: response.message,
        });
        setIsVisibleModal(false);
        setReloadBills(true);
        setBillData({});
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor.",
        });
      });
  };

  return (
    <div className="add-edit-post-form">
      <AddEditForm
        billData={billData}
        setBillData={setBillData}
        bill={bill}
        processBill={processBill}
      />
    </div>
  );
}

function AddEditForm(props) {
  const { billData, setBillData, bill, processBill } = props;

  return (
    <Form className="add-edit-post-form" layout="inline" onSubmit={processBill}>
      <Row gutter={24}>
        <Col span={8}>
          <Input
            placeholder="Titulo"
            value={billData.rut}
            onChange={(e) => setBillData({ ...billData, rut: e.target.value })}
          />
        </Col>
        <Col span={8}>
          <Input
            placeholder="url"
            value={billData.giro}
            onChange={(e) =>
              setBillData({
                ...billData,
                giro: e.target.value,
              })
            }
          />
        </Col>
        <Col span={8}>
          <DatePicker
            style={{ width: "100%" }}
            format="DD/MM/YYYY HH:mm:ss"
            placeholder="Fecha de publicación"
            value={billData.fecha && moment(billData.fecha)}
            onChange={(e, value) =>
              setBillData({
                ...billData,
                fecha: moment(value, "DD/MM/YYYY HH:mm:ss").toISOString(),
              })
            }
          />
        </Col>
      </Row>

      <Button type="primary" htmlType="submit" className="btn-submit">
        {bill ? "Actualizar factura" : "Crear factura"}
      </Button>
    </Form>
  );
}
