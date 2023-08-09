import { motion } from "framer-motion";
import { useState } from "react";
import "./Stream.css";
import React from "react";
import { BiSolidDownArrow } from "react-icons/bi";

interface StreamElementProps {
  children: string;
  platform: React.ReactNode;
}

function StreamElement({ children, platform }: StreamElementProps) {
  const [showElement, setShowElement] = useState(false);
  return (
    <>
      <div className="stream-element">
        {React.cloneElement(platform as React.ReactElement, {
          onMouseEnter: () => setShowElement(true),
          onMouseLeave: () => setShowElement(false),
        })}
        {showElement && (
          <motion.h4 className="stream-element-popup">{children}</motion.h4>
        )}
        {showElement && (
          <BiSolidDownArrow className="stream-element-popup-icon" />
        )}
      </div>
    </>
  );
}

export default StreamElement;
