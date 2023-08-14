import { useEffect, useState } from 'react';
import MeetupList from '../components/meetup/MeetupList';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-template-395907-default-rtdb.firebaseio.com/meetups.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  let content;
  if (meetups.length === 0) {
    content = <p>You have no meetups yet</p>;
  } else {
    content = <MeetupList meetups={meetups} />;
  }

  return (
    <section>
      <h1>All Meetups</h1>
      {content}
    </section>
  );
}

export default AllMeetupsPage;
