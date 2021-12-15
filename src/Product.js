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
    <div className="productDetails">
      <img src={props.img_url}></img>
      <p> Product Name:{props.name} </p>
      <p> Product description:{props.description}</p>
      <p id="voteCount"> Vote Count: {voteCount}</p>
      <button name="b1" id="b1" onClick={likeHandler}>
        Upvote
      </button>
    </div>
  );
}
export default Product;
