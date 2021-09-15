import { Container } from "./styles.js";

export default function CardUsers({
  userName,
  userPhone,
  userUserName,
  userEmail,
  userWebSite,
  userCompanyName,
  userCompanyCatchPhrase,
  userCity,
  userStreet,
  userZipCode,
}) {
  return (
    <Container>
      <div className="card">
        <h3>Informações pessoais: </h3>
        <p>
          Nome: <strong>{userName}</strong>
        </p>
        <p>
          Username: <strong>{userUserName}</strong>
        </p>
        <p>
          Email: <strong>{userEmail}</strong>
        </p>
        <p>
          WebSite: <strong>{userWebSite}</strong>
        </p>
        <p>
          Telefone: <strong>{userPhone}</strong>
        </p>
      </div>
      <div className="card">
        <h3>Empresa: </h3>
        <p>
          Nome da empresa: <strong>{userCompanyName}</strong>
        </p>
        <p>
          Frase de Efeito: <strong>{userCompanyCatchPhrase}</strong>
        </p>
      </div>
      <div className="card">
        <h3>Endereço do Usuario: </h3>
        <p>
          Cidade: <strong>{userCity}</strong>
        </p>
        <p>
          Street: <strong>{userStreet}</strong>
        </p>
        <p>
          CEP: <strong>{userZipCode}</strong>
        </p>
      </div>
    </Container>
  );
}
