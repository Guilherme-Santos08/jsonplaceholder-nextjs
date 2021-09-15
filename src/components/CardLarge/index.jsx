import Link from "next/link";

import { Container } from "./styles.js";

export default function CardLarge() {
  return (
    <Container>
      <Link href="./users">
      <a>Users</a>
      </Link>
    </Container>
  );
}
