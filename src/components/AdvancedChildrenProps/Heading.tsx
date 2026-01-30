// advanced props types, children prop

// define props type, including children of type string
type HeadingProps = {
  children: string;
};

// render heading with children prop, which is a string
export const Heading = (props: HeadingProps) => {
  return <h1>{props.children}</h1>;
};
