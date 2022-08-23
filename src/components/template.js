import React, { useEffect, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
// import { Parser } from "html-to-react";
import parse from "html-react-parser";
import "./template.css";
import { FaMobileAlt, FaTabletAlt, FaLaptop } from "react-icons/fa";

const htmlInput = ``;
// const htmlToReactParser = new Parser();
// const reactElement = htmlToReactParser.parse(htmlInput);
// console.log(reactElement.props.children);
// console.log(parse(htmlInput));

// assert.equal(reactHtml, htmlInput); // true

const Template = () => {
  // const [tempEditor, setTempEditor] = useState(null);
  // useEffect(() => {
  //   const editor = grapesjs.init({
  //     container: "#tempEditor",
  //   });
  //   setTempEditor(editor);
  // }, []);
  const [activeElementSelection, setActiveElementSelelection] = useState(true);
  const [activeTab, setActiveTab] = useState("style");
  return (
    <div style={{ height: "100vh" }}>
      <nav className="bg-primary">
        <div className="flex h-14 py-3 px-1 ml-80 w-1/6 justify-around txt-grey">
          <FaLaptop className="w-12 h-9 cursor-pointer" />
          <FaTabletAlt className="w-12 h-9 cursor-pointer" />
          <FaMobileAlt className="w-12 h-9 cursor-pointer" />
        </div>
      </nav>
      <div className="flex" style={{ height: "92.5%" }}>
        <div
          style={{
            width: "23%",
            zIndex: 10,
            boxShadow: "5px 0 5px 0 #212121",
          }}
          className="border-solid border border-primary h-full bg-primary shadow-xl"
        >
          <div className="border-solid border-b-2 p-2 border-inactive h-3/6">
            {activeElementSelection ? (
              <>
                <div className="flex justify-between">
                  <div className="text-white">Screens</div>
                  <div
                    className="mt-1 bg-secondary cursor-pointer"
                    style={{
                      borderRadius: "50%",
                      height: 20,
                      width: 20,
                      color: "black",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 20,
                        fontWeight: 600,
                        position: "absolute",
                        bottom: -1,
                        left: 3,
                        // border: "1px solid white",
                        padding: 0,
                      }}
                    >
                      +
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={(e) => console.log(e.target)}
                  className="bg-secondary text-white font-bold ml-10 my-5 py-2 px-5 w-60 rounded"
                >
                  Button
                </button>
              </>
            )}
          </div>
          <div>
            <div className="flex justify-between p-2">
              <div></div>
              <div
                className="mt-1 bg-secondary cursor-pointer"
                style={{
                  borderRadius: "50%",
                  height: 20,
                  width: 20,
                  color: "black",
                  position: "relative",
                }}
                onClick={() =>
                  setActiveElementSelelection(!activeElementSelection)
                }
              >
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    position: "absolute",
                    bottom: -1,
                    left: 3,
                    // border: "1px solid white",
                    padding: 0,
                  }}
                >
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "54%",
          }}
          className="h-full bg-inactive"
        >
          <div></div>
        </div>
        <div
          style={{
            width: "23%",
            boxShadow: "-5px 0 5px 0 #212121",
          }}
          className="border-solid border border-primary h-full bg-primary shadow"
        >
          <div>
            <div className="flex justify-between h-9">
              <div
                className={`w-3/6 cursor-pointer text-center pt-1 ${
                  activeTab == "style"
                    ? "border-solid border-b border-secondary txt-secondary"
                    : "bg-inactive text-white"
                }`}
                onClick={() => setActiveTab("style")}
              >
                Style
              </div>
              <div
                className={`w-3/6 cursor-pointer text-center pt-1 ${
                  activeTab == "condition"
                    ? "border-solid border-b border-secondary txt-secondary"
                    : "bg-inactive text-white"
                }`}
                onClick={() => setActiveTab("condition")}
              >
                Conditions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
