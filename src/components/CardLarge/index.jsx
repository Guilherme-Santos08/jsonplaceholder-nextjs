import Link from "next/link";

import { Container } from "./styles.js";

export default function CardSmall({ whatThemeBackground, linkPage }) {
  return (
    <Container whatThemeBackground={whatThemeBackground}>
      <Link href={`${linkPage}`}>
        <a>{whatThemeBackground}</a>
      </Link>
    </Container>
  );
}
