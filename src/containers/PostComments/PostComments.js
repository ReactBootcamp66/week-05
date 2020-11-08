import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';
import { getCommentsById } from '../../services/api';

const PostComments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await getCommentsById(postId);
        console.log(data);

        setComments(data);
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
      <ul>
        {comments?.map((comment) => (
          <li key={`comment-${comment.id}`}>
            <h4>
              {comment.name}
              <em style={{ fontWeight: `normal`, paddingLeft: `5px` }}>
                {comment.email}
              </em>
            </h4>
            <p>{comment.body}</p>
          </li>
        ))}
        {!comments?.length && <p>There is no comment.</p>}
      </ul>
    </div>
  );
};

export default PostComments;
