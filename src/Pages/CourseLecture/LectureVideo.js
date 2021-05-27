function LectureVideo({ lesson }) {
  return (
    <iframe
      className="vid"
      src={lesson.videoLink}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}

export default LectureVideo;
