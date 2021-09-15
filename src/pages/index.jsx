import Head from "next/head";

import Header from "../components/Header";
import CardLarge from "../components/CardLarge";

import { Container } from "../styles/pages/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {/* Page */}
      <Container>
        <Header>
          O que você deseja no <br />
          JsonPlaceholder?
        </Header>
        <div className="cards">
          <CardLarge whatThemeBackground="Users" linkPage="/users"/>
          <CardLarge whatThemeBackground="Todos" linkPage="/todos" />
        </div>
      </Container>
    </>
  );
}
