import styled from 'styled-components';

export const PageTitle = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-bottom: 20px;
`;

export const PageDescription = styled.p`
  font-size: 18px;
  text-align: center;
  padding: 0 40px;
  width: 600px;
  margin: auto;
  margin-bottom: 20px;
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;

  & a {
    text-decoration: none;
  }
`;

export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover > p {
    color: #638a6b;
  }
`;

export const ServiceImageContainer = styled.div`
  width: 300px;
  height: 300px;
  margin-bottom: 10px;
  overflow: hidden;

  & > span {
    height: 100%;
    width: auto;
  }
`;

export const ServiceName = styled.p`
  font-size: 20px;
  margin: 0;
  color: #000;
`