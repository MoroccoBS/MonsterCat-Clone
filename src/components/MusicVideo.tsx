import YouTube from "react-youtube";
import "../App.css";

function MusicVideo() {
  return (
    <>
      <div className="music-video">
        <h1>Music Video</h1>
        <YouTube className="youtube" videoId="dQw4w9WgXcQ" />
      </div>
    </>
  );
}

export default MusicVideo;
