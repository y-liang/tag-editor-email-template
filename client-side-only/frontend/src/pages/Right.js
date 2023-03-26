

import { template } from '../preview/template';

const Right = () => {

   return (
      <div>
         <div dangerouslySetInnerHTML={{ __html: template }}></div>

      </div >
   );
};

export default Right;