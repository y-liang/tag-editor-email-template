import { ArrowDownTrayIcon, ArrowPathIcon, ArrowSmallRightIcon, CheckIcon, PlusIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';

import renderPreview from '../modifiers/renderPreview';
import { PRESET_FIELDS } from '../utils/constant';
import Preview from './Preview';

const Main = ({ option }) => {


    // files to upload
    const [files, setFiles] = useState([]);
    const [fields, setFields] = useState([]);

    const [tagNames, setTagNames] = useState([]);


    // url to download the resulted file
    const [url, setUrl] = useState();

    useEffect(() => {
        if (option == 0) {
            setTagNames(PRESET_FIELDS);
        } else if (option == 1) {
            setTagNames(['class_name_a', 'class_name_b', 'class_name_c', '...']);
        }

        handleRefreshTemplate();
    }, [option]);


    // add if isPreset, file is from local path
    const handleFileChange = async (e) => {
        const file = e.target.files[0];

        if (file?.size > 1024 * 1000) {
            alert('File size cannot exceed more than 1MB');
        } else {
            setFiles({ ...files, [e.target.name]: file });
        }

    };

    const handleRefreshTemplate = async () => {
        let contentString = await renderPreview({ option, files, fields }); // one file only
        setTemplateContent(contentString);
    };

    const [templateContent, setTemplateContent] = useState();

    // input typing
    const handleFieldChange = async (e) => {
        setFields({ ...fields, [e.target.name]: e.target.value.trim() });

        let contentString = await renderPreview({ option, files, fields });
        setTemplateContent(contentString);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let contentString = await renderPreview({ option, files, fields }); // one file only

        let blob = new Blob([contentString], { type: 'text/html' });

        const url = window.URL.createObjectURL(blob);

        setUrl(url);
    };

    const handleDownload = () => {
        // clean up after download
        setTimeout(() => {
            window.URL.revokeObjectURL(url);
            setUrl(null);
        }, 9000);

    };

    return (
        <div className='main flex flex-wrap'>

            <div className='left'>
                <form onSubmit={handleSubmit} encType='multipart/form-data'>


                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <span className="sm:ml-3">
                                <button
                                    type="submit"
                                    className="my-2 inline-flex items-center rounded-md bg-sky-500 px-3 py-2 text-sm font-normal text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 ease-in-out duration-300"
                                >
                                    <CheckIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                                    Save to a file
                                </button>
                            </span>
                            <br />
                            {url &&
                                <span className="my-2 sm:ml-3">
                                    <a href={url} download
                                        onClick={handleDownload}
                                        className="flex text-sky-500 font-normal">
                                        <ArrowDownTrayIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                                        Download
                                    </a>
                                </span>
                            }

                        </div>
                        <span className="ml-3 hidden sm:block">
                            <button
                                type="button"
                                className="my-2 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-normal text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
                                onClick={handleRefreshTemplate}
                            >
                                <ArrowPathIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-slate-400" aria-hidden="true" />
                                Refresh preview
                            </button>
                        </span>
                    </div>

                    {option == 1 &&
                        <div className=''>
                            <div className='flex flex-col items-end'>
                                <div
                                    type="button"
                                    className="my-2 inline-flex items-center rounded-md bg-white border px-3 py-2 text-sm font-normal text-slate-400 shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                                >
                                    <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                                    <span className='font-normal text-slate-800'>
                                        Upload template: &nbsp;
                                    </span>
                                    <input type='file' name='template' onChange={handleFileChange} />
                                </div>
                                <button
                                    type="button"
                                    className="my-2 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-normal text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 cursor-pointer disabled:cursor-auto disabled:ring-slate-100 disabled:bg-slate-50"
                                    onClick={handleRefreshTemplate}
                                    disabled={!files || !files['template']}
                                >
                                    Okay
                                </button>
                            </div>






                            <div className='flex items-center justify-between flex-wrap mt-8 mb-4 text-left'>
                                <label htmlFor='classnames' className="w-1/2 px-4 text-base font-semibold leading-9 text-slate-600">
                                    <span className='inline-flex items-center '>
                                        <ArrowSmallRightIcon className="h-5 w-5" aria-hidden="true" />
                                        Tag Class Names
                                    </span>
                                    <p className="text-xs font-normal leading-4 text-slate-400">
                                        Enter the class names of tags that you want to modify, separated by comma.
                                    </p>
                                </label>
                                <textarea
                                    name='classnames'
                                    onChange={(e) => { setTagNames(e.target.value.split(', ')); }}
                                    className="placeholder:italic placeholder:text-slate-400 w-1/2 bg-sky-100 text-xs text-slate-800 w-56 h-32 rounded-lg px-3 py-3 resize-none focus-visible:outline-none focus-visible:bg-sky-100"
                                    placeholder='eg, class_name_a, class_name_b, class_name_c, ...'
                                />
                            </div>





                        </div>
                    }


                    {option == 2 &&
                        <div className='flex flex-col items-end'>
                            <div
                                type="button"
                                className="my-2 inline-flex items-center rounded-md bg-white border px-3 py-2 text-sm font-normal text-slate-400 shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                            >
                                <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                                <span className='font-normal text-slate-800'>
                                    Upload JSON: &nbsp;
                                </span>
                                <input type='file' name='json' onChange={handleFileChange} />
                            </div>

                            <div
                                type="button"
                                className="my-2 inline-flex items-center rounded-md bg-white border px-3 py-2 text-sm font-normal text-slate-400 shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                            >
                                <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                                <span className='font-normal text-slate-800'>
                                    Upload HTML: &nbsp;
                                </span>
                                <input type='file' name='html' onChange={handleFileChange} />
                            </div>

                            <button type='button'
                                onClick={handleRefreshTemplate}
                                disabled={!files || !files['json'] || !files['html']}
                                className="my-2 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-normal text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 cursor-pointer disabled:cursor-auto disabled:ring-slate-100 disabled:bg-slate-50"
                            >
                                Okay
                            </button>
                        </div>}


                    {option !== 2 &&
                        <ul className='grid grid-cols-4 gap-3 mt-6'>
                            {tagNames.map((tagName, index) => (tagName !== 'break' ?
                                <li key={index} className='flex flex-col'>
                                    <label htmlFor={tagName} className="text-xxs font-normal leading-6 text-slate-400">
                                        {tagName.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                    </label>
                                    <textarea
                                        name={tagName}
                                        onChange={handleFieldChange}
                                        className="bg-white w-28 h-16 text-xs rounded-lg px-2 py-1 resize-none focus-visible:outline-none focus-visible:bg-sky-100"
                                    />

                                </li>
                                : <h3 key={index}> ... </h3>))}
                        </ul>
                    }

                </form>
            </div>
            <div className='right'>
                <Preview content={templateContent} />
            </div>
        </div>

    );
};


export default Main;