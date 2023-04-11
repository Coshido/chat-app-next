import Button from "@/components/ui/Button";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      Button
      <Button variant={"default"} isLoading={true} className="">
        children
      </Button>
    </div>
  );
};

export default page;
