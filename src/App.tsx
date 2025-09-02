import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import { useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";
import { useEffect, useState } from "react";
import EmblaCarousel from "./EmblaCarousel";
import type { EmblaOptionsType } from "embla-carousel";
import "./css/base.css";
import "./css/sandbox.css";
import "./css/embla.css";
export default function App() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const snap = await getDocs(collection(db, "reviews"));
      const reviewData = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(reviewData);
    };
    fetchData();
  }, []);
  const OPTIONS: EmblaOptionsType = { axis: "y", loop: true };
  const SLIDE_COUNT = 10;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <>
      {data.map((post: any, index: number) => (
        <div key={index}>
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
                {post.review}
              </Typography>
              <hr />
              {post.favSongs.map((song: any, index: number) => (
                <Typography sx={{ color: "text.secondary", fontSize: "12px" }}>
                  {index + 1}) {song.songName} ({song.songComment})
                </Typography>
              ))}
            </CardContent>
          </Card>
        </div>
      ))}
      <div
        style={{
          outline: "solid #F1C688 10px",
          width: 500,
          borderRadius: 5,
        }}
      >
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </>
  );
}
