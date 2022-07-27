import { useEffect, useState } from "react";

import axios from "axios";

import SeriesCard from "../components/SeriesCard";

const DisplaySeries = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const showAllSeries = async () => {
      const response = await axios.get("http://localhost:3001/serieslist");
      setSeries(response.data.comicSeries);
    };
    showAllSeries();
  }, []);
  return (
    <div className="SeriesList">
      <h2>List of Series</h2>
      {series.map((series) => (
        <SeriesCard series={series} />
      ))}
    </div>
  );
};
export default DisplaySeries;
