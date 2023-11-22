"use client";
import { useSelector } from "react-redux";

const Wrapper = () => {
  const amount = useSelector((state) => state.account.amount);
  const bonus = useSelector((state) => state.bonus.points);

  return (
    <>
      <div className="p-3 ml-9 text-xl font-bold ">
        Current Amount: <span className="text-blue-900 pl-3">{amount}</span>
      </div>
      <div className="p-3 ml-9 text-xl font-bold ">
        Total Bonus: <span className="text-blue-900 pl-3">{bonus}</span>
      </div>
    </>
  );
};

export default Wrapper;
