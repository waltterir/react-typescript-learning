// basic props types

type GreetProps = {
  name: string;
  // messageCount is an optional prop, because of the ?
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props; // default value for messageCount
  return (
    <div>
      {/* conditional rendering based on isLoggedIn prop */}
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${messageCount} unread messages`
          : `Welcome Guest!`}
      </h2>
    </div>
  );
};
