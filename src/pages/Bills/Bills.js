import React, { useState, useEffect } from "react";
import { notification } from "antd";

import queryString from "query-string";
import Modal from "../../components/Modal/Modal";
import BillList from "../../components/Bill/BillList";
import Pagination from "../../components/Pagination/Pagination";
import AddEditBillForm from "../../components/Bill/AddEditBillForm";
import { getBillsApi } from "../../api/bill";

export default function Bills(props) {
  const { location, history } = props;
  const [bills, setBills] = useState(null);
  const [reloadBills, setReloadBills] = useState(false);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const { page = 1 } = queryString.parse(location.search);

  useEffect(() => {
    getBillsApi(12, page)
      .then((response) => {
        if (response?.code !== 200) {
          notification["warning"]({
            message: response.message,
          });
        } else {
          setBills(response.bills);
        }
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor.",
        });
      });
    setReloadBills(false);
  }, [page, reloadBills]);

  const editBill = (bill) => {
    setIsVisibleModal(true);
    setModalTitle("Editar factura");
    setModalContent(
      <AddEditBillForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadPosts={setReloadBills}
        bill={bill}
      />
    );
  };

  if (!bills) {
    return null;
  }
  return (
    <div className="blog">
      Mis Facturas
      <div className="blog__add-post"></div>
      <BillList
        bills={bills}
        setReloadBills={setReloadBills}
        editBill={editBill}
      />
      <Pagination bills={bills} location={location} history={history} />
      <Modal
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
        width="75%"
      >
        {modalContent}
      </Modal>
    </div>
  );
}
