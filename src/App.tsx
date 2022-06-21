import { gql, useQuery } from '@apollo/client';

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  // Uma forma de usar o Apollo
  // useEffect(() => {
  //   client
  //     .query({
  //       query: GET_LESSONS_QUERY,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  // }, []);

  // Outra forma de usar o Apollo
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  return (
    <div>
      <h1 className="text-5xl font-bold text-violet-500">Event Platform</h1>
      <ul>
        {data?.lessons.map((lesson) => (
          <li key={lesson.id}>{lesson.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
