const baseUrl =
  process.env.REACT_APP_MODE == "dev"
    ? "http://localhost:3500/v1/api"
    : "https://quizzly-backend.vercel.app/v1/api";

export default baseUrl;
