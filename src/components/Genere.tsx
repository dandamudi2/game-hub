import React from 'react';
import useGeneres from '../hooks/useGenres';

const Genere = () => {
  const { genres, error, isLoading } = useGeneres();
  return <div></div>;
};

export default Genere;
