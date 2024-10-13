# Concept of Resolvers

Resolvers are primarly used to handle logic that should be executed before navigating to a route.
Resolvers can be used in Frameworks like Angular.
They are mostly used for pre-fetching Data from a backend before accessing a route.

## Advantages 

- Pre-fetching of Data, so that the user is only navigated to the url, after all the data has been fetched.
  In Angular for example you can display a loading spinner before hitting the route and as soon the data is loaded 
  you can navigate the user to the url and then the component can handle the logic synchronous and not async.
- Controll routing behaviour, for example load also data depending on the rights of the user, or do other checks
- Improve User Experience, because all required data is there after a user is routed to the url
- Abstraction between fetching data and the component logic (for example in Angular)

## When to use them for pre-fetching (Angular)
- If you need a stable state in your component. The resolver will make sure all data is available