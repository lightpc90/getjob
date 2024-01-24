import React from "react";

const User = () => {
  return (
    <div className="flex flex-wrap justify-between mb-5 items-center gap-3">
      <div>
        <p>Hi Gideon,</p>
        <p>Ready to land your dream job?</p>
      </div>
      {/* display picture */}
      <div className="w-[50px] h-[50px] rounded-full bg-gray-400"></div>
    </div>
  );
};

export default User;
