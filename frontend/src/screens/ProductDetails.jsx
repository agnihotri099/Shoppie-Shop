import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";

import Rating from "../components/Rating";
import {
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  ListGroupItem,
  Form
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { listProductDetails } from "../actions/productActions";
const ProductDetails = ({history,match}) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  // const { id } = useParams();
  // // const product = Product.find((p) => p._id === (id));

  //   const [product,setProduct]=useState([])
  const { id } = useParams();
  
  
  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch,id,match]);

  const navigate = useNavigate()
  history=navigate
  const addToCartHandler = () =>{
    
    history(`/cart/${id}?qty=${qty}`)
  }
   


  return (
    <>
      <Link to={"/"}>Go Back</Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h3>{product.name}</h3>
              </ListGroupItem>
              <ListGroupItem>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} Reviews`}
                />
              </ListGroupItem>
              <ListGroupItem>Price : ${product.price}</ListGroupItem>
              <ListGroupItem>{product.description}</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroupItem>
              <Row>
                <Col>Status</Col>
                <Col>
                  {product.countInStock > 0 ? "In Stock" : "out of stock"}
                </Col>
              </Row>
            </ListGroupItem>
            {product.countInStock > 0 && (
              <ListGroupItem>
                <Row>
                  <Col>Qty</Col>

                  <Form.Control
                    as="select"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </Form.Control>
                </Row>
              </ListGroupItem>
            )}
            <ListGroupItem>
              <Button className="btn-block" type="button" onClick={addToCartHandler}>
                Add to cart
              </Button>
            </ListGroupItem>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductDetails;
