import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "./components/Button";

function App() {
  const handleClick = () => {
    console.log("hello");
  };
  return (
    <div>
      <div>
        <Button
          className="mb-5"
          outline
          secondary
          rounded
          onClick={handleClick}
        >
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;
