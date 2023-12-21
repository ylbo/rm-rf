"use client";

import { useEffect, useState } from "react";

export default function Terminal({ children }) {
  // var exeRmrf: boolean = false;
  var [exeRmrf, setExeRmrf] = useState(false);
  var [enterCode, setEnterCode] = useState("rm -rf /*");
  const arr = new Array(28).fill(0);

  function enter(event) {
    console.log(event);
    if (event.keyCode === 13) {
      console.log("enter");
      if (enterCode === "rm -rf /*") {
        setExeRmrf(true);
      }
    }
  }

  function generateRandomNumber(min, max) {
    if (min > max) {
      throw new Error("最小值应小于或等于最大值");
    }

    // 计算范围内的随机整数
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber;
  }

  const [output, setOutput] = useState([]);

  useEffect(() => {
    const simulateDelete = async () => {
      setOutput(["Simulating 'rm -rf /*'..."]);

      // Simulate some delay
      // await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulate printing each file in the root directory
      for (let i = 0; i < 100; i++) {
        setOutput((prev) => {
          if (prev.length > 27) {
            return [...prev.slice(1, 27), `Removing file_${i}`];
          } else {
            return [...prev, `Removing file_${i}`];
          }
        });
        // Simulate some delay
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      setOutput(["Operation complete."]);
    };

    if (exeRmrf) {
      simulateDelete();
    }
    // simulateDelete();
  }, [exeRmrf]);

  return (
    <div className="flex flex-col h-full px-1 bg-black rounded-md">
      {/* {!exeRmrf ? children : ""} */}
      {!exeRmrf ? (
        <>
          {children}
          <div className="flex bg-black flow-row">
            <label className="text-white bg-black">root@linux:~#&nbsp;</label>
            <input
              className="w-full text-white bg-black border-black focus:outline-none caret-white"
              autoFocus
              onKeyUp={enter}
              value={enterCode}
              onChange={(e) => setEnterCode(e.target.value)}
            ></input>
          </div>
        </>
      ) : (
        <pre>
          {output.map((line, index) => (
            <div key={index} className="text-white bg-black">
              {line}
            </div>
          ))}
        </pre>
      )}
    </div>
  );
}
