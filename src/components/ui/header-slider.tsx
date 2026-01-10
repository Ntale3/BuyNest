import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { assets } from "@/assets/assets";

const Slider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Experience Pure Sound - Your Perfect Headphones Await!",
      offer: "Limited Time Offer 30% Off",
      buttonText1: "Buy Now",
      buttonText2: "Find More",
      imgSrc: assets.header_headphone_image,
    },
    {
      id: 2,
      title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
      offer: "Hurry up only few left!",
      buttonText1: "Shop Now",
      buttonText2: "Explore Deals",
      imgSrc: assets.header_playstation_image,
    },
    {
      id: 3,
      title: "Power Meets Elegance - Apple MacBook Pro is Here for You!",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Order Now",
      buttonText2: "Learn More",
      imgSrc: assets.header_macbook_image,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, sliderData.length]);

  const handleSlideChange = (index:number) => {
    setCurrentSlide(index);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  };

  return (
    <Card
      className="overflow-hidden relative w-full max-w-7xl mx-auto shadow-lg md:max-height-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <CardContent className="p-0 relative">
        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10  rounded-full w-8 h-8 sm:w-10 sm:h-10 shadow-md"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 rounded-full w-8 h-8 sm:w-10 sm:h-10 shadow-md"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>


        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {sliderData.map((slide, index) => (
            <div
              key={slide.id}
              className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6 md:px-10 lg:px-14 py-6 sm:py-8 md:py-10 lg:py-12 min-w-full"
            >
              {/* Text Content */}
              <div className="flex-1 w-full md:max-w-xl text-center md:text-left space-y-3 sm:space-y-4 md:space-y-6">
                <p className="text-xs sm:text-sm md:text-base text-primary font-medium">
                  {slide.offer}
                </p>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-semibold leading-tight md:leading-tight lg:leading-[1.2]">
                  {slide.title}
                </h1>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 pt-2">
                  <Button
                    size="lg"
                    className="rounded-full px-6 sm:px-8 md:px-10 w-full sm:w-auto text-sm sm:text-base"
                  >
                    {slide.buttonText1}
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="group font-medium w-full sm:w-auto text-sm sm:text-base"
                  >
                    {slide.buttonText2}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 flex items-center justify-center w-full">
                <img
                  className="w-40 sm:w-48 md:w-60 lg:w-72 xl:w-80 h-auto object-contain"
                  src={slide.imgSrc}
                  alt={`${slide.title} - Slide ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>


      <CardFooter className="flex items-center justify-center gap-2 pb-4 sm:pb-6">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full cursor-pointer transition-all duration-300 ${
              currentSlide === index
                ? "bg-orange-600 w-6 sm:w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </CardFooter>
    </Card>
  );
};

export default Slider;