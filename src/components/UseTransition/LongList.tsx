import React, {useState, useTransition} from "react";

type DataItem = { id: number; name: string }
type DataArray = DataItem[];

const LongList: React.FC = () => {
  const [filterInputValue, setFilterInputValue] = useState("");
  const [isPending, startTransition] = useTransition();

  const items = Array.from({ length: 25000 }, (_, i) => ({
    id: i,
    name: `Item: ${i}`,
  }));

  const filterItems = (dataArr: DataArray, filterBy: string) =>
    dataArr.filter((item: DataItem) => item.name.includes(filterBy.toLowerCase()));

  const filteredItems = filterItems(items, filterInputValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setFilterInputValue(e.target.value);
    startTransition(() => setFilterInputValue(e.target.value));
  }

  return (
    <>
      <input
        type="text"
        value={filterInputValue}
        onChange={handleInputChange}
      />
      {isPending ? <p>Loading...</p> : null}
      <ul>
        {filteredItems.map((item: DataItem) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default LongList;
