import React, { useState, useEffect } from "react";
import CustomLink from "./CustomLink";

export default function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return <CustomLink className="text-sm text-right mb-0 bg-gray-700 text-white hover:text-indigo-100 rounded p-.5" src="...">browser width {width}</CustomLink>;
}
