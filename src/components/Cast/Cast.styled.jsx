import styled from 'styled-components';

export const CastContainer = styled.div`
  border-bottom: 3px solid #d4d9dd;
`;

export const Ul = styled.ul`
  padding: 0;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Li = styled.li`
  list-style: none;
`;

export const ActorCard = styled.div`
  border: none;
  border-radius: 4px;
  width: 180px;
  min-height: 400px;
  box-shadow: 4px 4px 8px 0px rgba(1, 10, 18, 0.5);
  -webkit-box-shadow: 4px 4px 8px 0px rgba(1, 10, 18, 0.5);
  -moz-box-shadow: 4px 4px 8px 0px rgba(1, 10, 18, 0.5);
  overflow: hidden;
  transition: all 250ms else;

  :hover {
    scale: 1.005;
    box-shadow: 0px 0px 8px 5px rgba(73, 134, 7, 0.5);
    -webkit-box-shadow: 0px 0px 8px 5px rgba(73, 134, 7, 0.5);
    -moz-box-shadow: 0px 0px 8px 5px rgba(73, 134, 7, 0.5);
  }
`;
export const Img = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  width: 100%;
`;

export const ActorInfo = styled.div`
  padding: 0 12px;
`;
