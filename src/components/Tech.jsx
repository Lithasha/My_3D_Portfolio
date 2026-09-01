// import React from "react";

// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// // const Tech = () => {
// //   return (
// //     <div className='flex flex-row flex-wrap justify-center gap-10'>
// //       {technologies.map((technology) => (
// //         <div className='w-28 h-28' key={technology.name}>
// //           <BallCanvas icon={technology.icon} />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };
// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div
//           className='w-28 flex flex-col items-center'
//           key={technology.name}
//         >
//           <div className='w-28 h-28'>
//             <BallCanvas icon={technology.icon} />
//           </div>

//           <p className='mt-2 text-white text-[14px] text-center font-medium'>
//             {technology.name}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default SectionWrapper(Tech, "");
import React, { useEffect, useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const CELL_HEIGHT = 165;

const getColumnCount = (width) => {
  if (width < 420) return 2;

  if (width < 640) return 3;

  if (width < 900) return 4;

  if (width < 1200) return 6;

  return 7;
};

const Tech = () => {
  const [columns, setColumns] = useState(() =>
    typeof window === "undefined"
      ? 4
      : getColumnCount(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setColumns(
        getColumnCount(window.innerWidth)
      );
    };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  const rows = Math.ceil(
    technologies.length / columns
  );

  const canvasHeight =
    rows * CELL_HEIGHT;

  return (
    <div
      className="
        relative
        w-full
        max-w-[1100px]
        mx-auto
      "
      style={{
        height: `${canvasHeight}px`,
      }}
    >
      {/* ONE WebGL canvas for every technology */}
      <div className="absolute inset-0">
        <BallCanvas
          technologies={technologies}
          columns={columns}
        />
      </div>

      {/* Normal HTML labels */}
      <div
        className="
          absolute
          inset-0
          grid
          pointer-events-none
        "
        style={{
          gridTemplateColumns:
            `repeat(${columns}, minmax(0, 1fr))`,
        }}
      >
        {technologies.map(
          (technology) => (
            <div
              key={technology.name}
              className="
                flex
                items-end
                justify-center
                pb-2
              "
              style={{
                height: `${CELL_HEIGHT}px`,
              }}
            >
              <p
                className="
                  text-white
                  text-[14px]
                  text-center
                  font-medium
                "
              >
                {technology.name}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");