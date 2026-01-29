import { useEffect, useState } from "react";
import { Navigate } from "react-router";

export default function MobileOnly({
  children,
  breakpointPx = 768,
  redirectTo = "/not_mobile",
}) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < breakpointPx : true,
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpointPx - 1}px)`);
    const onChange = (e) => setIsMobile(e.matches);

    setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [breakpointPx]);

  if (!isMobile) return <Navigate to={redirectTo} replace />;
  return children;
}
