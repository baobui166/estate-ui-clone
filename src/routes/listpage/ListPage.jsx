import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import Map from "../../components/map/Map";
import { listData } from "../../lib/dummyData";
import "./ListPage.scss";

function ListPage() {
  const data = listData;
  console.log(data);
  return (
    <div className="listpage">
      <div className="listcontainer">
        <div className="wrapper">
          <Filter />

          <div className="cards">
            {data.map((item) => (
              <Card key={item.id} item={item}>
                card
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="mapcontainer">
        <Map items={data} />
      </div>
    </div>
  );
}

export default ListPage;
