import React from "react";
import user from "../user1.jpg";
export default function TopProfileSection() {
  return (
    <section>
      <div className="flex justify-start items-center gap-x-3.5">
        <img
          src={user}
          className="w-16 h-16 rounded-full object-cover"
          alt=""
        />
        <p className="flex flex-col text-xs space-y-0.5">
          <span>Rachel Green</span>
          <span>rachel.green@friends.com</span>
          <span>Joined on September 2024</span>
        </p>
      </div>
      <div></div>
    </section>
  );
}
