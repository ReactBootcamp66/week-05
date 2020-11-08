import React, { useEffect, useState } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import Loader from '../../components/Loader/Loader';

import { getPhotosById } from '../../services/api';

const PostPhotos = ({ postId }) => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await getPhotosById(postId);
        console.log(data);

        setPhotos(data);
      } catch (err) {
        setError(err);
      }

      setLoading(false);
    };

    init();
  }, [postId]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Gallery photos={photos} />
    </div>
  );
};

export default PostPhotos;
