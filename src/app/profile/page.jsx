"use client";
import React, { useState } from "react";
import { MdSearch, MdKeyboardArrowDown } from "react-icons/md";
import { HiHashtag } from "react-icons/hi";
import { BiRupee } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";

export default function page() {
  return (
    <div className="w-90 h-auto mb-11 border border-[#7A7A7A] max-[1100px]:w-full  rounded-lg mx-[4%]">
      <div className="flex justify-between mb-4 bg-blue-100 px-5 py-3">
        <div className="">
          <h5 className=" text-[12px] font-[500]">Customer Name</h5>
          <p className="text-[14px] text-[#4348BD] font-[500]">Amazon Solar</p>
        </div>
        <div className="">
          <h5 className="text-[12px] font-[500]">Status</h5>
          <div className="flex gap-2">
            <div>
              <FaCircle size={14} className="text-green-500 mt-1" />
            </div>
            <p className="text-[14px] text-[#4348BD] font-[500]">Active</p>
          </div>
        </div>
      </div>
      <div className="px-[2%]">
        <h1 className="text-[22px] font-[600] text-[#000] mb-4">
          Contact Details
        </h1>
        <div className="flex border-b border-b-gray-300 justify-between">
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Mobile Number
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                8888987657
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">Email</h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                amazon.solar@gmail.com
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Registered Office Address
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                D.No:24-10-12/A,Patella street,punjab junction,punjab-530044.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 grid-cols-3 border-b border-b-gray-300 gap-y-8 py-4">
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Business Role
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">Installer</p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Type Of Entity
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                Incorporated Entity
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Experience In Solar Installations
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">12 years</p>
            </div>
          </div>

          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">GST</h4>
              <p className="text-[12px] font-[600] text-[#48494D] flex">
                GSTIN123456789012345
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">TAN</h4>
              <p className="text-[12px] font-[600] text-[#48494D] flex">
                ABFPIN123456789012345
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">PAN</h4>
              <p className="text-[12px] font-[600] text-[#48494D] flex">
                CGPN22220
              </p>
            </div>
          </div>
        </div>

        {/*---- Installers ----*/}
        <div className="border-b border-b-gray-300">
          <h4 className="text-[22px] font-[600] text-[#000] py-4">
            Empanellment Details
          </h4>
          <div className="flex gap-3 justify-between">
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Empanelled With State Electricity Board
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">Yes</p>
              </div>
            </div>

            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Electricity Boards Empanelled
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  APEPDCL,APSPDCL
                </p>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Dealing Brands
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">Brand1</p>
              </div>
            </div>
          </div>
          <div className="flex  justify-between gap-4 mt-4">
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Combined Capacity of Total Installations Done Till Date
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">100KW</p>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Installation Capacity of the largest Project Worked on
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">50KW</p>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Geographical Regions
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  Andhra Pradesh
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*----Customers---*/}
        <div className="border-b border-b-gray-300">
          <div>
            <div className="flex gap-3  py-4 justify-between">
              <div className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Total No.of Employees
                  </h4>
                  <p className="text-[11px] text-[#7A7A7A]text-[12px] font-[600] text-[#48494D]">
                    10
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Total No.of Installation Crews
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">5</p>
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                  <HiHashtag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#666666] font-[400] text-[13px]">
                    Reference site details
                  </h4>
                  <p className="text-[12px] font-[600] text-[#48494D]">
                    Brand1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
