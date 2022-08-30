import { useSession } from 'next-auth/react';
import { Layout } from 'components/Layout';
import { PageTitle } from 'styled/services';

const Dashboard = () => {
  const { data: session } = useSession();
  return (
    <Layout>
      <PageTitle>Dashboard</PageTitle>
    </Layout>
  );
};

export default Dashboard;
