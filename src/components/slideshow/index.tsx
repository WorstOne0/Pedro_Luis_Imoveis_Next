/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable react-hooks/exhaustive-deps */

// Next
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
//
import { IoIosArrowForward, IoIosArrowBack, IoMdClose } from "react-icons/io";

export interface SlideshowHandle {
  openSlideshow: Function;
  closeSlideshow: Function;
  toggleSlideshow: Function;
}

export interface SlideshowProps {
  images: string[];
}

const Slideshow = forwardRef<SlideshowHandle, SlideshowProps>(({ images }, ref) => {
  useImperativeHandle(ref, () => ({
    openSlideshow: (index?: number) => openSlideshow(index),
    closeSlideshow: () => closeSlideshow(),
    toggleSlideshow: () => toggleSlideshow(),
  }));

  const openSlideshow = (index?: number) => {
    setIsSlideshowOpen(true);

    if (index != null) setMySlideshow((prev) => ({ ...prev, currentIndex: index }));
  };
  const closeSlideshow = () => setIsSlideshowOpen(false);
  const toggleSlideshow = () => setIsSlideshowOpen((prev) => !prev);

  //
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [mySlideshow, setMySlideshow] = useState({
    currentIndex: 0,
    images: images,
    maxIndex: images.length - 1,
    minIndex: 0,
  });

  const slideshowDivRef = useRef<HTMLDivElement>(null);
  const trackDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSlideshowOpen) {
      const imageWidth = slideshowDivRef.current?.clientWidth ?? 0;

      slideshowDivRef.current?.scrollTo({ left: mySlideshow.currentIndex * imageWidth, behavior: "instant" });
      trackDivRef.current?.scrollTo({ left: mySlideshow.currentIndex * (200 + 25), behavior: "instant" });
    }
  }, [isSlideshowOpen]);

  const prevPage = () => {
    const imageWidth = slideshowDivRef.current?.clientWidth ?? 0;
    const newIndex = mySlideshow.currentIndex - 1;

    if (newIndex < mySlideshow.minIndex) return;

    slideshowDivRef.current?.scrollTo({ left: newIndex * imageWidth, behavior: "smooth" });
    trackDivRef.current?.scrollTo({ left: newIndex * (200 + 25), behavior: "smooth" });
    setMySlideshow((prev) => ({ ...prev, currentIndex: newIndex }));
  };

  const nextPage = () => {
    const imageWidth = slideshowDivRef.current?.clientWidth ?? 0;
    const newIndex = mySlideshow.currentIndex + 1;

    if (newIndex > mySlideshow.maxIndex) return;

    slideshowDivRef.current?.scrollTo({ left: newIndex * imageWidth, behavior: "smooth" });
    trackDivRef.current?.scrollTo({ left: newIndex * (200 + 25), behavior: "smooth" });
    setMySlideshow((prev) => ({ ...prev, currentIndex: newIndex }));
  };

  const goToIndex = (index: number) => {
    const imageWidth = slideshowDivRef.current?.clientWidth ?? 0;
    const newIndex = index;

    slideshowDivRef.current?.scrollTo({ left: newIndex * imageWidth, behavior: "smooth" });
    trackDivRef.current?.scrollTo({ left: newIndex * (200 + 25), behavior: "smooth" });
    setMySlideshow((prev) => ({ ...prev, currentIndex: newIndex }));
  };

  if (!isSlideshowOpen) return <></>;

  return (
    <div
      className="h-full w-full flex flex-col justify-center items-center absolute top-0 left-0 bg-black/[0.8] z-[100] p-[1rem]"
      onClick={closeSlideshow}
    >
      <div className="h-[4rem] w-full flex justify-between px-[1rem]">
        <div className="">
          <span className="text-[3rem] text-white font-bold">
            {mySlideshow.currentIndex + 1} / {mySlideshow.maxIndex + 1}
          </span>
        </div>

        <div className="h-[4rem] w-[4rem] flex justify-center items-center bg-red-500 rounded-[0.8rem] " onClick={closeSlideshow}>
          <IoMdClose size={26} color="white" />
        </div>
      </div>
      <div className="min-h-0 w-full grow flex items-center my-4" onClick={(e) => e.stopPropagation()}>
        <div className="h-[90%] min-w-[6rem] w-[6rem] flex justify-center items-center cursor-pointer hover:bg-gray-500/[0.2]" onClick={prevPage}>
          <IoIosArrowBack color="white" size={50} />
        </div>
        <div className="h-full min-w-0 grow flex items-center overflow-x-auto mx-[2rem]" style={{ scrollbarWidth: "none" }} ref={slideshowDivRef}>
          {mySlideshow.images.map((image, index) => (
            <div key={`slideshow_image_${index}`} className={`h-[80%] min-w-[100%] w-[100%] relative rounded-[0.8rem]`}>
              <img className={`h-[100%] w-[100%] rounded-[0.8rem] object-contain object-center`} src={image} alt="" />
            </div>
          ))}
        </div>
        <div className="h-[90%] min-w-[6rem] w-[6rem] flex justify-center items-center cursor-pointer hover:bg-gray-500/[0.2]" onClick={nextPage}>
          <IoIosArrowForward color="white" size={50} />
        </div>
      </div>
      <div className="h-[14rem] w-[75%] bg-black/[0.4] rounded-[0.8rem] px-[4rem]" onClick={(e) => e.stopPropagation()}>
        <div className="h-full w-full flex items-center overflow-x-auto scrollbar py-[1.5rem]" ref={trackDivRef} onClick={(e) => e.stopPropagation()}>
          {mySlideshow.images.map((image, index) => (
            <div
              key={`footer_${index}`}
              className={"h-[80%] min-w-[20rem] w-[20rem] mr-[2.5rem] relative rounded-[0.8rem] cursor-pointer"}
              onClick={() => goToIndex(index)}
            >
              <img className={`h-[100%] w-[100%] rounded-[0.8rem] object-cover object-center`} src={image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

Slideshow.displayName = "Slideshow";
export default Slideshow;
