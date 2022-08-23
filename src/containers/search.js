import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ShowError } from "../common/errors";
import urls from "../common/urls";
import SearchPanel, { SearchButton } from "../components/SearchPanel";
import { useAuth } from "../providers/authentication";
import { useFetch } from "../utils/useFetch";
const Search = () => {
  const params = useParams();
  const [specialists, setSpecialists] = useState([]);
  const navigate = useNavigate();
  const { data, error, loading } = useFetch(urls.common.search(), "POST", {
    specialtyName: params.searchInput,
  });

  useEffect(() => {
    if (error) {
      ShowError(error);
    }
    setSpecialists(data);
  }, [error, data]);

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
      {specialists &&  
        <SearchPanel specialists={specialists} />
    }
    </React.Fragment>
  );
};

export default Search;
