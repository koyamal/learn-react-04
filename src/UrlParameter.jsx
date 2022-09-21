import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);

  return (
    <div>
      <h1>UrlParameter page!</h1>
      <p>ID is {id}</p>
      <p>Query is {query.get("name")}</p>
    </div>
  );
};
