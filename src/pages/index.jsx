import Head from "next/head";
import CardPost from "../components/CardPost";

import Header from "../components/Header";

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
          <CardPost />
        </div>
      </Container>
    </>
  );
}
