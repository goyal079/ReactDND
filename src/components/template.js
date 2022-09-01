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
  const [selectedTab, setSelected] = useState("1");

  const [activeElementSelection, setActiveElementSelelection] = useState(true);
  const [activeTab, setActiveTab] = useState("style");
  return (
    <div style={{ height: "100vh" }}>
      <nav className="bg-primary">
        <div className="flex h-14 py-3 px-1 ml-80 w-1/6 justify-around txt-inactive">
          <FaLaptop className="w-12 h-9 cursor-pointer hover:text-[#00adb5]" />
          <FaTabletAlt className="w-12 h-9 cursor-pointer hover:text-[#00adb5]" />
          <FaMobileAlt className="w-12 h-9 cursor-pointer hover:text-[#00adb5]" />
        </div>
      </nav>
      <div className="flex" style={{ height: "92.5%" }}>
        <div
          style={{
            width: "23%",
            zIndex: 10,
            boxShadow: "5px 0 5px -2px #212121",
            borderTopColor: "#393e46",
          }}
          className="border-solid border border-primary h-full bg-primary shadow-xl"
        >
          <div className="border-solid border-b-2 p-2 border-inactive h-3/6 components">
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
              <div>
                <div className="flex my-5 justify-around w-5/6">
                  <p className="txt-secondary text-lg font-normal py-2">Text</p>
                  <button
                    onClick={(e) => console.log(e.target)}
                    className="bg-secondary text-white font-bold py-2 px-5 w-[140px] rounded-sm"
                  >
                    Button Title
                  </button>
                </div>
                <nav className="bg-primary flex w-60">
                  <div
                    className={`cursor-pointer border-b px-5 ${
                      selectedTab == "1"
                        ? "border-secondary txt-secondary"
                        : "border-grey txt-grey"
                    }`}
                    onClick={() => setSelected("1")}
                  >
                    Tab1
                  </div>
                  <div
                    className={`cursor-pointer border-b px-5 ${
                      selectedTab == "2"
                        ? "border-secondary txt-secondary"
                        : "border-grey txt-grey"
                    }`}
                    onClick={() => setSelected("2")}
                  >
                    Tab2
                  </div>
                  <div
                    className={`cursor-pointer border-b px-5 ${
                      selectedTab == "3"
                        ? "border-secondary txt-secondary"
                        : "border-grey txt-grey"
                    }`}
                    onClick={() => setSelected("3")}
                  >
                    Tab3
                  </div>
                </nav>
                <div>
                  <input
                    className="my-5 h-[38px] bg-inactive w-5/6 p-3 border-2 border-secondary rounded-sm outline-none"
                    placeholder="&#xf406; Input Box"
                  />
                </div>
                <div>
                  <input type="range" className="w-3/6" />
                </div>
                <div className="flex my-5 justify-around w-5/6">
                  <p className="txt-secondary text-lg font-normal py-2">Text</p>
                  <button
                    onClick={(e) => console.log(e.target)}
                    className="bg-secondary text-white font-bold py-2 px-5 w-[140px] rounded-sm"
                  >
                    Button Title
                  </button>
                </div>
                <nav className="bg-primary flex w-60">
                  <div
                    className={`cursor-pointer border-b px-5 ${
                      selectedTab == "1"
                        ? "border-secondary txt-secondary"
                        : "border-grey txt-grey"
                    }`}
                    onClick={() => setSelected("1")}
                  >
                    Tab1
                  </div>
                  <div
                    className={`cursor-pointer border-b px-5 ${
                      selectedTab == "2"
                        ? "border-secondary txt-secondary"
                        : "border-grey txt-grey"
                    }`}
                    onClick={() => setSelected("2")}
                  >
                    Tab2
                  </div>
                  <div
                    className={`cursor-pointer border-b px-5 ${
                      selectedTab == "3"
                        ? "border-secondary txt-secondary"
                        : "border-grey txt-grey"
                    }`}
                    onClick={() => setSelected("3")}
                  >
                    Tab3
                  </div>
                </nav>
                <div>
                  <input
                    className="my-5 h-[38px] bg-inactive w-5/6 p-3 border-2 border-secondary rounded-sm outline-none"
                    placeholder="&#xf406; Input Box"
                  />
                </div>
                <div>
                  <input type="range" className="cursor-pointer w-3/6" />
                </div>
              </div>
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
          <div className="container bg-primary rounded-3xl w-340 h-[640px] mx-auto mt-10">
            <div className="thumb bg-inactive rounded"></div>
            <div className="screen bg-inactive"></div>
          </div>
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
