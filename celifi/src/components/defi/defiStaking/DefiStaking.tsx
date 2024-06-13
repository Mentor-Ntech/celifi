import React from "react";
import DefiStakingTable from "./DefiStakingTable";

const DefiStaking = () => {
  return (
    <div>
      {" "}
      <div className="text-[#9AA0A6] font-medium flex justify-between px-5 my-6">
        <p>Minipay</p>
        <p className="text-[#799F46]">$2597</p>
      </div>
      <div className="border-[0.5px] border-gray-50/20 text-[#9AA0A6] rounded-md">
        <div className="rounded-[1px] mt-8 ">
          <div className="inline-flex  bg-[#799F46] py-2 px-7">
            <p className="text-[#F8F9FA]">Staked</p>
          </div>
          <DefiStakingTable />
        </div>
      </div>
    </div>
  );
};

export default DefiStaking;
