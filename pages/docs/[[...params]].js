import { useRouter } from "next/router";

function Doc() {
  const router = useRouter();
  const { params=[] } = router.query;
  console.log(params);

  if (params.length === 1) {
    return <h2>You looking at features {params[0]}</h2>;
  } else if (params.length === 2) {
    return (
      <h2>
        You looking at features {params[0]} for concept {params[1]}
      </h2>
    );
  } else return <h1>Docs Home Page</h1>;
}
export default Doc;
