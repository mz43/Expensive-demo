import React from "react";

const ExpenseForm = () => {

  
  return (
    <form className="text-white bg-slate-700 mx-[200px] mt-10 mb-4 p-10 rounded-xl" >
      <div className="flex justify-between">
        <div >
          <label className="text-[20px]" htmlFor="">Title </label>
          <input type="text" className="outline-none bg-transparent border border-white rounded-md p-[3px] w-[180px]" />
        </div>
        <div>
          <label placeholder="Title" className="text-[20px]" htmlFor="">Amount </label>
          <input type="number" min="0.01" step="0.01" className="outline-none bg-transparent border border-white rounded-md p-[3px] w-[180px]" />
        </div>
        <div>
          <label className="text-[20px]" htmlFor="">Date </label>
          <input type="date" min="2019-01-01" max="2023-12-31" defaultValue={"2022-01-01"} className="outline-none bg-transparent border border-white rounded-md p-[3px] w-[180px]"/>
        </div>
      </div>
      <div className="flex justify-end mt-10">
        <button type="submit" className="bg-blue-500 px-3 py-1 rounded-md hover:bg-orange-500">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
