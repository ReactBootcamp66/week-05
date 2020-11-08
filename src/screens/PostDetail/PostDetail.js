import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';
import Loader from '../../components/Loader/Loader';
import Tabs from '../../components/Tabs/Tabs';
import PostComments from '../../containers/PostComments/PostComments';
import PostPhotos from '../../containers/PostPhotos/PostPhotos';
import { getPostById } from '../../services/api';

const PostDetail = () => {
  const { postId } = useParams();

  const [post, setPost] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await getPostById(postId);
        console.log(data);

        setPost(data);
      } catch (err) {
        setError(err);
      }

      setLoading(false);
    };

    init();
  }, [postId]);

  const tabs = [
    {
      header: () => <span>Photos</span>,
      content: () => <PostPhotos postId={postId} />,
    },
    {
      header: () => <span>Comments</span>,
      content: () => <PostComments postId={postId} />,
    },
  ];

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Layout>
      <h2>Post Detail #{post.id}</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      <Tabs
        tabs={tabs}
        activeIndex={activeIndex}
        onIndexChange={(index) => setActiveIndex(index)}
      />
    </Layout>
  );
};

export default PostDetail;
