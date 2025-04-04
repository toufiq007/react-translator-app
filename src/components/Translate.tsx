import { useState } from "react";
import { Volume2, Copy, ArrowLeftRight, Loader2, Check } from "lucide-react";
import countries from "../data/data"; // Ensure this is properly typed

// Define country type
type CountryType = Record<string, string>;

const Translate: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [translatedText, setTranslatedText] = useState<string>("");
  const [fromLang, setFromLang] = useState<string>("en-US"); // Default: English
  const [toLang, setToLang] = useState<string>("bn-BD"); // Default: Bangla
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [copied, setCopied] = useState<"input" | "output" | null>(null);

  // Google Translate API Function
  const handleTranslate = async () => {
    if (!inputText.trim()) return; // Prevent empty translations

    setLoading(true); // Start loading
    setTranslatedText("Translating..."); // Show loading text
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${
      fromLang.split("-")[0]
    }&tl=${toLang.split("-")[0]}&dt=t&q=${encodeURIComponent(inputText)}`;

    try {
      const response = await fetch(url);
      const data: any = await response.json();
      setTranslatedText(data[0].map((item: any) => item[0]).join(""));
    } catch (error) {
      console.error("Translation error:", error);
      setTranslatedText("Translation failed!");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // handle copy features
  const handleTextCopy = (text: string, type: "input" | "output") => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  // handle speak features
  const handleTextToSpeak = (text: string, lang: string) => {
    if (!text.trim()) return;
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    speechSynthesis.speak(utterance);
  };

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
            placeholder="Enter text..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
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
            placeholder="Translation..."
            value={translatedText}
            style={{
              width: "100%",
              height: "100%",
              borderLeft: "2px solid #ccc",
              padding: "5px",
              resize: "none",
              outline: "none",
            }}
          ></textarea>
        </div>
      </div>

      <div
        className="flex justify-between"
        style={{ border: "1px solid #ccc", padding: "20px" }}
      >
        <div className="flex items-center gap-[20px]">
          <button onClick={() => handleTextToSpeak(inputText, fromLang)}>
            <Volume2 size="15px" />
          </button>
          <button
            onClick={() => handleTextCopy(inputText, "input")}
            title="copy text"
            className="cursor-pointer"
          >
            {copied === "input" ? (
              <Check size="15px" color="green" />
            ) : (
              <Copy size="15px" />
            )}
          </button>
          <select
            value={fromLang}
            onChange={(e) => setFromLang(e.target.value)}
          >
            {Object.entries(countries as CountryType).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <ArrowLeftRight
            size="20px"
            className="cursor-pointer"
            onClick={() => {
              setFromLang(toLang);
              setToLang(fromLang);
            }}
          />
        </div>

        <div className="flex items-center gap-[20px]">
          <button onClick={() => handleTextToSpeak(translatedText, toLang)}>
            <Volume2 size="15px" />
          </button>
          <button
            onClick={() => handleTextCopy(translatedText, "output")}
            title="copy text"
          >
            {copied === "output" ? (
              <Check size="15px" color="green" />
            ) : (
              <Copy size="15px" />
            )}
          </button>
          <select value={toLang} onChange={(e) => setToLang(e.target.value)}>
            {Object.entries(countries as CountryType).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handleTranslate}
          disabled={loading} // Disable button when loading
          style={{
            width: "100%",
            background: loading ? "gray" : "rgb(248, 202, 186)",
            padding: "10px",
            borderRadius: "10px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? (
            <div className="flex justify-center items-center">
              <Loader2 size="20px" className="animate-spin" />
            </div>
          ) : (
            <div>Translate Text</div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Translate;
