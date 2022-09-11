import { IService } from 'declarations/types';
import Image from 'next/image';
import Link from 'next/link';
import { shimmer, toBase64 } from 'utils';
import {
  PageTitle,
  PageDescription,
  ServicesContainer,
  ServiceCard,
  ServiceImageContainer,
  ServiceName,
} from 'styled/services';

export async function getStaticProps() {
  const res = await fetch('http://localhost:8000/services', {
    method: 'GET',
  });
  const services = await res.json();
  return {
    props: { services }, // will be passed to the page component as props
  };
}

const Services = ({ services }: { services: IService[] }) => {
  return (
    <>
      <PageTitle>Our Services</PageTitle>
      <PageDescription>
        Behind sooner dining so window excuse he summer. Breakfast met certainty
        and fulfilled propriety led. Waited get either are wooded little her.
        Contrasted unreserved as mr particular collecting it everything as
        indulgence. Seems ask meant merry could put. Age old begin had boy noisy
        table front whole given.
      </PageDescription>
      <ServicesContainer>
        {services.map(({ image, name, id }) => (
          <Link href={`/services/${id}`} key={id} passHref>
            <a>
              <ServiceCard>
                <ServiceImageContainer>
                  <Image
                    src={image}
                    alt={name}
                    layout='fixed'
                    width={300}
                    height={300}
                    placeholder='blur'
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer('300', '300')
                    )}`}
                  />
                </ServiceImageContainer>
                <ServiceName>{name}</ServiceName>
              </ServiceCard>
            </a>
          </Link>
        ))}
      </ServicesContainer>
    </>
  );
};

export default Services;
