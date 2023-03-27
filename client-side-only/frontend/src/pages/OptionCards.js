import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

const options = [
   {
      id: 0,
      title: 'Customize the template',
      description: 'To customize your template with different images, links and texts, you have to fill in the corresponding fields with the new values.',
      status: 'Recommended'
   },
   {
      id: 1,
      title: 'Import a template from file',
      description: 'To edit your own template, you need to upload it, specify the classes of the tags you want to change, and enter the relevant information.',
      status: 'Experimental'
   },
   {
      id: 2,
      title: 'Create and add a table',
      description: 'To generate a table in your template, provide the array json and make sure there is a tag with the "table_content" class where the table will appear.',
      status: 'Only support five attributes, including one link, per data entry'
   },
];

function classNames(...classes) {
   return classes.filter(Boolean).join(' ');
}

export default function OptionCards({ selectedOption, setSelectedOption }) {
   // const [selectedOption, setSelectedOption] = useState(options[0]);

   return (
      <RadioGroup value={selectedOption} onChange={(val) => { setSelectedOption(val); }}>


         <div className="mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-x-4">
            <RadioGroup.Label className="text-base font-semibold leading-6 text-gray-900 my-auto">
               Select an editor tool
            </RadioGroup.Label>

            {options.map((option) => (
               <RadioGroup.Option
                  key={option.id}
                  value={option.id}
                  className={({ checked, active }) =>
                     classNames(
                        checked ? 'border-transparent' : 'border-gray-300',
                        active ? 'border-blue-600 ring-0 ring-blue-600' : '',
                        'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
                     )
                  }
               >
                  {({ checked, active }) => (
                     <>

                        <span className="flex flex-1">
                           <span className="flex flex-col items-start justify-around text-left">
                              <RadioGroup.Label as="span" className="block text-md font-medium text-blue-600">
                                 {option.title}
                              </RadioGroup.Label>
                              <RadioGroup.Description as="span" className="mt-1 flex items-center text-xs text-gray-500">
                                 {option.description}
                              </RadioGroup.Description>
                              <RadioGroup.Description as="span" className="mt-6 text-xs font-medium text-gray-900">
                                 {option.status}
                              </RadioGroup.Description>
                              <CheckCircleIcon
                                 className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-blue-600')}
                                 aria-hidden="true"
                              />
                           </span>
                        </span>
                        {/* <CheckCircleIcon
                           className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-blue-600')}
                           aria-hidden="true"
                        /> */}
                        <span
                           className={classNames(
                              active ? 'border' : 'border',
                              checked ? 'border-blue-600' : 'border-transparent',
                              'pointer-events-none absolute -inset-px rounded-lg'
                           )}
                           aria-hidden="true"
                        />
                     </>
                  )}
               </RadioGroup.Option>
            ))}
         </div>
      </RadioGroup>
   );
}
