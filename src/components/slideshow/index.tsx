// Next
import { forwardRef, useImperativeHandle, useState } from "react";

export interface SlideshowHandle {
  openSlideshow: Function;
  closeSlideshow: Function;
  toggleSlideshow: Function;
}

export interface SlideshowProps {}

const Slideshow = forwardRef<SlideshowHandle, SlideshowProps>((props, ref) => {
  useImperativeHandle(ref, () => ({
    openSlideshow: () => openSlideshow(),
    closeSlideshow: () => closeSlideshow(),
    toggleSlideshow: () => toggleSlideshow(),
  }));

  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);

  const openSlideshow = () => setIsSlideshowOpen(true);
  const closeSlideshow = () => setIsSlideshowOpen(false);
  const toggleSlideshow = () => setIsSlideshowOpen((prev) => !prev);

  if (!isSlideshowOpen) return <></>;

  return (
    <div className="flex justify-center items-center absolute top-0 left-0 h-full w-full bg-gray-500/[0.6] z-[100]">
      <div className="h-[4rem] w-[4rem] bg-red-500" onClick={closeSlideshow}></div>
    </div>
  );
});

Slideshow.displayName = "Slideshow";
export default Slideshow;
