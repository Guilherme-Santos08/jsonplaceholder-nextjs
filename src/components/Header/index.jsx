import { Container } from "./styles.js";

export default function Header({ children }) {
  return (
    <Container>
      <h2>{children}</h2>
    </Container>
  );
}
