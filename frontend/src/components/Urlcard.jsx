import React from "react";

const Urlcard = (props) => {
  console.log(props);
  
  const { longUrl, createdAt } = props;
  return (
    <div className="mt-20 w-[50%] flex flex-col gap-4  border border-amber-500 rounded-2xl p-6  backdrop-blur-lg bg-black/30 text-light">
      <div className="">
        <div>{longUrl}</div>
        <div className="text-2xl font-bold">https:de.com/problems/re/</div>
      </div>
      <div className="flex gap-3.5">
        <div>{createdAt} </div>
        <div>
          <ion-icon name="copy-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="trash-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default Urlcard;
