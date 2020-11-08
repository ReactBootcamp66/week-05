import React from 'react';

import { Wrapper, List, ListItem } from './Posts.styles';

const Posts = ({ posts, onItemClick }) => {
  return (
    <Wrapper>
      <List>
        {posts.map((post) => (
          <ListItem key={post.id} onClick={() => onItemClick(post)}>
            {post.title}
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default Posts;
