import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetup/NewMeetupForm';

function NewMeetupPage() {
  const history = useHistory();

  function newMeetupFormSubmitHandler(meetupData) {
    fetch(
      'https://react-template-395907-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: { 'Content-Type': 'application/json' },
      }
    )
      .then((response) => {
        history.go('/');
      })
      .catch((err) => {});
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onSubmit={newMeetupFormSubmitHandler} />
    </section>
  );
}

export default NewMeetupPage;
