import React from "react";

const ExpenseItem = ({title,price,date}) => {
  return (
    <div>
      <div className="flex bg-[#626060] px-[15px] py-[15px] text-white items-center justify-between rounded-lg mb-2">
        <div className="flex items-center">
          <div className="bg-[#373737] px-[15px] border border-white rounded-lg mr-2">
            <h1>may</h1>
            <p>2020</p>
            <p>15</p>
          </div>

          <h1>{title}</h1>
        </div>

        <div className="flex">
          <h2 className="bg-purple-600 px-5 py-1 border-white border rounded-md">{price}</h2>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
