import { useState } from "react";
import "./App.css";
import BackgroundController from "./components/BackgroundController";
import Header from "./components/Header";
import IconController from "./components/IconController";
import SideNav from "./components/SideNav";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContext } from "./context/UpdateStorageContext";
import advertisement from "./assets/advertisement.jpg";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadIcon, setDownloadIcon] = useState();
  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <div>
        <Header DownloadIcon={setDownloadIcon} />
        <div className="w-64 fixed">
          <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
        </div>
        <div className="ml-64 w-[calc(100vw-256px)] grid grid-cols-1 md:grid-cols-6 fixed">
          <div className="md:col-span-2 border h-screen shadow-sm p-5 overflow-auto">
            {selectedIndex == 0 ? <IconController /> : <BackgroundController />}
          </div>
          <div className="md:col-span-3">
            <LogoPreview downloadIcon={downloadIcon} />
          </div>
          <div className="md:col-span-1">
            <div>
              <img
                src={advertisement}
                alt=""
                className="h-screen object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </UpdateStorageContext.Provider>
  );
}

export default App;
