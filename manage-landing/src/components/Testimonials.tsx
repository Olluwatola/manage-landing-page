import React, { useState, useRef, useEffect, TouchEvent } from "react";

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ali Bravo",
    avatar: "/avatar-ali.png",
    quote:
      "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
  },
  {
    id: 2,
    name: "Anisha Li",
    avatar: "/avatar-anisha.png",
    quote:
      "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
  },
  {
    id: 3,
    name: "Richard Watts",
    avatar: "/avatar-richard.png",
    quote:
      "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending it to everyone I talk to!",
  },
  {
    id: 4,
    name: "Ali Bravo",
    avatar: "/avatar-ali.png",
    quote:
      "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
  },
  {
    id: 5,
    name: "Anisha Li",
    avatar: "/avatar-anisha.png",
    quote:
      "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
  },
  {
    id: 6,
    name: "Richard Watts",
    avatar: "/avatar-richard.png",
    quote:
      "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending it to everyone I talk to!",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const testimonialCount = testimonials.length;

  // Reset currentIndex to 0 on medium screens (md) and above
  useEffect(() => {
    const handleResize = () => {
      // Reset the index to 0 on any screen width change
      setCurrentIndex(0);
    };
  
    // Run the function once on component mount
    handleResize();
  
    // Attach the event listener for screen width changes
    window.addEventListener("resize", handleResize);
  
    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialCount);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialCount - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null) return;

    const touchEndX = e.touches[0].clientX;
    const distance = touchEndX - touchStartXRef.current;

    if (distance > 50) {
      handlePrevious();
      touchStartXRef.current = null;
      e.preventDefault();
    } else if (distance < -50) {
      handleNext();
      touchStartXRef.current = null;
      e.preventDefault();
    }
  };

  return (
    <div className="text-center px-4 mx-4 md:my-0 space-y-8">
      <p className="font-bold text-3xl my-16">What they've said</p>

      <div className="relative overflow-hidden md:overflow-x-auto">
        <div
          ref={carouselRef}
          className="flex md:flex-nowrap md:space-x-4 transition-transform duration-500 touch-pan-x"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-w-full md:min-w-[320px] flex flex-col items-centerpy-8"
            >
              <div className="flex items-center justify-center w-full bg-[image:linear-gradient(transparent_0%,transparent_50%,#f1f5f9_50%,#f1f5f9_100%)]">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} avatar`}
                  className="h-20 rounded-full"
                />
              </div>
              <div className="bg-slate-100 py-8 space-y-4">
                <div className="font-bold text-xl">{testimonial.name}</div>
                <p className="text-slate-500 text-sm px-6 leading-7">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center md:hidden space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-primary-brightRed" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
