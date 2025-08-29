import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function App() {
  const [favSongs, setFavSongs] = useState([
    "1) WRK (holy shit this song got me through the spring it’s so fucking good PLEASE LISTEN TO IT!!!)",
    "2) Sk8 (incredible bouncy dance song)",
    "3) YouUgly (best album opener I’ve heard this year)",
    "4) Glory (banger)",
    "5) For Keeps (calm)",
  ]);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://i.scdn.co/image/ab67616d0000b2739efa30c45c7893998f8dadb6"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          GNX - Kendrick Lamar
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          JID’s God Does Like Ugly is so fucking good. It starts off with a ton
          of bangers, kind of mellows out at the midpoint, then picks back up at
          the end. Some great gym songs on there.
        </Typography>
        <hr />
        {favSongs.map((song: string) => (
          <Typography sx={{ color: "text.secondary", fontSize: "12px" }}>
            {song}
          </Typography>
        ))}
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
