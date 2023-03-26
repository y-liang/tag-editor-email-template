

import { templateContentString } from '../template/template';

const Preview = ({ content = templateContentString }) => {

   return (
      <div>
         <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div >
   );
};

export default Preview;