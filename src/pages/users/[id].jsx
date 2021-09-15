import { useRouter } from "next/router";
import Head from "next/head";
import { apiPokedex } from "../../api/api";

import Header from "../../components/Header";
import CardUsers from "../../components/CardUsers";

function Profile({ user }) {
  const router = useRouter();
  // console.log(user);
  return (
    <>
      <Head>
        <title>User {router.query.id}</title>
      </Head>
      <Header>
        Usuario {user?.id} <br />
        Nome: {user?.name}
      </Header>
      <CardUsers
        userName={user?.name}
        userPhone={user?.phone}
        userUserName={user?.username}
        userEmail={user?.email}
        userWebSite={user?.website}
        userCompanyName={user?.company.name}
        userCompanyCatchPhrase={user?.company.catchPhrase}
        userCity={user?.address.city}
        userStreet={user?.address.street}
        userZipCode={user?.address.zipcode}
      />
    </>
  );
}

export async function getStaticPaths(context) {
  const response = await apiPokedex.get("/users");
  const users = await response.data.slice(0, 10);

  const paths = users.map((user) => {
    return { params: { id: user.id.toString() } };
  });

  return {
    paths,
    fallback: true, // See the "fallback" section below
  };
}

// estou destruturando esse paramas lad do getStaticPaths => params
export async function getStaticProps({ params }) {
  const response = await apiPokedex.get(`/users/${params.id}`);
  const user = await response.data;
  // const user = data.find(f => f.id == context.params.id)

  return {
    props: { user, revalidate: 1 }, // will be passed to the page component as props
  };
}
export default Profile;
