import { useContext } from 'react';
import FavouriteContext from '../components/store/favourite-context';
import MeetupList from '../components/meetup/MeetupList';

function FavouritePage() {
  const favouriteCtx = useContext(FavouriteContext);
  const totalFavourites = favouriteCtx.totalFavourites;

  let content;
  if (totalFavourites === 0) {
    content = <p>You have no favourites yet</p>;
  } else {
    content = <MeetupList meetups={favouriteCtx.userFavourites} />;
  }
  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}

export default FavouritePage;
