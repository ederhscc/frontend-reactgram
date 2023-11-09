import "./Search.css";

// hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage.jsx";
import { useQuery } from "../../hooks/useQuery.jsx";

// components
import LikeContainer from "../../components/LikeContainer.jsx";
import PhotoItem from "../../components/PhotoItem.jsx";
import { Link } from "react-router-dom";

// redux

const Search = () => {
  return <div>Search</div>;
};

export default Search;
