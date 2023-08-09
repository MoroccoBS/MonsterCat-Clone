import { BsPlay, BsPause } from "react-icons/bs";
import { HiOutlineShare } from "react-icons/hi";
import "./TrackList.css";
import ReactHowler from "react-howler";
import { useState, useRef } from "react";

interface TrackProps {
  id: number;
  name: string;
  artistName: string;
  src: string;
}

function Track({ id, name, artistName, src }: TrackProps) {
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const soundRef = useRef<any>(null);

  const handleLoad = () => {
    if (soundRef.current) {
      setDuration(soundRef.current.duration());
    }
  };
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);

  return (
    <>
      <div className="track">
        <div className="track-info-cont">
          <ReactHowler
            src={src}
            playing={playing}
            html5={true}
            volume={0.2}
            loop={true}
            onLoad={handleLoad}
            ref={soundRef}
          />
          {id}
          <button
            onClick={() => {
              setPlaying((prevPlaying) => !prevPlaying);
            }}
            className="btn"
          >
            {playing ? <BsPause fill="#fdfdfd" /> : <BsPlay fill="#fdfdfd" />}
          </button>
          <div className="track-info">
            <h4>{name}</h4>
            <h5>{artistName}</h5>
          </div>
        </div>
        <div className="track-duration">
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
          <a href="" className="share">
            <HiOutlineShare />
          </a>
        </div>
      </div>
    </>
  );
}

export default Track;
