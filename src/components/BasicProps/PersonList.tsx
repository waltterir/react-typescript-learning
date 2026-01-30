// basic props types, array of objects

// import Name type from separate types file
import { Name } from "../Types/Person.types";

// define props type, including an array of Name objects
type PersonListProps = {
  // array of name objects
  names: Name[];
};

// iterate through array and render a list of names, using map function
export const PersonList = (props: PersonListProps) => {
  return (
    // container div for the list of names, mapping over names array
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};
