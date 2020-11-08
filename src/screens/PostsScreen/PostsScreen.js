import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader';
import Posts from '../../components/Posts/Posts';
import { getPosts } from '../../services/api';

const PostsScreen = () => {
  const history = useHistory();

  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await getPosts();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };

    init();
  }, []);

  const handleAddPost = () => {
    history.push(`/posts/new`);
  };

  const handleItemClick = (post) => {
    // todo
    console.log(post);
    history.push(`/posts/${post.id}`);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <Button onClick={handleAddPost} text="Add new post" />
      <Posts posts={posts} onItemClick={handleItemClick} />
    </div>
  );
};

export default PostsScreen;
