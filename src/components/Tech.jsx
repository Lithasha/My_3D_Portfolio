import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };
const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div
          className='w-28 flex flex-col items-center'
          key={technology.name}
        >
          <div className='w-28 h-28'>
            <BallCanvas icon={technology.icon} />
          </div>

          <p className='mt-2 text-white text-[14px] text-center font-medium'>
            {technology.name}
          </p>
        </div>
      ))}
    </div>
  );
};
export default SectionWrapper(Tech, "");
