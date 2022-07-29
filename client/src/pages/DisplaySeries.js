import { useEffect, useState } from "react";

import axios from "axios";

import SeriesCard from "../components/SeriesCard";

const DisplaySeries = () => {
  const [series, setSeries] = useState([]);

  const showAllSeries = async () => {
    const response = await axios.get("http://localhost:3001/serieslist");
    setSeries(response.data.comicSeries);
  };

  useEffect(() => {
    showAllSeries();
  }, []);
  return (
    <div className="SeriesList container-grid">
      <h2>List of Series</h2>
      {series.map((series) => (
        <SeriesCard series={series} showAllSeries={showAllSeries} />
      ))}
    </div>
  );
};
export default DisplaySeries;
