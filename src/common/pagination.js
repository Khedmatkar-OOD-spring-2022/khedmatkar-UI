import React from "react";
import {  Pagination } from "react-bootstrap";

export default function CustomPagination() {
  return (
    <>
      <Pagination dir='rtl'>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item active>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{7}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </>
  );
}
