import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>UrlParameter page!</h1>
      <p>ID is {id}</p>
    </div>
  );
};
