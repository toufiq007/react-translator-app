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
          borderRadius: "10px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        }}
      >
        <div
          className="text-inputx"
          style={{ display: "flex", height: "100%" }}
        >
          <textarea
            spellCheck="false"
            placeholder="enter text"
            style={{ width: "100%", height: "100%", padding: "5px" }}
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
            }}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Translate;
