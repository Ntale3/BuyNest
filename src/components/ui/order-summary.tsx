import { addressDummyData } from "@/assets/assets";
import { useAppStore } from "@/store/useAppStore";
import type { Address } from "@/types";
import { useState } from "react";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { Input } from "./input";

const OrderSummary = () => {

  const { currency, getCartCount, getCartAmount, } = useAppStore();
  const [selectedAddress, setSelectedAddress] = useState<Address|null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [userAddresses, setUserAddresses] = useState<Address[]>([]);

  const fetchUserAddresses = async () => {
    setUserAddresses(addressDummyData);
  }

  const handleAddressSelect = (address:Address) => {
    setSelectedAddress(address);
    setIsDropdownOpen(false);
    fetchUserAddresses();
  };

  const createOrder = async () => {

  }




  return (
    <Card className="w-full md:w-96  p-5">
      <h2 className="text-xl md:text-2xl font-medium text-foreground">
        Order Summary
      </h2>
      <hr className="border-border my-5" />
      <CardContent>
      <div className="space-y-6">
        <div>
          <label className="text-base font-medium uppercase text-card-foreground block mb-2">
            Select Address
          </label>
          <div className="relative inline-block w-full text-sm">
            <button
              className="peer w-full text-left px-4 pr-2 py-2 bg-white text-gray-700 focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>
                {selectedAddress
                  ? `${selectedAddress.fullName}, ${selectedAddress.area}, ${selectedAddress.city}, ${selectedAddress.state}`
                  : "Select Address"}
              </span>
              <svg className={`w-5 h-5 inline float-right transition-transform duration-200 ${isDropdownOpen ? "rotate-0" : "-rotate-90"}`}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6B7280"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <ul className="absolute w-full bg-background border shadow-md mt-1 z-10 py-1.5">
                {userAddresses.map((address, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-500/10 cursor-pointer"
                    onClick={() => handleAddressSelect(address)}
                  >
                    {address.fullName}, {address.area}, {address.city}, {address.state}
                  </li>
                ))}
                <li
                  //onClick={() => router.push("/add-address")}
                  className="px-4 py-2 hover:bg-gray-500/10 cursor-pointer text-center"
                >
                  + Add New Address
                </li>
              </ul>
            )}
          </div>
        </div>

        <div>
          <label className="text-base font-medium uppercase text-card-foreground block mb-2">
            Promo Code
          </label>
          <div className="flex flex-col items-start gap-3">
            <Input
              type="text"
              placeholder="Enter promo code"
              className="grow w-full outline-none p-2.5"
            />
            <Button className=" px-9 py-2 ">
              Apply
            </Button>
          </div>
        </div>

        <hr className="border-gray-500/30 my-5" />

        <div className="space-y-4">
          <div className="flex justify-between text-base font-medium">
            <p className="uppercase text-card-foreground">Items {getCartCount()}</p>
            <p className="text-card-foreground">{currency}{getCartAmount()}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-card-foreground">Shipping Fee</p>
            <p className="font-medium text-card-foreground">Free</p>
          </div>
          <div className="flex justify-between">
            <p className="text-card-foreground">Tax (2%)</p>
            <p className="font-medium text-card-foreground">{currency}{Math.floor(getCartAmount() * 0.02)}</p>
          </div>
          <div className="flex justify-between text-lg md:text-xl font-medium border-t pt-3">
            <p>Total</p>
            <p>{currency}{getCartAmount() + Math.floor(getCartAmount() * 0.02)}</p>
          </div>
        </div>
      </div>

      <Button onClick={createOrder} className="w-full py-3 mt-5 ">
        Place Order
      </Button>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;