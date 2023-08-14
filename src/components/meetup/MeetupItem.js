import { useContext } from 'react';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import FavouriteContext from '../store/favourite-context';

function MeetupItem(props) {
  const favouritesCtx = useContext(FavouriteContext);

  const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id);

  function toggleUserFavouritesHandler() {
    if (itemIsFavourite) {
      favouritesCtx.removeFavourite(props.id);
    } else {
      const newFavourite = {
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      };
      favouritesCtx.addFavourite(newFavourite);
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleUserFavouritesHandler}>
            {itemIsFavourite ? 'Remove from Favourites' : 'To Favourites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
