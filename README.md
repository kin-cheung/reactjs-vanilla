# ReactJS Vanilla Demo Project

## Tech Stack

- ReactJS
- React Router

## Hooks

- useState
- useEffect
- useRef
- useContext

## Notes

- `props.children` to bring enclosed elements into custom components
- `useEffect(() => {}, [])` to load once without dependencies
- `set"{State}"` is handled asynchronously, therefore:
  - DO:
    ```
    setUserFavourites((previousFavourites) => {
        return previousFavourites.concat(favouriteMeetup);
    });
    ```
  - DONT:
    ```
    setUserFavourites(previousFavourites.concat(favouriteMeetup));
    ```
