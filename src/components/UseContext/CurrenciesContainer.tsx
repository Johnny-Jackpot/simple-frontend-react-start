import React from "react";
import CurrencyDisplay from "./CurrencyDisplay.tsx";

const CurrenciesContainer: React.FC = () => {
  return (
    <>
      <CurrencyDisplay currency="EUR" rate={1.2} />
      <CurrencyDisplay currency="UAH" rate={40} />
    </>
  );
};

export default CurrenciesContainer;
