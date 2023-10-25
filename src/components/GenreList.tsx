import useGeneres, { Genre } from '../hooks/useGenres';

const GenreList = () => {
  const { data } = useGeneres();
  return (
    <div>
      <ul>
        {data.map((genre) => (
          <li>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
