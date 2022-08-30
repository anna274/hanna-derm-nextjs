import { Layout } from 'components/Layout';
import { PageTitle, PageDescription } from 'styled/services';

const Permissions = () => {
  return (
    <Layout>
      <PageTitle>Permission error</PageTitle>
      <PageDescription>
        You need request rights to view page content
      </PageDescription>
    </Layout>
  );
};

export default Permissions;
