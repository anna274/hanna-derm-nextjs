import { IService } from 'declarations/types';
import { PageTitle, PageDescription } from 'styled/services';

// OPTION with getServerSideProps

// export async function getServerSideProps({query: { id }}: { query: { id: string } }) {
//   const res = await fetch(`http://localhost:8000/services/${id}`, {
//     method: 'GET'
//   })
//   const service = await res.json()
//   return {
//     props: { service }, // will be passed to the page component as props
//   }
// }

// OPTION with static rendering

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:8000/services');
  const services = await res.json();

  // Get the paths we want to pre-render based on services
  const paths = services.map((service: IService) => ({
    params: { id: service.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }: { params: { id: string } }) {
  // params contains the service `id`.
  // If the route is like /service/1, then params.id is 1
  const res = await fetch(`http://localhost:8000/services/${params.id}`);
  const service = await res.json();

  // Pass post data to the page via props
  return { props: { service } };
}

const Services = ({ service }: { service: IService }) => {
  return (
    <>
      <PageTitle>{service.name}</PageTitle>
      <PageDescription>{service.description}</PageDescription>
    </>
  );
};

export default Services;
