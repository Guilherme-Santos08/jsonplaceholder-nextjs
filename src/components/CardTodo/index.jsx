// import Link from "next/link";

import { Container } from "./styles.js";

export default function CardTodo({ whatThemeBackground, todoId, todoTitle}) {
  return (
    <>
      <Container whatThemeBackground={whatThemeBackground}>
        <div>
          <p>Id: {todoId}</p>
          <div className="color"></div>
        </div>
      </Container>
    </>
  );
}
