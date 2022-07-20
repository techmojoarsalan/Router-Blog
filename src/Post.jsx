import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom"

function Post() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    axios.post('http://localhost:3004/blogs', {
      title,
      url
    }).then(function (response) {
      console.log(response);
      navigate('/')
    })
      .catch(function (error) {
        console.log(error);
      });
    navigate('/')
  }
  return (
    <>
      <Container className='mt-5 w-100'>
        <h1 className='text-center'>Create a Blog </h1>
        <Form onSubmit={handleSubmit} className="w-50">
          <Form.Group className="mb-3">
            <Form.Label>Blog Titile</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>URL</Form.Label>
            <Form.Control type="url" placeholder="Enter Url" value={url} onChange={(e) => setUrl(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {/* <Button onClick={}></Button> */}
      </Container>
    </>
  )
}

export default Post