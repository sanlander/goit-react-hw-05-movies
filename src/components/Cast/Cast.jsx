import { getMovieCredits } from 'movieAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  ActorCard,
  ActorInfo,
  CastContainer,
  Img,
  Li,
  Ul,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    getMovieCredits(movieId).then(setCredits);
  }, [movieId]);

  if (!credits) {
    return null;
  }

  const DUFAULT_IMG = 'https://via.placeholder.com/180x270?text=No+foto!';

  return (
    <CastContainer>
      <Ul>
        {credits.map(({ name, character, profile_path }) => {
          const IMG_SRC = `https://image.tmdb.org/t/p/w500${profile_path}`;
          return (
            <Li key={name}>
              <ActorCard>
                <Img src={profile_path ? IMG_SRC : DUFAULT_IMG} alt={name} />

                <ActorInfo>
                  <p>
                    <b>Name:</b> {name}
                  </p>
                  <p>
                    <b>Character:</b> {character}
                  </p>
                </ActorInfo>
              </ActorCard>
            </Li>
          );
        })}
      </Ul>
    </CastContainer>
  );
};

export default Cast;
