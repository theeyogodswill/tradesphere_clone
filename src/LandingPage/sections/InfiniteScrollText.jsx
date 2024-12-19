import { image, img } from "framer-motion/client";
import React, { useEffect, useRef } from "react";

const InfiniteScrollText = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;

    let scrollAmount = 0;

    const scrollAnimation = () => {
      scrollAmount -= 1; // Adjust the speed by changing the step size
      if (container) {
        container.style.transform = `translateX(${scrollAmount}px)`;

        // Reset scroll to the starting position for an infinite loop
        if (Math.abs(scrollAmount) >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
      requestAnimationFrame(scrollAnimation);
    };

    scrollAnimation();
  }, []);

  return (
    <div className="w-full overflow-hidden bg-[#D2CBCB80] py-4">
      <div
        ref={scrollContainerRef}
        className="flex space-x-8 text-[#00376B] text-lg font-bold whitespace-nowrap"
      >
        {Array(20)
          .fill("Tradesphere")
          .map((word, index) => (
            <span key={index} className="px-1 flex gap-7">
              {word} <img src="/public/assets/productmarket/star7.svg" alt="" />
            </span>
          ))}
      </div>
    </div>
  );
};

export default InfiniteScrollText;
