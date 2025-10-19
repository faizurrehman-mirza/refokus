import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto flex gap-32 py-10 ">
        <div className="basis-1/2">
          <h1 className="text-[11rem] font-semibold tracking-tighter leading-none ">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4 text-sm ">
          <div className="basis-1/3">
            <h4 className="mb-10  text-zinc-600">Socials</h4>
            {["Instagram", "Twitter (x?)", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-2 text-zinc-600">{item} </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10  text-zinc-600">Sitemap</h4>
            {["Home", "Work", "Careers","Contact"].map((item, index) => (
              <a key={index} className="block mt-2 ">{item} </a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right">refokus is a poineering digital agency driven by design and empowered by technology.</p>
            <img className="mt-16 " src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
