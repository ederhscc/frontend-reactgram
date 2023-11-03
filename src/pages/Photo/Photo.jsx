import "./Photo.css";

import { uploads } from "../../utils/config.jsx";

// components
import Message from "../../components/Message.jsx";
import { Link } from "react-router-dom";
import PhotoItem from "../../components/PhotoItem.jsx";
import LikeContainer from "../../components/LikeContainer";

// hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// Redux
import { getPhotoById, like } from "../../slices/photoSlice.jsx";

const Photo = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { photo, loading, error, message } = useSelector(
    (state) => state.photo
  );

  // comentários

  // Load photo data
  useEffect(() => {
    dispatch(getPhotoById(id));
  }, [dispatch, id]);

  const handleLike = () => {
    dispatch(like(photo._id));
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="photo">
      <PhotoItem photo={photo} />
      <LikeContainer photo={photo} user={user} handleLike={handleLike} />
    </div>
  );
};

export default Photo;
