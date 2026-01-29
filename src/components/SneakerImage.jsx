import React from "react";
import SpinLoading from "./SpinLoading";

export default function SneakerImage({ src }) {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className="relative w-10 h-10">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <SpinLoading className="text-primary" size={16} />
        </div>
      )}

      <img
        src={src}
        alt=""
        className={`w-full h-full object-cover rounded-md transition-opacity ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
