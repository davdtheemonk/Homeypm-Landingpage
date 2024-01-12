import { Facebook, LinkedIn, LockClock, Twitter } from "@mui/icons-material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  console.log(process.env.REACT_APP_UNSPLASH);
  const getData = async () => {
    await axios
      .get(
        `https://probablyx.pythonanywhere.com/posts/?search=${id.replace(
          /-/g,
          " "
        )}`
      )
      .then((res) => {
        setDate(res.data[0].date);
        setTitle(res.data[0].title);
        setTimeToRead(res.data[0].timetoread);
        setPost(res.data[0].post);
        setWriter(res.data[0].writer);
        setLocation(res.data[0].location);
        setImage(res.data[0].image);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  };
  api.photos
    .get({ photoId: `${image.replaceAll('"', "")}` })
    .then((result) => {
      setPhotosResponse(result.response.urls.raw);
    })
    .catch((err) => {
      console.log(err);
      console.log("something went wrong!");
    })
    .finally(() => {
      setLoader(false);
    });
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {loader ? (
        <div className="flex w-full justify-center items-center  md:h-screen ">
          <img src="/loader.gif" width="200px" alt="loader" />
        </div>
      ) : (
        <div className="flex md:flex-row flex-col items-start justify-start md:h-screen h-full md:px-10  mt-32 p-5">
          <div>
            <p className="mt-4 font-bold text-xl">
              {title.replaceAll('"', "")}
            </p>

            <div className="flex justify-start items-center align-center gap-2 flex-row mt-4">
              <img
                src={
                  writer === "David Mugalla"
                    ? "/david.jpeg"
                    : writer === "Daniel Kalutu"
                    ? "/kalutu.jpg"
                    : writer === "James Thaura"
                    ? "/jmweni.jpeg"
                    : writer === "Maxwell Gad"
                    ? "/max.jpeg"
                    : ""
                }
                alt="avatar"
                className="w-10 h-10 rounded-full "
              />
              <div className="flex flex-col">
                <p className="text-grey text-sm">
                  Posted by <u>{writer}</u> on {date.replaceAll('"', "")}
                </p>
                <div className="flex justify-start items-center align-center gap-2 flex-row">
                  <LockClock />
                  <p className="text-grey text-sm">
                    {timetoread.replaceAll('"', "")} read *{" "}
                    {location.replaceAll('"', "")}
                  </p>
                </div>
              </div>
            </div>
            <img
              alt="cover"
              className="md:w-[60%] w-[100%] shadow-md md:mx-0 mx-auto flex mt-4 "
              src={img}
            />
            <div className="md:w-[60%] w-[100%]  md:mx-0 mx-auto flex  mb-20 ">
              <p
                className="mt-10"
                dangerouslySetInnerHTML={{
                  __html: post.replace(/^"(.*)"$/, "$1"),
                }}
              ></p>
            </div>
          </div>
          <div className="md:w-[400px] bg-darkblue card p-8 rounded-md md:fixed right-40 flex  flex-col mt-10 md:mt-0 text-white">
            <p className="text-center mb-4 font-bold">About author</p>
            <img
              src={
                writer === "David Mugalla"
                  ? "/david.jpeg"
                  : writer === "Daniel Kalutu"
                  ? "/kalutu.jpg"
                  : writer === "James Thaura"
                  ? "/jmweni.jpeg"
                  : writer === "Maxwell Gad"
                  ? "/max.jpeg"
                  : ""
              }
              alt="avatar"
              className="w-32  rounded-full mx-auto "
            />
            {writer === "David Mugalla" && (
              <>
                <p className="mt-4 text-center text-sm ">
                  <b>{writer}</b> is a passionate software engineer and is
                  currently the co-founder and CEO of Homey heading growth and
                  development. Connect with him below.
                </p>
                <div className="flex flex-row justify-center items-center  mt-6 gap-4">
                  <Facebook></Facebook>
                  <Twitter />
                  <LinkedIn />
                </div>
              </>
            )}
            {writer === "Maxwell Gad" && (
              <>
                <p className="mt-4 text-center text-sm ">
                  <b>O.Maxwell Gad</b> is the co-founder and COO of Homey. He
                  hosts a wealth of knowledge derived from building and
                  developing startups. Connect with him below
                </p>
                <div className="flex flex-row justify-center items-center  mt-6 gap-4">
                  <Facebook></Facebook>
                  <Twitter />
                  <LinkedIn />
                </div>
              </>
            )}
            {writer === "Daniel Kalutu" && (
              <>
                <p className="mt-4 text-center text-sm ">
                  <b>Daniel Kalutu</b> is a founding engineer at Homey. He
                  boasts of his experience and love for software
                  development.Connect with him below.
                </p>
                <div className="flex flex-row justify-center items-center  mt-6 gap-4">
                  <Facebook></Facebook>
                  <Twitter />
                  <LinkedIn />
                </div>
              </>
            )}
            {writer === "James Thaura" && (
              <>
                <p className="mt-4 text-center text-sm ">
                  <b>James Thaura</b> is a founding engineer and Growth Hacker
                  at Homey. He hornes skills in strategy development and
                  execution. Connect with him below.
                </p>
                <div className="flex flex-row justify-center items-center  mt-6 gap-4">
                  <Facebook></Facebook>
                  <Twitter />
                  <LinkedIn />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
