import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

export default function App() {
  const [apiData, setApiData] = useState(null);
  const fetchApi = async (e) => {

    const res = await axios.get("http://localhost:3004/blogs");
    console.log(res.data)
    setApiData(res.data)
  }

  useEffect(() => {

    fetchApi();

  }, [])
  return (
    <><h1 className='text-center text-primary'>My Blog</h1>
      <h1 className='text-center'>
        <Link to="/post"> <Button className='p-2 m-2' variant="primary">Create a Blog</Button></Link>
      </h1>
      
        
           <Row sm={1} md={5} className="g-4 m-2">
           {apiData && apiData.map((item) => {
             return <Col>
          <Card>
         <Link to={`/blog/${item.id}`}> 
            <Card.Img variant="top" src={item.url} className="p-3" />
          </Link>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title></Card.Body>

          </Card>
        </Col>
          })}
           </Row>
      </>
  
  )
}