// advanced props types, children prop, ReactNode type

// ReactNode allows any valid React child: string, number, element, fragment, etc.
type OscarProps = {
  children: React.ReactNode;
};

// render children prop, which can be any valid React child
export const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};
