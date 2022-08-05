import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import urls from "../common/urls";
import SearchPanel, { SearchButton } from "../components/SearchPanel";
import { useAuth } from "../providers/authentication";
import { useFetch } from "../utils/useFetch";
const Search = () => {
  const params = useParams();
  const navigate = useNavigate();
  //   const [chatroom, setChatroom] = useState();
  //   const { data, error, loading } = useFetch(
  //     urls.chat.getByServicRequest(params.id),
  //     "GET"
  //   );

  //   useEffect(() => {
  //     if (error) {
  //       toast.error(error, { position: toast.POSITION.BOTTOM_RIGHT });
  //     }
  //     setChatroom(data && data[0]);
  //   }, [error, data]);

  return (
    <React.Fragment>
      <div style={{ padding: 20 }}>
        <Button
          variant="outline-primary"
          className="rounded-circle"
          onClick={() => navigate(-1)}
        >
          <IoArrowBack />
        </Button>
      </div>
      <SearchPanel />
    </React.Fragment>
  );
};

export default Search;
