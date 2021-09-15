import router, { useRouter } from "next/router";
import { apiPokedex } from "../../api/api";

function Profile({ user = {} }) {
  const router = useRouter();
  console.log(router)
  return (
    <div>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.username}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  const response = await apiPokedex.get("/users", {
    params: { id: context.params.id },
  });
  const user = await response.data[context.params.id - 1];

  return {
    props: { user, revalidate: 1 }, // will be passed to the page component as props
  };
}

export async function getStaticPaths(context) {
  const response = await apiPokedex.get("/users");
  const users = await response.data.slice(0, 5);

  const paths = users.map((user) => {
    return { params: { id: String(user.id) } };
  });

  return {
    paths,
    fallback: true, // See the "fallback" section below
  };
}
export default Profile;
