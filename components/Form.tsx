import Button from "./Button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

const Form = () => {
  return (
    <form className="flex flex-col">
      <div className="flex flex-col gap-[20px] mb-[20px]">
        <Input type="fullname" placeholder="Full name" />

        <Input type="email" placeholder="Email address" />

        <div className="flex flex-col xl:flex-row gap-[20px]">
          <Input type="phone" placeholder="Phone number" />

          <Select>
            <SelectTrigger className="w-full rounded-none h-[54px] outline-none">
              <SelectValue placeholder="Select a service"></SelectValue>
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectLabel>select a servce</SelectLabel>
                <SelectItem value="lorem1">lorem1</SelectItem>
                <SelectItem value="lorem2">lorem2</SelectItem>
                <SelectItem value="lorem3">lorem3</SelectItem>
                <SelectItem value="lorem4">lorem4</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-6">
          <Textarea
            className="h-[180px] resize-none rounded-none"
            placeholder="Enter your message"
          />

          <Button text="Send message" />
        </div>
      </div>
    </form>
  );
};

export default Form;
