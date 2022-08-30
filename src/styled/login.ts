import styled from 'styled-components';
import { Input } from 'components/Input'

export const Container = styled.div`
  width: 300px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const FromInput = styled(Input)`
  margin-bottom: 20px;
`;

export const PageTitle = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-bottom: 20px;
`;
