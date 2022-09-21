import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page 2!</h1>
      <Link to="/page2/10">URL Parameter</Link>
      <br />
      <Link to="/page2/10?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
