/**
 * You've been tasked with modernizing the legacy code below that was
 * written prior to ES2015.
 */

function logUser(user) {
  let firstName = user.firstName;
  let lastName = user.lastName || "";
  let age = user.age;

  let formattedUser = {
    "First Name": firstName,
    "Last Name": lastName,
    Age: age
  };
  console.log(formattedUser);
}

/**
 * Example inputs
 */

logUser({ firstName: "Matt", lastName: "Smith", age: 52 });

logUser({ firstName: "Alice", lastName: "Weiss", age: 45 });

/**
 * Write your solution below
 */
