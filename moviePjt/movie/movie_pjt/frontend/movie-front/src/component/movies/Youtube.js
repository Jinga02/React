const YouTube = ({ movie }) => {
  const youtube = `https://www.youtube.com/embed/${movie.youtube_key}?autoplay=1&mute=1&amp;playlist=${movie.youtube_key}&loop=1&controls=0&modestbranding=1&`;

  return (
    <iframe
      style={{
        width: "100%",
        height: "100%",
      }}
      title="YouTube Video Player"
      frameBorder="0"
      allowFullScreen
      src={youtube}
    ></iframe>
  );
};

export default YouTube;
