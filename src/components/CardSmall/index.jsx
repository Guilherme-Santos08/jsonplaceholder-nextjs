import Link from "next/link";

import { Container } from "./styles.js";

export default function CardSmall({ whatThemeBackground }) {
  return (
    <Container whatThemeBackground={whatThemeBackground}>
      <Link href="./todos">
        <a>{whatThemeBackground}</a>
      </Link>
    </Container>
  );
}
