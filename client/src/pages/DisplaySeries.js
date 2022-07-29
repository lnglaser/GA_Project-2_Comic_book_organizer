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
    <>
      <h2>List of Series</h2>
      <div className="SeriesList container-grid">
        {series.map((series) => (
          <SeriesCard series={series} showAllSeries={showAllSeries} />
        ))}
      </div>
    </>
  );
};
export default DisplaySeries;
