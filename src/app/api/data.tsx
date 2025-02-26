import React from "react";
import Image from "next/image";
import { DataType } from "@/app/api/data";

const TeamMembers = () => {
  return (
    <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {DataType.map((member, i) => (
          <div key={i} className="bg-white shadow-xl rounded-3xl p-8 text-center">
            <Image
              src={member.imgSrc}
              alt={member.name}
              width={182}
              height={182}
              className="inline-block m-auto rounded-full"
            />
            <h4 className="text-2xl font-bold text-black mt-4">
              {member.name}
            </h4>
            <p className="text-base font-medium text-black/75">
              {member.profession}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;