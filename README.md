# Quiz App Practice (useReducer hook)

What I've learned inside this small project:

1. useState vs useReducer

| useState                                                                        | useReducer                                                                               |
| ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **single, independent pieces of state**                                         | **multiple related piece of state and complex state**                                    |
| update state is inside event handlers or effects **spread over all components** | update states **lives in one central place,decoupled from components**(reducer function) |
| state is updated with a **setter function**                                     | state is updated by **dispatching and action to a reducer**                              |

2. when to use useReducer?

When you have multiple pieces of state that depend on each other or an complex logic
