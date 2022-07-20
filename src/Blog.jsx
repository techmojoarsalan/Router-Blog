import axios from 'axios'
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

export default function Blog() {
  const [blogData, setBlogData] = useState([])
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("")
  const [edit, setEdit] = useState(false);
  const { id } = useParams();
  let nevigate = useNavigate();
  useEffect(() => async () => {
    const res = await axios.get("http://localhost:3004/blogs/" + id);
    console.log(res.data)
    setBlogData(res.data)
  }, [])
  const handleClick = () => {
    axios.delete("http://localhost:3004/blogs/" + id)
    nevigate("/");
  }
  console.log(id)

  const handleEdit = () => {
    setEdit(true);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put("http://localhost:3004/blogs/" + id, {
      title,
      url
    });
    nevigate("/")
  }
  return (
    <div className='flex'><h2>Blog Page</h2>
      <Button variant='success' className='m-3 p-2 ' onClick={() => nevigate("/")}>Home</Button>
      <Card style={{ width: '18rem', objectFit: "contain" }}>
        <Card.Img variant="top" src={blogData.url} alt={blogData.title} className="p-3" />
        <Card.Body>
          <Card.Title>{blogData.title}</Card.Title>
          <Button variant="primary" className='m-2' onClick={handleClick} disabled={edit}>Delete BLog</Button >
          <Button variant='warning' onClick={handleEdit}>Edit</Button>
          {edit && <Button variant='warning' className='m-1' onClick={() => setEdit(false)}>cancel</Button>}
          {edit && <form onSubmit={handleSubmit}>

            <label>Title : </label>
            <input type="text" placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Url : </label>
            <input type="url" placeholder='Enter new url' value={url} onChange={(e) => setUrl(e.target.value)} className="m-2 p-1" />
            <Button type="submit" className='m-3'>Submit</Button>

          </form>}
        </Card.Body>
      </Card>

    </div>
  )
}
