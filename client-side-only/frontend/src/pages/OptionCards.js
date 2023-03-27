import { RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { classNames, OPTIONS } from '../utils/constant';





export default function OptionCards({ selectedOption, setSelectedOption }) {

   return (
      <RadioGroup value={selectedOption} onChange={(val) => { setSelectedOption(val); }}>


         <div className="mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-x-4">
            <RadioGroup.Label className="text-base font-semibold leading-6 text-slate-900 my-auto">
               Select an editor tool
            </RadioGroup.Label>

            {OPTIONS.map((option) => (
               <RadioGroup.Option
                  key={option.id}
                  value={option.id}
                  className={({ checked, active }) =>
                     classNames(
                        checked ? 'border-transparent' : 'border-slate-300',
                        active ? 'border-sky-600 ring-0 ring-sky-600' : '',
                        'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
                     )
                  }
               >
                  {({ checked, active }) => (
                     <>

                        <span className="flex flex-1">
                           <span className="flex flex-col items-start justify-around text-left">
                              <RadioGroup.Label as="span" className="block text-md font-medium text-sky-600">
                                 {option.title}
                              </RadioGroup.Label>
                              <RadioGroup.Description as="span" className="mt-1 flex items-center text-xs text-slate-500">
                                 {option.description}
                              </RadioGroup.Description>
                              <RadioGroup.Description as="span" className="mt-6 text-xs font-medium text-slate-900">
                                 {option.status}
                              </RadioGroup.Description>
                              <CheckCircleIcon
                                 className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-sky-600')}
                                 aria-hidden="true"
                              />
                           </span>
                        </span>
                        {/* <CheckCircleIcon
                           className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-sky-600')}
                           aria-hidden="true"
                        /> */}
                        <span
                           className={classNames(
                              active ? 'border' : 'border',
                              checked ? 'border-sky-600' : 'border-transparent',
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
