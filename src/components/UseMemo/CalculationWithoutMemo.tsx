import React from "react";

interface CalculationWithoutMemoProps {
  numbers: number[];
}

const CalculationWithoutMemo: React.FC<CalculationWithoutMemoProps> = ({
  numbers,
}) => {
  const sum = () => {
    console.log('Calculating sum without useMemo');
    return numbers.reduce((total, cur) => total + cur, 0);
  };

  return <div>Sum: {sum()}</div>;
};

export default CalculationWithoutMemo;