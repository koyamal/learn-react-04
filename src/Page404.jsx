import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Not Found !!</p>
      <Link to="/">Back to Top</Link>
    </div>
  );
};
