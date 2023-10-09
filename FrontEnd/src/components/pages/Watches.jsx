import React, { useEffect, useState } from "react";
import useWatches from "../Hooks/useWatches";
import "../css/watches.css";

const Watches = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const watchesData = await useWatches();
        console.log("Watches data:", watchesData);
        setWatches(watchesData);
      } catch (error) {
        console.error("Error fetching watches:", error);
      }
    };

    fetchWatches();
  }, []);

  return (
    <div className="Watches-page">
      <h1>WATCHES</h1>
      <div className="Watches">
        {watches.map((watch) => (
          <div key={watch.id} className="Watch">
            <h3 className="Watch-info">{watch.name}</h3>
            <h3 className="Watch-info">{watch.manufacturer}</h3>
            <h3 className="Watch-info">{watch.description}</h3>
            <h3 className="Watch-info">{watch.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watches;
