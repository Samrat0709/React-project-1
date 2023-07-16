import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";

const API_KEY = "37976065-2b74746903515be2c7b7d9894";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [galleryImages, setGalleryImages] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setGalleryImages([]); // Clear previous results
    setError("");
    const query = searchQuery.trim();
    if (query !== "") {
      searchImages(query);
    }
  };

  const searchImages = (query) => {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.hits.length > 0) {
          setGalleryImages(data.hits);
        } else {
          setError("No images found.");
        }
      })
      .catch((error) => {
        console.log("Error fetching images:", error);
      });
  };

  const renderImages = () => {
    if (galleryImages.length > 0) {
      return galleryImages.map((image) => {
        return (
          <Card className="image-card col-md-4  " key={image.id}>
            <Card.Img variant="top" src={image.webformatURL} alt={image.tags} />
          </Card>
        );
      });
    } else if (error !== "") {
      return <Alert variant="danger">{error}</Alert>;
    } else {
      return null;
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="custom-form">
        <Form.Group controlId="search-query">
          <Form.Control
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit"  className="custom-button">
          Search
        </Button>
      </Form>
      <div className="image-gallery row">{renderImages()}</div>
    </div>
  );
}

export default Products;
