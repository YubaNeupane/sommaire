import React from "react";

const BgGradient = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={`relative isolate ${className}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-30"
      >
        <div
          style={{
            clipPath:
              "polygon(50% 0%, 80% 20%, 100% 50%, 80% 80%, 50% 100%, 20% 80%, 0% 50%, 20% 20%)",
          }}
          className="absolute left-1/2 top-1/2 aspect-[1155/678] w-[36rem] -translate-x-1/2 -translate-y-1/2 rotate-[25deg] bg-gradient-to-br from-emerald-500 via-teal-400 to-cyan-100 opacity-20 sm:w-[72rem]"
        />
      </div>
      {children}
    </div>
  );
};

export default BgGradient;
