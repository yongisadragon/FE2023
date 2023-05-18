import React from "react";

export default function ImageFile({ img }) {
  return <img style={{ width: 420 }} src={img.download_url} alt="" />;
}
