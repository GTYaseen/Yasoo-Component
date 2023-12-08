import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import styles from "./iconButton.module.css";
import {
  AiFillAudio,
  AiFillApi,
  AiFillClockCircle,
  AiFillDelete,
  AiFillFacebook,
  AiFillFolderOpen,
  AiFillInstagram,
} from "react-icons/ai";

function IconButton({ icon, size, type }) {
  let fontSize, color;

  if (size === "small") {
    fontSize = "13px";
  } else if (size === "medium") {
    fontSize = "16px";
  } else if (size === "large") {
    fontSize = "22px";
  }
  if (type === "primary") {
    color = "#FFFFFF";
  } else if (type === "secondary") {
    color = "#ff1f1f";
  } else {
    color = "#000000";
  }

  if (icon === "search") {
    return <IoIosSearch style={{ fontSize: fontSize, color: color }} />;
  } else if (icon === "outLineHeart") {
    return <FaRegHeart style={{ fontSize: fontSize, color: color }} />;
  } else if (icon === "fillLineHeart") {
    return <FaHeart style={{ fontSize: fontSize, color: color }} />;
  } else if (icon === "MicroPhone") {
    return <AiFillAudio style={{ fontSize: fontSize, color: color }} />;
  } else if (icon === "DisConnect") {
    return <AiFillApi style={{ fontSize: fontSize, color: color }} />;
  } else if (icon === "Clock") {
    return <AiFillClockCircle style={{ fontSize: fontSize, color: color }} />;
  } else if (icon === "Trash") {
    return <AiFillDelete style={{ fontSize: fontSize, color: color }} />;
  } else if (icon === "FaceBook") {
    return <AiFillFacebook style={{ fontSize: fontSize, color: color }} />;
  } else if (icon === "instagram") {
    return <AiFillInstagram style={{ fontSize: fontSize, color: color }} />;
  } else if (icon === "folder") {
    return <AiFillFolderOpen style={{ fontSize: fontSize, color: color }} />;
  }
  // return (
  //   <div>
  //     {icon === "instagram" ? (
  //       <span
  //         className={
  //           size === "large"
  //             ? styles.large
  //             : size === "small"
  //             ? styles.small
  //             : styles.medium
  //         }
  //       >
  //         <AiFillInstagram
  //           className={type === "secondary" ? styles.secondary : styles.primary}
  //         />
  //       </span>
  //     ) : (
  //       <div></div>
  //     )}
  //   </div>
  // );
}

export default IconButton;
