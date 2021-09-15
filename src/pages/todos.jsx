import { apiJsonPlaceholder } from "../api/api.js";

import CardTodo from "../components/CardTodo/index.jsx";
import Header from "../components/Header/index.jsx";
import { Container } from "../styles/pages/Todos.js";

function Todos({ todos }) {
  console.log(todos);
  return (
    <Container>
      <Header>
        Todo
        <p className="completed">
          completed: <div></div>
        </p>
        <p className="no-completed">
          No completed: <div></div>
        </p>
      </Header>
      <div className="cards">
        {todos.map((todo) => (
          <CardTodo
            key={todo.id}
            todoId={todo.id}
            whatThemeBackground={todo.completed}
          />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps(context) {
  const response = await apiJsonPlaceholder.get("/todos");
  const data = await response.data.slice(0, 40);

  return {
    props: { todos: data }, // will be passed to the page component as props
  };
}

export default Todos;
