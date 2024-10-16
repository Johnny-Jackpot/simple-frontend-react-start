import React, { useMemo } from "react";

interface CalculationWithoutMemoProps {
  numbers: number[];
}

const CalculationWithoutMemo: React.FC<CalculationWithoutMemoProps> = ({
  numbers,
}) => {
  const sum = useMemo(() => {
    console.log("Calculating sum with useMemo");
    return numbers.reduce((total, cur) => total + cur, 0);
  }, [numbers]);

  return <div>Sum: {sum}</div>;
};

export default CalculationWithoutMemo;
