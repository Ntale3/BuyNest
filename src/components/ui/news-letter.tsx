import { Button } from "./button";
import { Input } from "./input";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 pt-8 pb-14">
      <h1 className="md:text-4xl text-2xl font-medium">
        Subscribe now & get 20% off
      </h1>
      <p className="md:text-base text-foreground pb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="flex items-center justify-between max-w-2xl w-full md:h-14 h-12">
        <Input
          className="border border-border rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 "
          type="text"
          placeholder="Enter your email id"
        />
        <Button className="md:px-12 px-8 h-full rounded-md rounded-l-none">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default NewsLetter;