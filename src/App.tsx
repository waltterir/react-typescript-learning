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
import { Counter } from "./components/UseStates/Counter";

function App() {
  // array of person names to be passed as props
const personName = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
  ];
  return (
    <div className="App">
      {/* Example usage of Status component */}
      <Status status="success" />

      {/* Example usage of Heading component */}
      <Heading>Placeholder text</Heading>

      {/* Example usage of Oscar component with Heading as child */}
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario</Heading>
      </Oscar>

      {/* Example usage of Greet component */}
      <Greet name="Wate" isLoggedIn={false} />

      {/* Example usage of Button component */}
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />

      {/* Example usage of Input component */}
      <Input value="" handleChange={(event) => console.log(event)} />

      {/* Example usage of Person component */}
      <PersonList names={personName} />

      {/* Example usage of Container component with custom styles */}
      <Container
        styles={{
          border: "1px solid black",
          padding: "1rem",
          backgroundColor: "lightpink",
        }}
      />
      {/* Example usage of LoggedIn component */}
      <LoggedIn />
      {/* Example usage of User component */}
      <User />

      <Counter />
    </div>
  );
}

export default App;
