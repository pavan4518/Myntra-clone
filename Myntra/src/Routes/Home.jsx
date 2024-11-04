import { useSelector } from "react-redux";
import HomeItems from "../Components/HomeItems";

export default function Home() {
  const items = useSelector((store) => store.items);

  return (
    <div>
      <main>
        <div className="items-container">
          {items.map((item) => (
            <HomeItems key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
}
