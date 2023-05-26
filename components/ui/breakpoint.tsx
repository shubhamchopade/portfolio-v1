import React from "react";

const Breakpoint = () => {
  return (
    <div className="fixed bottom-4 left-4 bg-black shadow rounded-full">
      <span className="2xl:hidden block">2xl</span>
      <span className="xl:hidden block">xl</span>
      <span className="lg:hidden block">lg</span>
      <span className="sm:hidden block">sm</span>
    </div>
  );
};

export default Breakpoint;
