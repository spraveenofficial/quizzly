import { Helmet } from "react-helmet";
import Container from "../../Components/Container";
import "./style.css";

export default function Profile() {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Profile - Quizzly</title>
      </Helmet>
    </Container>
  );
}
