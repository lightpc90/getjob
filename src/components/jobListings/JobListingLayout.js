import Image from "next/image";
import { GoShare } from "react-icons/go";
import { FaRegBookmark } from "react-icons/fa";

const JobListingLayout = ({ joblisting }) => {
  return (
    <div className="bg-white rounded-md flex justify-between p-2 shadow-md">
      <div className="flex gap-2">
        {/* logo */}
        <div className="p-3 bg-gray-200 rounded-md shadow-sm w-3/12 flex">
          <Image
            src={joblisting.logo}
            alt={`company logo`}
            width={800}
            height={800}
          />
        </div>
        {/* job title and description */}
        <div className="text-gray-600 text-sm">
          <p className="font-bold text-gray-800 text-md">{joblisting.title}</p>
          <p>{`${joblisting.company}-${joblisting.location}`}</p>
          <p>{`${joblisting.type}-${joblisting.salary}`}</p>
          <p>{joblisting.mode}</p>
        </div>
      </div>
      {/* CTA */}
      <div className="flex gap-1 text-lg">
        <div  className="bg-gray-200 flex flex-col">
          <GoShare />
        </div>

        <div className="bg-gray-200 flex flex-col">
          <FaRegBookmark />
        </div>
      </div>
    </div>
  );
};

export default JobListingLayout;
