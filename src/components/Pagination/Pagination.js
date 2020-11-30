import React from "react";
import { Pagination as PaginationAntd } from "antd";

export default function Pagination(props) {
  const { bills, location, history } = props;
  const currentPage = parseInt(bills.page);

  const onChangePage = (newPage) => {
    history.push(`${location.pathname}?page=${newPage}`);
  };

  return (
    <PaginationAntd
      defaultCurrent={currentPage}
      total={bills.total}
      pageSize={bills.limit}
      onChange={(newPage) => onChangePage(newPage)}
      className="pagination"
    />
  );
}
