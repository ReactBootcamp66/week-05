import React from 'react';

import { Wrapper, CardWrapper, CardContent } from './Gallery.styles';

const Gallery = ({ photos }) => {
  return (
    <Wrapper>
      {photos?.map((photo) => (
        <CardWrapper>
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <CardContent>{photo.title}</CardContent>
        </CardWrapper>
      ))}

      {!photos?.length && <p>There is no photo.</p>}
    </Wrapper>
  );
};

export default Gallery;
