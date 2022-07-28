import { Route, Routes, useNavigate } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import DisplaySeries from "./pages/DisplaySeries";
import DisplayIssues from "./pages/DisplayIssues";
import SearchSeries from "./pages/SearchSeries";
import SearchIssues from "./pages/SearchIssues";
import AddSeries from "./pages/AddSeries";
import AddIssue from "./pages/AddIssue";
import EditSeries from "./pages/EditSeries";
import EditIssue from "./pages/EditIssue";
import DeleteIssue from "./pages/DeleteIssue";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/serieslist" element={<DisplaySeries />} />
          <Route path="/issuelist" element={<DisplayIssues />} />
          <Route path="/searchseries" element={<SearchSeries />} />
          <Route path="/searchissues" element={<SearchIssues />} />
          <Route path="/newseries" element={<AddSeries />} />
          <Route path="/newissue/:seriesName" element={<AddIssue />} />
          <Route path="/updateseries/:id" element={<EditSeries />} />
          <Route path="/updateissue/:id" element={<EditIssue />} />
          {/* <Route path="/removeissue/:id" element={<DeleteIssue />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
