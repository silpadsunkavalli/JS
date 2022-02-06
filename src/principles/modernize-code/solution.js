/**
 * You've been tasked with modernizing the legacy code below that was
 * written prior to ES2015.
 */

/**
 * Summary of changes:
 * - (optional) update logUser to an arrow function
 * - Destructuring first parameter
 * - Default value for lastName property
 * - Template strings for formatting user string
 * - const for defining formattedUser variable
 */
const logUser = ({ firstName, lastName = "", age }) => {
  const formattedUser = `First Name: ${firstName}
Last Name: ${lastName}
Age: ${age}
  `;

  console.log(formattedUser);
};

/**
 * Example inputs
 */

logUser({ firstName: "Matt", lastName: "Smith", age: 52 });

logUser({ firstName: "Alice", lastName: "Weiss", age: 45 });
