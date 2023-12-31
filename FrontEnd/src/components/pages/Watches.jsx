import React, { useEffect, useState } from "react";
import useWatches from "../Hooks/useWatches";
import "../css/watches.css";

const Watches = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const watchesData = await useWatches();
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
        {watches.map((watch, index) => (
          <div key={`${watch.id}-${index}`} className="Watch">
            <div className="image-container">
              <img src={watch.imageUrl} alt={watch.description} />
              <div className="text-container">
                <h3 className="Watch-info">{watch.name}</h3>
                <h3 className="Watch-info">{watch.description}</h3>
                <h3 className="Watch-info">{watch.city}</h3>
                <h3 className="Watch-info">{watch.price}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watches;
