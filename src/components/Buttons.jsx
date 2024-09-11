import React from "react";

const Buttons = ({ addFromBtn, removeAllProducts , toggleTheme }) => {
  return (
    <div className="flex flex-col gap-3 my-7">
      <div className="flex justify-evenly gap-2">
        <button className="btn btn-success" onClick={()=>addFromBtn("chipsy",100)}>chipsy</button>
        <button className="btn btn-success" onClick={()=>addFromBtn("pepsi",200)}>pepsi</button>
        <button className="btn btn-success" onClick={()=>addFromBtn("cigaretes",300)}>cigaretes</button>
        <button className="btn btn-success" onClick={()=>addFromBtn("kranshy",400)}>kranshy</button>
      </div>
      <div className="flex justify-evenly mt-3">
        <button className="btn btn-error" onClick={removeAllProducts}>Delete All</button>
        <button className="btn btn-primary" onClick={toggleTheme}>Light/Dark</button>
      </div>
    </div>
  );
};

export default Buttons;
