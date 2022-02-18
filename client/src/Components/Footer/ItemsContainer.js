import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={PRODUCTS} />
      <Item Links={RESOURCES} />
      <Item Links={COMPANY} />
      <Item Links={SUPPORT} />
    </div>
  );
};

export default ItemsContainer;