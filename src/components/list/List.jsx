import { listData } from "../../lib/dummyData";
import Card from "../card/Card";
import "./list.scss";

function List() {
  return (
    <div className="list">
      {listData.map((item) => {
        return <Card key={item.id} item={item}></Card>;
      })}
    </div>
  );
}

export default List;
