import React from 'react';
import styled from 'styled-components';
import RouterRendering from '../components/RouterRendering';

export default function SearchCodeURLResultPage() {
  return (
    <SearchCodeURLResultPageContainer>
      <RouterRendering />
    </SearchCodeURLResultPageContainer>
  );
}

const SearchCodeURLResultPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 10px solid blue;

  @media screen and (max-width: 746px) {
    width: 300px;
  }
`;
