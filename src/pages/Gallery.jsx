import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImagesComp from "../components/ImagesComp";

const Gallery = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [apiImages, setApiImages] = useState([]);

  useEffect(() => {
    axios
      .get("/images")
      .then(({ data }) => {
        console.log({ data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        paddingBottom: "20px",
        boxSizing: "border-box",
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        My Work Gallery
      </Typography>
      <ImagesComp
        image="https://images.unsplash.com/photo-1598219062199-a940294982e7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1ha2V1cCUyMGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D"
        alt="makeup picture"
        title="image"
      />
    </Box>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1598219062199-a940294982e7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1ha2V1cCUyMGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Makeup work",
  },
  {
    img: "https://images.unsplash.com/photo-1621786032758-112a390cb7ca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG1ha2V1cCUyMGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1618424696120-0ea999267ae8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fG1ha2V1cCUyMGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1616143925916-ed1ce6d5f690?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxtYWtldXAlMjBhcnRpc3R8ZW58MHx8MHx8fDA%3D",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1527255389201-3d03c5d92a60?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGJyaWRlcyUyMG1ha2V1cCUyMGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1648671095069-59d78ae4b1fd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxicmlkZXMlMjBtYWtldXAlMjBhcnRpc3R8ZW58MHx8MHx8fDA%3D",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1646770965835-4547b3ef13b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEwfHxicmlkZXMlMjBtYWtldXB8ZW58MHx8MHx8fDA%3D",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1611826585949-b0ccabd2c1a4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1ha2V1cHxlbnwwfHwwfHx8Mg%3D%3D",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1629297777138-6ae859d4d6df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1ha2V1cHxlbnwwfHwwfHx8Mg%3D%3D",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1630084775816-7abb7383ded5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1ha2V1cHxlbnwwfHwwfHx8Mg%3D%3D",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1605813804564-2c9babc4611e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG1ha2V1cHxlbnwwfHwwfHx8Mg%3D%3D",
    title: "Bike",
  },
];

export default Gallery;
