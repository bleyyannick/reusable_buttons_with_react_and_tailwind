import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button primary>HTML5</Button>
      </div>
      <div>
        <Button warning rounded>
          CSS3
        </Button>
      </div>
      <div>
        <Button secondary>JavaScript</Button>
      </div>
      <div>
        <Button danger outline>
          TypeScript
        </Button>
      </div>
      <div>
        <Button success>React</Button>
      </div>
    </div>
  );
}

export default App;
