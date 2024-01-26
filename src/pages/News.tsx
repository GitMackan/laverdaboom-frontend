import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { BsCalendarEvent } from "react-icons/bs";
import "./News.scss";
import { useWindowSize } from "../utility/useWindowSize";
import { CircleLoader } from "react-spinners";

type InstagramData = {
  caption: string;
  id: string;
  media_url: string;
  permalink: string;
  timestamp: Date;
};

const News = () => {
  const [feed, setFeed] = useState<InstagramData[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const windowWidth = useWindowSize().width;
  const [currentVideo, setCurrentVideo] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);

  const setVideoRef = (ref: any, index: any) => {
    if (ref) {
      const observer = new IntersectionObserver((entries) => {
        const isVisible = entries[0].isIntersecting;
        if (!isVisible && currentVideo === index) {
          ref.pause();
        }
      });
      observer.observe(ref);

      // Cleanup the observer when the video component unmounts
      return () => observer.unobserve(ref);
    }
  };

  const access_token = process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN;

  useEffect(() => {
    setLoading(true);
    if (access_token) {
      axios
        .get(
          `https://graph.instagram.com/me/media?fields=id,timestamp,caption,media_url,thumbnail_url,permalink&access_token=${access_token}`
        )
        .then((response) => {
          setFeed(response.data.data);
          setLoading(false);
        });
    }

    axios
      .get(
        `https://graph.instagram.com/refresh_access_token
    ?grant_type=ig_refresh_token
    &access_token=${access_token}`
      )
      .then((resp) => setLoading(false));
  }, []);

  const handleVideoPlay = (index: any) => {
    setCurrentVideo(index);
  };

  return (
    <div className="insta-feed-container">
      <h2>Nyheter</h2>
      <p className="intro-text">
        Håll dig uppdaterad om nyheter i kenneln genom Sandras instagram!
      </p>
      {loading ? (
        <div className="loader">
          <CircleLoader color="#324b4c" size={150} />
        </div>
      ) : (
        feed?.length > 0 &&
        feed.map((e, index) => {
          const date = new Date(e.timestamp);
          const formattedDate = date.toLocaleDateString();

          return (
            <div className="feed">
              <div className="date">
                <BsCalendarEvent
                  size={windowWidth && windowWidth > 900 ? 32 : 20}
                />
                <p>{formattedDate}</p>
              </div>
              <p>{e.caption}</p>
              {e.media_url.includes("mp4") ? (
                <video
                  controls
                  ref={(ref) => setVideoRef(ref, index)}
                  onPlay={() => handleVideoPlay(index)}
                  onPause={() => setCurrentVideo(null)}
                  onEnded={() => setCurrentVideo(null)}
                  preload="metadata"
                >
                  <source src={`${e.media_url}#t=0.001`} type="video/mp4" />
                </video>
              ) : (
                <img src={e.media_url} />
              )}
              <p className="link">
                <a href={e.permalink} target="_blank">
                  Gå till inlägget
                </a>
                <FiExternalLink />
              </p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default News;
