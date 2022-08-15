import { Layout } from 'components/Layout';
import { IService } from 'declarations/types';
import {
  PageTitle,
  PageDescription,
} from 'styled/services';

export async function getServerSideProps({query: { id }}: { query: { id: string } }) {
  const res = await fetch(`http://localhost:8000/services/${id}`, {
    method: 'GET'
  })
  const service = await res.json()
  return {
    props: { service }, // will be passed to the page component as props
  }
}

const Services = ({ service }: { service: IService }) => {
  return (
    <Layout>
      <PageTitle>{service.name}</PageTitle>
      <PageDescription>{service.description}</PageDescription>
    </Layout>
  );
};

export default Services;
