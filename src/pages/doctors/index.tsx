import { useEffect, useState } from 'react';
import { IDoctor } from 'declarations/types';
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

const Doctors = () => {
  const [doctors, setDoctors] = useState<IDoctor[]>([]);
  useEffect(() => {
    fetch('http://localhost:8000/doctors')
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
      });
  }, []);
  if (doctors.length === 0) {
    return <PageDescription>Loading...</PageDescription>;
  }
  return (
    <>
      <PageTitle>Our Doctors</PageTitle>
      <PageDescription>
        Behind sooner dining so window excuse he summer. Breakfast met certainty
        and fulfilled propriety led. Waited get either are wooded little her.
        Contrasted unreserved as mr particular collecting it everything as
        indulgence. Seems ask meant merry could put. Age old begin had boy noisy
        table front whole given.
      </PageDescription>
      <ServicesContainer>
        {doctors.map(({ image, name, surname, id }) => (
          <Link href={`/doctors/${id}`} key={id}>
            <a>
              <ServiceCard>
                <ServiceImageContainer>
                  <Image
                    src={image}
                    alt={name}
                    layout='fixed'
                    width={300}
                    height={350}
                    placeholder='blur'
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer('300', '300')
                    )}`}
                  />
                </ServiceImageContainer>
                <ServiceName>{`${name} ${surname}`}</ServiceName>
              </ServiceCard>
            </a>
          </Link>
        ))}
      </ServicesContainer>
    </>
  );
};

export default Doctors;
