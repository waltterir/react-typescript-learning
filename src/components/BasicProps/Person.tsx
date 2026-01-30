//basic prop types, import PersonProps type from separate types file
import { PersonProps } from "../Types/Person.types";

// render person's full name, using nested object props
export const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};
