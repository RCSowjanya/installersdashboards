import React from "react";

const Sales = () => {
  const data = [
    {
      id: 1,
      icon: "/Images/users-icon.png",
      number: 200,
      description: "Total RFPs",
      bgColor: "#DCFCE7",
      iconBgColor: "#3CD856",
    },
    {
      id: 2,
      icon: "/Images/installer-icon.png",
      number: 8,
      description: "Total Proposals Dispatched",
      bgColor: "#F3E8FF",
      iconBgColor: "#BF83FF",
    },
    {
      id: 3,
      icon: "/Images/quote-icon.png",
      number: 3,
      description: "Total Conversions",
      bgColor: "#FFE2F5",
      iconBgColor: "#FA5A7D",
    },
    {
      id: 4,
      icon: "/Images/proposals-icon.png",
      number: 500000,
      description: "Total Sales",
      bgColor: "#FFF4DE",
      iconBgColor: "#FF947A",
    },
  ];

  return (
    <div>
      {/*---dashboard sales----*/}
      {/* <div className="space-y-3 mt-11">
        <h2 className="text-[20px] font-[600] ad">Today's Sales</h2>
        <p className="text-[16px] font-[400]">Sales Summary</p>
      </div> */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4">
        {data.map((item) => (
          <div
            key={item.id}
            style={{ backgroundColor: item.bgColor }}
            className="text-white p-4 rounded-lg flex items-center"
          >
            <div
              style={{ backgroundColor: item.iconBgColor }}
              className="p-3 rounded-full text-white mr-4 text-2xl"
            >
              <img src={item.icon} alt="item-icons" />
            </div>
            <div>
              <div className="text-[20px] font-[600] ad text-[#151D48]">
                {item.number}
              </div>
              <div className="text-[14px] text-[#425166] font-[400]">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*---Today's Sales----*/}
    </div>
  );
};

export default Sales;
