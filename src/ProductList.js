import React from "react";
import Product from "./Product";
import { useState } from "react";
const img_url =
  "http://images.amazon.com/images/P/0596004478.01._PE30_PI_SCMZZZZZZZ_.jpg";
const product_Lib = [
  {
    id: 1,
    voteCnt: "11",
    name: "Book1",
    description: "Novel",
  },
  {
    id: 2,
    voteCnt: "10",
    name: "Book2",
    description: "Literaure",
  },
  {
    id: 3,
    voteCnt: "9",
    name: "Book3",
    description: "Science Fiction",
  },
];
function ProductList() {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const [voteCount, setVoteCount] = useState(product_Lib);
  function addProduct(id) {
    let index = product_Lib.findIndex((obj) => obj.id === id);
    product_Lib[index].voteCnt++;
    setVoteCount(product_Lib);
    product_Lib.sort((a, b) => b.voteCnt - a.voteCnt);
    console.log(product_Lib);
    forceUpdate();
  }
  const newProductList = product_Lib.map((pd) => (
    <Product
      id={pd.id}
      img_url={img_url}
      voteCnt={pd.voteCnt}
      name={pd.name}
      description={pd.description}
      upvote={addProduct}
    />
  ));
  return <div>{newProductList}</div>;
}
export default ProductList;
