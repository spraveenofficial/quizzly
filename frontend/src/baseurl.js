const baseUrl =
  process.env.REACT_APP_MODE == "dev"
    ? "http://quizzly-backend.vercel.app/v1/api"
    : "http://localhost:3500/v1/api";

export default baseUrl;
