import classes from "./UsersList.module.css";
import Card from "../UI/Card/Card";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key = {user.key}>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
