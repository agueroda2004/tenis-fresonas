import React from "react";
import SpinLoading from "./SpinLoading";

export default function SneakerImage({ src }) {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <SpinLoading className="text-primary" size={60} />
        </div>
      )}

      <img
        src={src}
        alt=""
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
