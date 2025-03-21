import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-sky-200">
      <div className="lg:flex p-10">
        <div className="flex flex-col w-full items-center gap-3">
          <p className="text-2xl font-bold text-center">NAHEAD</p>
          <div className="logo">
            <img src="/logo.jpg" alt="logo" className="size-48" />
          </div>
          <p className="text-center font-semibold">
            Skills training is designed to provide employees with the targeted
            training they need to gain the knowledge and abilities necessary to
            fulfill the specific requirements of their job positions. Skills
            training can also be used to re-educate and retrain employees
            whenever new technology, processes or systems debut.
          </p>
        </div>
        <div className="flex flex-col w-full items-center gap-10">
          <p className="text-2xl font-bold text-center">QR code</p>
          <div className="logo size-60 bg-black"></div>
        </div>
        <div className="flex flex-col w-full items-center gap-10">
          <p className="text-2xl font-bold text-center">MSME</p>
          <div className="logo border rounded-lg overflow-hidden shadow-2xl">
            <img src="/msme.png" alt="msme" className="size-60" />
          </div>
        </div>
        <div className="flex flex-col w-full items-center justify-center">
          <p className="text-2xl font-bold text-center mb-8">Contact</p>
          <div className="flex flex-col items-center">
            <p className=" font-bold">Nehru Skill Development Mission</p>
            <p className="text-center">
              4/1958, Samiyapuram Koot Road, Pattukonampatti post
              Pappireddipatti Tk Dharmapuri Dt Pin code: 636905 Tamilnadu,India
            </p>
            <p className="mt-5">Land Line Number: 04643-296120</p>
            <p className="mt-5 font-bold">Mobile number:</p>
            <p className="animate-pulse font-semibold w-[200px]">
              8110897011, 9786390331, 9585343052, 9344461942
            </p>
            <p className="mt-5 font-bold">Whats App:</p>
            <p className="animate-pulse font-semibold w-[200px]">
              8110897011, 9786390331, 9585343052, 9344461942
            </p>
            <p className="font-bold mt-5">e- mail: nsdmeduc@gmail.com</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="copy-right text-xs text-center bg-neutral-900 text-neutral-300 py-3">
        Copyright © 2025 NSDM. All rights reserved. Theme Spacious by
        ThemeGrill. Powered by: WordPress.
      </div>
    </footer>
  );
}

export default Footer