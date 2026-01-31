// union type for status prop

// defining the props type
type StatusProps = {
  // status can be one of three string literals, representing different states
  status: "loading" | "success" | "error";
};

// component using the StatusProps type
export const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};
