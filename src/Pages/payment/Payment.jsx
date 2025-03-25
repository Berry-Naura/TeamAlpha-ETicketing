import React, { useState } from 'react';

const PaymentComponent = () => {
    const [email,setEmail] =useState('')
   function handleChange(e){
    const val = e.target.value
    setEmail(val)
   }
    const handlePayment = ()=>{
        
    }
  return (
    <div
      className="mx-80 my-4 relative flex w-1/2 min-h-screen flex-col bg-[#fcfaf8] justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div>
        <div className="flex items-center bg-[#fcfaf8] p-4 pb-2 justify-between">
          <div
            className="text-[#1b130d] flex size-12 shrink-0 items-center"
            data-icon="CaretRight"
            data-size="24px"
            data-weight="regular"
          >
          </div>
          <h2 className="text-[#1b130d] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
            Payment
          </h2>
        </div>
    <div className=''>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#1b130d] text-base font-medium leading-normal pb-2">Email</p>
            <div className="flex w-full flex-1 items-stretch rounded-xl">
              <input
              type='email'
                onChange={handleChange}
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b130d] focus:outline-0 focus:ring-0 border-none bg-[#f3ece7] focus:border-none h-14 placeholder:text-[#9a6c4c] p-4 rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                value={email}
                placeholder="Enter your email"
              />
              <div
                className="text-[#9a6c4c] flex border-none bg-[#f3ece7] items-center justify-center pr-4 rounded-r-xl border-l-0"
                data-icon="Check"
                data-size="24px"
                data-weight="regular"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </div>
          </label>
        </div>
        <h3 className="text-[#1b130d] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Order Summary
        </h3>
        <div className="flex gap-4 bg-[#fcfaf8] px-4 py-3">
          <div
            className="bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg w-[70px]"
            style={{
              backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/3f7b8c03-7b76-47ba-8567-38641ef9b3ef.png")',
            }}
          ></div>
          <div className="flex flex-1 flex-col justify-center">
            <p className="text-[#1b130d] text-base font-medium leading-normal">1 ticket</p>
            <p className="text-[#9a6c4c] text-sm font-normal leading-normal">$250</p>
            <p className="text-[#9a6c4c] text-sm font-normal leading-normal">General Admission</p>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between gap-x-6 py-2">
            <p className="text-[#9a6c4c] text-sm font-normal leading-normal">Subtotal</p>
            <p className="text-[#1b130d] text-sm font-normal leading-normal text-right">$250</p>
          </div>
          <div className="flex justify-between gap-x-6 py-2">
            <p className="text-[#9a6c4c] text-sm font-normal leading-normal">Total</p>
            <p className="text-[#1b130d] text-sm font-normal leading-normal text-right">$250</p>
          </div>
        </div>
      </div>
      <div>
    </div>
        <div className="flex pl-20 py-3">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#ec6d13] text-[#fcfaf8] text-base font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Pay $250.00</span>
          </button>
        </div>
        <div className="h-5 bg-[#fcfaf8]"></div>
      </div>
    </div>
  );
};

export default PaymentComponent;