import React, { useMemo } from "react";
import { mapImage } from "./MapImage";
import "./Map.css";

const Map = () => {
  const formattedStr = useMemo(() => {
    const colTags = [
      [/([/|\\]+)/g, "<s>$&</s>"],
      [/(~+)/g, "<b>$&</b>"],
      [/(\.+)/g, "<y>$&</y>"],
      [/(x+)/g, "<lg>$&</lg>"],
      [/(\^+)/g, "<g>$&</g>"],
    ];

    let formattedMap = mapImage;

    for (const [re, sub] of colTags) {
      formattedMap = formattedMap.replace(re, sub);
    }

    return formattedMap;
  }, []);

  return (
    <div className="Map">
      <p dangerouslySetInnerHTML={{ __html: formattedStr }}></p>
    </div>
  );
};

export default Map;
