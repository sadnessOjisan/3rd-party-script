import { h, render } from "preact";
import { useEffect, useState } from "preact/hooks";

const ENDPOINT = "https://3rd-party-script.vercel.app/";

const App = () => {
  const [state, setSate] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch(`${ENDPOINT}/api/get?id=2`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setSate(data.id);
      });
  }, []);

  useEffect(() => {
    const script = document.getElementById("self");
    console.log(script);
    // @ts-ignore
    console.log(script.src);
  }, []);
  return <div>hello id: {state}!!!</div>;
};

render(<App></App>, document.getElementById("root") as any);
