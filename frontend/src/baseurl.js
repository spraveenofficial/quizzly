const baseUrl =
  process.env.REACT_APP_MODE !== "dev"
    ? "https://quizzly-backend.vercel.app/api/v1"
    : "http://localhost:3500/v1/api";

export default baseUrl;
