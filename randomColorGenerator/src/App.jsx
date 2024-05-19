import { useCallback, useState } from "react";

function App() {
  const [hexColor, setHexColor] = useState("#3B82F6");
  const [rgbColor, setRgbColor] = useState("rgb(107,114,128)");
  const [copied, setCopied] = useState(false);
  const [rgbCopied, setRgbCopied] = useState(false);
  const[redRange, setRedRange] = useState("107")
  const[greenRange, setGreenRange] = useState("114")
  const[blueRange, setBlueRange] = useState("128")

  const randomHexColorGenerator = () => {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    setHexColor(color);
    setCopied(false);
  };

  const rgbColorGenerator = () => {
    const newRgbColor = `rgb(${redRange}, ${greenRange}, ${blueRange})`;
    setRgbColor(newRgbColor)
  }

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(hexColor).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  const rgbCopyToClipboard = () => {
    window.navigator.clipboard.writeText(rgbColor).then(() => {
      setRgbCopied(true);
      setTimeout(() => {
        setRgbCopied(false);
      }, 2000);
    });
  };

  return (
    <>
      <div className="w-full h-screen flex">
        <div
          className="hexColor w-1/2 m-2 rounded-lg flex flex-col items-center justify-center text-lg font-bold"
          style={{ backgroundColor: hexColor }}
        >
          {hexColor}
          <button
            onClick={randomHexColorGenerator}
            className="m-3 bg-white p-3 rounded-2xl"
          >
            Generate Hex Color
          </button>
          <button
            onClick={copyToClipboard}
            className="m-3 bg-white p-3 rounded-2xl"
          >
            {copied ? "Copied!" : "Copy to Clipboard"}
          </button>
        </div>

        <div className="rgbColor w-1/2 m-2 rounded-lg flex flex-col items-center justify-center  text-lg font-bold"
        style={{backgroundColor: rgbColor}}        
        >
          {rgbColor}

          <input type="range"
          min={1}
          max={255}
          value={redRange}
          onChange={(e) => {setRedRange(e.target.value)}}
          className="m-2"
          />
          <input type="range"
          min={1}
          max={255}
          value={greenRange}
          onChange={(e) => {setGreenRange(e.target.value)}}
          className="m-2"
          />
          <input type="range"
          min={1}
          max={255}
          value={blueRange}
          onChange={(e) => {setBlueRange(e.target.value)}}
          className="m-2"
          />
          <button
          onClick={rgbColorGenerator}
           className="m-3 bg-white p-3 rounded-2xl">
            Create RGB Color
          </button>
          <button
            onClick={rgbCopyToClipboard}
            className="m-3 bg-white p-3 rounded-2xl"
          >
            {rgbCopied ? "Copied!" : "Copy to Clipboard"}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
