import { h, render } from "preact";
import { useEffect, useState } from "preact/hooks";

const App = () => {
  const [state, setSate] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch(" https://3rd-party-script-git-main-ojisan.vercel.app/api/get?id=2")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setSate(data.id);
      });
  }, []);
  return <div>hello id: {state}!</div>;
};

render(<App></App>, document.getElementById("root") as any);
