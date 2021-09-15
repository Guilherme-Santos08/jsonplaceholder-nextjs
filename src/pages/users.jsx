import { apiPokedex } from "../api/api";
import Header from "../components/Header";
import { Container } from "../styles/pages/Users";

function Users({ users }) {
  console.log(users);
  return (
    <>
      <Container>
        <Header>Users</Header>
        <div>
          {users.map((e) => (
            <div key={e.id} className="users">
              <span>{e.name}</span>
              <span>{e.email}</span>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps(context) {
  const response = await apiPokedex.get("/users");
  const data = await response.data;

  return {
    props: { users: data }, // will be passed to the page component as props
  };
}

export default Users;
