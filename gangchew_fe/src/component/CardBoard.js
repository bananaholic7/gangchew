import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import '../component/css/CardBoard.css'
function CardBoard() {
  const image = "/carousel001.jpg";
  
  return (
    <div id="card-container">
    <Card sx={{ maxWidth: 270, maxHeight: 330 }} className="cardBoard">
        <CardActionArea>
          <CardMedia
            component="img"
            image={image}
            alt="image"
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Lizardㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {/* content */}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            button
          </Button>
        </CardActions>
      </Card>
      </div>
  );
}

export default CardBoard;