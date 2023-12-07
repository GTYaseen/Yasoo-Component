import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import {
  AiFillAudio,
  AiFillApi,
  AiFillClockCircle,
  AiFillDelete,
  AiFillFacebook,
  AiFillFolderOpen,
  AiFillInstagram,
} from "react-icons/ai";

function IconButton({ icon, size }) {
  let fontSize;

  if (size === "small") {
    fontSize = "13px";
  } else if (size === "medium") {
    fontSize = "16px";
  } else if (size === "large") {
    fontSize = "22px";
  }

  if (icon === "search") {
    return <IoIosSearch style={{ fontSize: fontSize }} />;
  } else if (icon === "outLineHeart") {
    return <FaRegHeart style={{ fontSize: fontSize }} />;
  } else if (icon === "fillLineHeart") {
    return <FaHeart style={{ fontSize: fontSize }} />;
  } else if (icon === "MicroPhone") {
    return <AiFillAudio style={{ fontSize: fontSize }} />;
  } else if (icon === "DisConnect") {
    return <AiFillApi style={{ fontSize: fontSize }} />;
  } else if (icon === "Clock") {
    return <AiFillClockCircle style={{ fontSize: fontSize }} />;
  } else if (icon === "Trash") {
    return <AiFillDelete style={{ fontSize: fontSize }} />;
  } else if (icon === "FaceBook") {
    return <AiFillFacebook style={{ fontSize: fontSize }} />;
  } else if (icon === "instagram") {
    return <AiFillInstagram style={{ fontSize: fontSize }} />;
  } else if (icon === "folder") {
    return <AiFillFolderOpen style={{ fontSize: fontSize }} />;
  }
}

export default IconButton;
