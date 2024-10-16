import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const MeasuredHeight: React.FC = () => {
  const [heightInUselayoutEffect, setHeightInUselayoutEffect] = useState(0);
  const [messageFromUseEffect, setMessageFromUseEffect] = useState("");
  const divRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      const measuredHeight = divRef.current?.getBoundingClientRect().height;
      setHeightInUselayoutEffect(measuredHeight);
      console.log(`Calculated height: ${measuredHeight}`);
    }
  }, []);

  useEffect(() => {
    setMessageFromUseEffect(
      `useEffect: Calculated height: ${heightInUselayoutEffect}`,
    );
    console.log("useEffect: component rendered");
  }, [heightInUselayoutEffect]);

  return (
    <>
      <div
        ref={divRef}
        className="margin-top-10 margin-left-10 margin-right-10"
        style={{ padding: "20px", border: "1px solid red" }}
      >
        This element's height is calculated with useLayoutEffect
      </div>

      <p>Calculated element's height: {heightInUselayoutEffect.toFixed()}</p>

      <p>{messageFromUseEffect}</p>
    </>
  );
};

export default MeasuredHeight;
