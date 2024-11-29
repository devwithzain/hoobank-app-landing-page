import { quotes } from "@/public/assets";
import { FeedBackProps } from "@types";
import Image from "next/image";

const FeedbackCard: React.FC<FeedBackProps> = ({
  content,
  title,
  name,
  img,
}) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 feedback-card cursor-pointer">
    <Image
      src={quotes}
      alt="double_quotes"
      className="object-contain"
      width={42}
      height={27}
    />
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
      {content}
    </p>
    <div className="flex flex-row">
      <Image
        src={img}
        alt={name}
        className="rounded-full object-contain object-center"
        width={48}
        height={48}
      />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
