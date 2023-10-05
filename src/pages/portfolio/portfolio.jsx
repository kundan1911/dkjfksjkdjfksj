import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"; 
import {
  Box,
  styled,
  Card,
  CardContent,
  Typography
} from "@mui/material";
import { getAllPosts } from './api';
import "./App.css";
import MediaCard from "../../components/MediaCard";
import Form from "../../components/Form";

const PostWrapper = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: 50,
  "& > div": {
    border: "1px solid #d4d2d0",
    borderRadius: 10,
    margin: 10,
    width: "30%",
    height: 300
  }
});

const Portfolio = ({points}) => {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");
  const [reward, setReward] = useState(points);
  const [change, setChange] = useState(true);
    // const handleSubmit=(data)=>{
    //     // const userName = useSelector((state) =>{state.matchingUser})
    //     console.log("clickedddd",data)
    //     // return userName;
    // }
  const [textData, setTextData] = useState({
    name: "Donald Trump",
    description: "I am a president.",
    total: "100"
  });
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    total: ""
  });
  useEffect(()=>{console.log("sbutmiit",formData) ; 
//   console.log(handleSubmit(12));
//   console.log("in getdata",userName)
  setFormData({
    name: "",
    description: "",
    total: ""
  }) ;
},[change])
  useEffect(() => {
      const getData = async () => {

          const response = await getAllPosts(userName);
          setPosts(response.data);
      }
      getData();
  }, [])

  return (
    <>
    <section className="bg-white dark:bg-gray-900 color:white">
    <div className="App">
    
      <h1 className="title">Employee Info</h1>
      <div className="container">
        <MediaCard
          name={textData.name}
          description={textData.description}
          total={textData.total}
          change={change}
          setChange={setChange}
          formData={formData}
        />
        
        <Form 
          formData={formData}
          setFormData={setFormData}
          setChange={setChange}
        //   onSubmit={handleSubmit}
        />
        
      </div>
    </div>
    <hr>
    </hr>
    <center>
      <h1>
        Feedbacks
      </h1>
    </center>
      <PostWrapper>
        {posts.map((post) => (
          <Card>
            <CardContent>
              <Typography variant="h5">{post.id}</Typography>
              <Typography style={{ color: "#6f6f6f", margin: "10px 0" }}>
                {post.comment}
              </Typography>
              <Typography style={{ color: "#6f6f6f", marginTop: "auto" }}>
                posted on {new Date(post.createdAt).toLocaleDateString()}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </PostWrapper>
      </section>
    </>
  );
};

export default Portfolio;
