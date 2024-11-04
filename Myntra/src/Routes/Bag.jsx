import { useSelector } from "react-redux";
import BagItems from "../Components/BagItems";
import BagSummuary from "../Components/bagSummuary";

export default function Bag() {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);

  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItems item={item} />
          ))}
        </div>
        {bagItems.length === 0 ? <h3>Your Cart is empty</h3> : <BagSummuary />}
      </div>
    </main>
  );
}
