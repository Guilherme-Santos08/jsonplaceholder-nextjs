import { Container } from "./styles.js";

export default function CardSmall({ whatThemeBackground }) {
  return (
    <Container whatThemeBackground={whatThemeBackground}>
      <span>{whatThemeBackground}</span>
    </Container>
  );
}
