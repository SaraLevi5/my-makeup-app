import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
  IconButton,
} from "@mui/material";

import GradeIcon from "@mui/icons-material/Grade";

const ImagesComp = ({ image, alt, title }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          width="300"
          sx={{
            objectFit: "contain",
            objectPosition: "center",
          }}
          image={image}
          alt={alt}
        />
      </CardActionArea>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton>
            <GradeIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ImagesComp;
