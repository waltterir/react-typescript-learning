import "./App.css";
import { Greet } from "./components/BasicProps/Greet";
import { Heading } from "./components/AdvancedChildrenProps/Heading";
import { Oscar } from "./components/AdvancedChildrenProps/Oscar";
import { Status } from "./components/UnionPropsType/Status";
import { Button } from "./components/EventPropsButton_Input/Button";
import { Input } from "./components/EventPropsButton_Input/Input";
import { Person } from "./components/BasicProps/Person";
import { PersonList } from "./components/BasicProps/PersonList";
import { Container } from "./components/StyleProps/Container";
import { LoggedIn } from "./components/UseStates/LoggedIn";
import { User } from "./components/UseStates/User";
import { Counter } from "./components/Reducer/Counter";
import { WordCounts } from "./components/Reducer/arrayReduce";

function App() {
  /* array of person names to be passed as props
  const personName = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
  ];
  */
  return (
    <div className="App">
      <WordCounts />
    </div>
  );
}

export default App;
