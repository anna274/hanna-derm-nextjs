import type { NextPage } from 'next';
import Image from 'next/image';
import HomeImage from '../../public/home.png';
import { ImageContainer, HomeWording, HomeTitle } from 'styled/home';

const Home: NextPage = () => {
  return (
    <>
      <ImageContainer>
        <HomeWording>
          <HomeTitle>Center for Esthetic Medicine</HomeTitle>
          <p>
            Delightful unreserved impossible few estimating men favourable see
            entreaties. She propriety immediate was improving. He or entrance
            humoured likewise moderate. Much nor game son say feel. Fat make met
            can must form into gate. Me we offending prevailed discovery.
          </p>
          <p>
            Is we miles ready he might going. Own books built put civil fully
            blind fanny. Projection appearance at of admiration no. As he
            totally cousins warrant besides ashamed do. Therefore by applauded
            acuteness supported affection it. Except had sex limits county
            enough the figure former add. Do sang my he next mr soon. It merely
            waited do unable.
          </p>
        </HomeWording>
        <Image src={HomeImage} alt='' layout='responsive' priority />
      </ImageContainer>
    </>
  );
};

export default Home;
