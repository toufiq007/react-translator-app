import { Volume2, Copy, ArrowLeftRight } from "lucide-react";

const Translate = () => {
  return (
    <div
      className="containerx"
      style={{
        borderRadius: "10px",
        padding: "40px",
        minWidth: "800px",
        background: "#fff",
        width: "100%",
      }}
    >
      <div
        className="wrapperx"
        style={{
          border: "2px solid #ccc",
          height: "300px",
          borderRadius: "10px 10px 0px 0px",
          borderBottom: "none",
          boxShadow: "0 10px 20px rgba(0,0,0,0.01)",
        }}
      >
        <div
          className="text-inputx"
          style={{ display: "flex", height: "100%" }}
        >
          <textarea
            spellCheck="false"
            placeholder="enter text"
            style={{
              width: "100%",
              height: "100%",
              padding: "5px",
              resize: "none",
              outline: "none",
              border: "none",
            }}
          ></textarea>

          <textarea
            spellCheck="false"
            readOnly
            placeholder="translation"
            style={{
              width: "100%",
              height: "100%",
              borderLeft: "2px solid #ccc",
              padding: "5px",
              resize: "none",
              outline: "none",
            }}
          ></textarea>
          <div></div>
        </div>
      </div>

      <div
        className="flex justify-between"
        style={{ border: "1px solid #ccc", padding: "20px" }}
      >
        <div className="flex items-center gap-[20px]">
          <Volume2 size="20px" />
          <Copy size="20px" />
          <select>
            <option>limon</option>
            <option>limon</option>
            <option>limon</option>
          </select>
        </div>
        <div>
          <ArrowLeftRight size="20px" />
        </div>
        <div className="flex items-center gap-[20px]">
          <Volume2 size="20px" />
          <Copy size="20px" />
          <select>
            <option>limon</option>
            <option>limon</option>
            <option>limon</option>
          </select>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          style={{
            width: "100%",
            background: "rgb(248, 202, 186)",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          Translate Text
        </button>
      </div>
    </div>
  );
};

export default Translate;
