import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import { useState } from "react";

export default function App() {
  const data = [
    {
      artist: "JID",
      albumName: "God Does Like Ugly",
      albumArt:
        "https://i.scdn.co/image/ab67616d0000b27304667714de9d51ae13be706b",
      summary:
        "JID’s God Does Like Ugly is so fucking good. It starts off with a ton of bangers, kind of mellows out at the midpoint, then pick back up at the end. Some great gym songs on there.",
      favSongs: [
        "1) WRK (holy shit this song got me through the spring it’s so fucking good PLEASE LISTEN TO IT!!!)",
        "2) Sk8 (incredible bouncy dance song)",
        "3) YouUgly (best album opener I’ve heard this year)",
        "4) Glory (banger)",
        "5) For Keeps (calm)",
      ],
    },
  ];
  return (
    <>
      {data.map((post: any) => (
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            alt="albumArt"
            height="full"
            image={post.albumArt}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {post.artist} - {post.albumName}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {post.summary}
            </Typography>
            <hr />
            {post.favSongs.map((song: string) => (
              <Typography sx={{ color: "text.secondary", fontSize: "12px" }}>
                {song}
              </Typography>
            ))}
          </CardContent>
          {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
      ))}
    </>
  );
}
