import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { FormContainer } from '../../components/FormElements/WrappedFormElements';
import Input from '../../components/Input/Input';

import Layout from '../../components/Layout/Layout';
import Loader from '../../components/Loader/Loader';
import { createNewPost } from '../../services/api';

const AddPostScreen = () => {
  const history = useHistory();

  const [post, setPost] = useState({
    title: '',
    body: '',
  });
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // checks validation

    setLoading(true);
    setError('');

    try {
      const { data } = await createNewPost(post);
      console.log(data);
      history.push('/posts');
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Layout>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          name="post[title]"
          placeholder="Title"
          autoComplete="off"
          value={post.title}
          onChange={(event) => {
            setPost({
              ...post,
              title: event.target.value,
            });
          }}
        />

        <Input
          type="text"
          name="post[body]"
          placeholder="Body"
          autoComplete="off"
          value={post.body}
          onChange={(event) => {
            setPost({
              ...post,
              body: event.target.value,
            });
          }}
        />

        <Button text="Create" type="submit" />
      </FormContainer>
    </Layout>
  );
};

export default AddPostScreen;
