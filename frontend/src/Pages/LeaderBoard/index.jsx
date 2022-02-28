import Toast from "../../Components/Toast";
import { Helmet } from "react-helmet";
import Container from "../../Components/Container";
export default function LeaderBoard() {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>LeaderBoard - Quizzly</title>
      </Helmet>
      <Toast />
    </Container>
  );
}
