import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { BsCalendarEvent } from "react-icons/bs";
import "./News.scss";
import { useWindowSize } from "../utility/useWindowSize";

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

  const access_token = process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN;

  useEffect(() => {
    if (access_token) {
      axios
        .get(
          `https://graph.instagram.com/me/media?fields=id,timestamp,caption,media_url,thumbnail_url,permalink&access_token=${access_token}`
        )
        .then((response) => {
          console.log(response);
          setFeed(response.data.data);
        });
    }
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold value as per your preference
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === videoRef.current) {
          if (entry.isIntersecting) {
            // Video is visible on the screen
            videoRef.current?.play();
          } else {
            // Video is not visible on the screen
            videoRef.current?.pause();
          }
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Cleanup the observer when the component is unmounted
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="insta-feed-container">
      <h2>Nyheter</h2>
      <p className="intro-text">
        Håll dig uppdaterad om nyheter i kenneln genom Sandras instagram!
      </p>
      {feed?.length > 0 &&
        feed.map((e) => {
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
                <video controls ref={videoRef}>
                  <source src={e.media_url} type="video/mp4" />
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
        })}
    </div>
  );
};

export default News;
