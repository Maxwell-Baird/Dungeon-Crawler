import React, { useMemo, useEffect } from "react";
import { mapImage } from "./MapImage";
import "./Map.css";
import { usePlayerDispatch } from "../playerState";

const Map = () => {
  const { saveToLS } = usePlayerDispatch();
  useEffect(saveToLS, []); // save player when they go to the map screen

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
