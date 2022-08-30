import { unstable_getServerSession } from 'next-auth';
import { GetServerSidePropsContext } from 'next';
import { Layout } from 'components/Layout';
import { PageTitle } from 'styled/services';
import Permission from 'pages/permission';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { IUser } from 'declarations/types';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  return {
    props: {
      user: session?.user,
      hello: 'hello',
    },
  };
}

const Admin = (props: { user: IUser }) => {
  if (props?.user?.role === 'admin') {
    return (
      <Layout>
        <PageTitle>Hello, Admin</PageTitle>
      </Layout>
    );
  }
  return <Permission />;
};

export default Admin;
