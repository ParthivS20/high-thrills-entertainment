import React from "react";
import { Helmet } from "react-helmet";

export default function Title(props) {
  return (
    <Helmet>
      <title>{props.title + " | High Thrills Entertainment"}</title>
    </Helmet>
  );
}
