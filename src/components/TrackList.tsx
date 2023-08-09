import Track from "./Track";
import "./TrackList.css";
import { useEffect } from "react";

function TrackList() {
  useEffect(() => {
    document.title = tracks[0].name + " - Monstercat"; // Set the desired title here
  });
  const tracks = [
    {
      id: 1,
      name: "Level Days",
      artistName: "Conro",
      src: "Music/LevelDays.mp3",
    },
    {
      id: 2,
      name: "Me Gustas",
      artistName: "Not Conro",
      src: "Music/MeGustas.mp3",
    },
  ];

  return (
    <>
      <div className="track-list-cont">
        <h1>Track List</h1>
        <div className="track-list">
          {tracks.map((track, index) => (
            <Track
              key={index} // Add a key prop for each Track component
              id={index + 1} // Increment the id based on the index
              name={track.name}
              artistName={track.artistName}
              src={track.src}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TrackList;
