import React from "react";
import classes from "./Card.module.scss";

export default function Card({ className, children }) {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
}
