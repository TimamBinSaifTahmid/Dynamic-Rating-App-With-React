import react from "react";
import { useState } from "react";
const voteCount = 10;
const productName = "Book";
const productDescription = "Science Fiction";

function Product(props) {
  // const [vote_Count, setVoteCount] = useState(props.voteCnt);
  let voteCount = props.voteCnt;
  function likeHandler(e) {
    // setVoteCount(1 + voteCount);
    props.upvote(props.id);
    console.log(voteCount);
  }
  return (
    <div className="row">
      <div className="productDetails">
        <img src={props.img_url}></img>
      </div>
      <div div className="pDetails">
        <p>
          {" "}
          <b>Product Name: </b>
          {props.name}{" "}
        </p>
        <p>
          {" "}
          <b>Product Description: </b>
          {props.description}
        </p>
        <p id="voteCount">
          <b> Vote Count: </b> {voteCount}
        </p>
        <button name="b1" id="b1" onClick={likeHandler}>
          Upvote
        </button>
      </div>
    </div>
  );
}
export default Product;
