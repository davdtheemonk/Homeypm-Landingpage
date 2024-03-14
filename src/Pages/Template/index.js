import dayjs from "dayjs";
import "dayjs/locale/en";
import { Facebook, LinkedIn, LockClock, Twitter } from "@mui/icons-material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { api } from "../../unsplash";

export default function Template(props) {
  const [title, setTitle] = useState("");
  const [loader, setLoader] = useState(true);
  const [post, setPost] = useState("");
  const [timetoread, setTimeToRead] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [writer, setWriter] = useState("");
  const [img, setPhotosResponse] = useState(null);
  const { id } = useParams();

  const getData = async () => {
    await axios
      .get(
        `https://probablyx.pythonanywhere.com/posts/?search=${id.replace(
          /-/g,
          " "
        )}`
      )
      .then((res) => {
        setDate(dayjs(res.data[0].date).format("ddd MMM DD, YYYY"));
        setTitle(res.data[0].title);
        setTimeToRead(res.data[0].timetoread);
        setPost(res.data[0].post.replaceAll('"', ""));
        setWriter(res.data[0].writer);
        setLocation(res.data[0].location);
        setImage(res.data[0].image);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  api.photos
    .get({ photoId: `${image.replaceAll('"', "")}` })
    .then((result) => {
      setPhotosResponse(result.response.urls.raw);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setLoader(false);
    });
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:image" content={img} />
      </Helmet>
      {loader ? (
        <div className="flex w-full justify-center items-center  md:h-screen ">
          <img src="/loader.gif" width="200px" alt="loader" />
        </div>
      ) : (
        <div className="flex md:flex-row flex-col items-start justify-start md:min-h-screen h-full md:px-10  mt-32 p-5">
          <div>
            <p className="mt-4 font-bold text-xl">
              {title.replaceAll('"', "")}
            </p>

            <div className="flex justify-start items-center align-center gap-2 flex-row mt-4">
              <img
                src={
                  writer.replaceAll('"', "") === "David Mugalla"
                    ? "/david.jpeg"
                    : writer.replaceAll('"', "") === "Daniel Kalutu"
                    ? "/kalutu.jpg"
                    : writer.replaceAll('"', "") === "James Thaura"
                    ? "/jmweni.jpeg"
                    : writer.replaceAll('"', "") === "Maxwell Gad"
                    ? "/max.jpeg"
                    : ""
                }
                alt="avatar"
                className="w-10 h-10 rounded-full "
              />
              <div className="flex flex-col">
                <p className="text-grey text-sm">
                  Published by <u>{writer}</u> on {date.replaceAll('"', "")}
                </p>
                <div className="flex justify-start items-center align-center gap-2 flex-row">
                  <LockClock />
                  <p className="text-grey text-sm">
                    {timetoread.replaceAll('"', "")} read ·{" "}
                    {location.replaceAll('"', "")}
                  </p>
                </div>
              </div>
            </div>
            <img
              alt="cover"
              className="md:w-[60%] w-[100%]  md:mx-0 mx-auto flex mt-4 "
              src={img}
            />
            <div className="md:w-[60%] w-[100%]  md:mx-0 mx-auto flex  mb-20 ">
              <p
                className="mt-10 py-2"
                style={{ width: "100%" }}
                dangerouslySetInnerHTML={{
                  __html: post.replace(/\\n/g, "<br>"),
                }}
              ></p>
            </div>
          </div>
          <div className="md:w-[400px] bg-darkblue card p-8 rounded-md md:fixed right-40 flex  flex-col mt-10 md:mt-0 text-white">
            <p className="text-center mb-4 font-bold">About author</p>
            <img
              src={
                writer.replaceAll('"', "") === "David Mugalla"
                  ? "/david.jpeg"
                  : writer.replaceAll('"', "") === "Daniel Kalutu"
                  ? "/kalutu.jpg"
                  : writer === "James Thaura"
                  ? "/jmweni.jpeg"
                  : writer.replaceAll('"', "") === "Maxwell Gad"
                  ? "/max.jpeg"
                  : ""
              }
              alt="avatar"
              className="w-32  rounded-full mx-auto "
            />
            {writer.replaceAll('"', "") === "David Mugalla" && (
              <>
                <p className="mt-4 text-center text-sm ">
                  <b>{writer.replaceAll('"', "")}</b> is a passionate software
                  engineer and is currently the co-founder and CEO of Homey
                  heading growth and development. Connect with him below.
                </p>
                <div className="flex flex-row justify-center items-center  mt-6 gap-4">
                  <Facebook className="cursor-pointer"></Facebook>
                  <Twitter
                    onClick={() => {
                      window.open("https://twitter.com/dev_dave1", "_blank");
                    }}
                    className="cursor-pointer"
                  />
                  <LinkedIn
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/david-mugalla-198149215/",
                        "_blank"
                      );
                    }}
                    className="cursor-pointer"
                  />
                </div>
              </>
            )}
            {writer.replaceAll('"', "") === "Maxwell Gad" && (
              <>
                <p className="mt-4 text-center text-sm ">
                  <b>O.Maxwell Gad</b> is the co-founder and COO of Homey. He
                  hosts a wealth of knowledge derived from building and
                  developing startups. Connect with him below
                </p>
                <div className="flex flex-row justify-center items-center  mt-6 gap-4">
                  <Facebook
                    className="cursor-pointer"
                    onClick={() => {
                      window.open(
                        "https://www.facebook.com/gmo.owino",
                        "_blank"
                      );
                    }}
                  ></Facebook>
                  <Twitter
                    onClick={() => {
                      window.open(
                        "https://x.com/maxwell_gad?t=d524CoJcOh4xngAkN0bQZA&s=09",
                        "_blank"
                      );
                    }}
                    className="cursor-pointer"
                  />
                  <LinkedIn
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/omaxwellgad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                        "_blank"
                      );
                    }}
                    className="cursor-pointer"
                  />
                </div>
              </>
            )}
            {writer.replaceAll('"', "") === "Daniel Kalutu" && (
              <>
                <p className="mt-4 text-center text-sm ">
                  <b>Daniel Kalutu</b> is a founding engineer at Homey. He
                  boasts of his experience and love for software
                  development.Connect with him below.
                </p>
                <div className="flex flex-row justify-center items-center  mt-6 gap-4">
                  <Facebook className="cursor-pointer"></Facebook>
                  <Twitter className="cursor-pointer" />
                  <LinkedIn className="cursor-pointer" />
                </div>
              </>
            )}
            {writer.replaceAll('"', "") === "James Thaura" && (
              <>
                <p className="mt-4 text-center text-sm ">
                  <b>James Thaura</b> is a founding engineer and Growth Hacker
                  at Homey. He hornes skills in strategy development and
                  execution. Connect with him below.
                </p>
                <div className="flex flex-row justify-center items-center  mt-6 gap-4">
                  <Facebook className="cursor-pointer"></Facebook>
                  <Twitter
                    className="cursor-pointer"
                    onClick={() => {
                      window.open(
                        "https://x.com/thisthaura?t=yCyY819Sk-a9-ZNVsdXUSQ&s=09",
                        "_blank"
                      );
                    }}
                  />
                  <LinkedIn
                    className="cursor-pointer"
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/jamesthaura",
                        "_blank"
                      );
                    }}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
