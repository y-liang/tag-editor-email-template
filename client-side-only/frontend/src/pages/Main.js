import { useState } from 'react';

import renderPreview from '../modifiers/renderPreview';
import { PREVIEW_FIELDS, PREVIEW_FILES } from '../utils/constant';
import Preview from './Preview';

const Main = ({ type, isExample, hasJson }) => {
    let fileNames, fieldNames;

    fileNames = PREVIEW_FILES;
    fieldNames = PREVIEW_FIELDS;


    // files to upload
    const [files, setFiles] = useState();
    const [fields, setFields] = useState(PREVIEW_FIELDS);

    // url to download the resulted file
    const [url, setUrl] = useState();



    // add if isExample, file is from local path
    const handleFileChange = async (e) => {
        const file = e.target.files[0];

        if (file?.size > 1024 * 1000) {
            alert('File size cannot exceed more than 1MB');
        } else {
            setFiles({ ...files, [e.target.name]: file });
        }

    };



    const handleRefreshTemplate = async () => {
        let contentString = await renderPreview({ isExample, hasJson, files, fields }); // one file only
        setTemplateContent(contentString);
    };

    const [templateContent, setTemplateContent] = useState();

    // input typing
    const handleFieldChange = async (e) => {
        setFields({ ...fields, [e.target.name]: e.target.value.trim() });

        let contentString = await renderPreview({ isExample, hasJson, files, fields });
        setTemplateContent(contentString);
    };




    const handleSubmit = async (e) => {
        e.preventDefault();
        let contentString = await renderPreview({ isExample, hasJson, files, fields }); // one file only

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
                    <h1>{type} template</h1>
                    <button onClick={handleRefreshTemplate}>refresh template</button>

                    {!isExample && <ul>
                        {fileNames.map((file, index) => (
                            <li key={index}>
                                <label>
                                    Upload {file}:
                                    <input type='file' name={file} onChange={handleFileChange} />
                                    <button onClick={handleRefreshTemplate} disabled={!files || !files[file]}>add template</button>
                                </label>
                            </li>
                        ))}
                    </ul>}
                    {hasJson && <label>
                        Upload Json File:
                        <input type='file' name='json' onChange={handleFileChange} />
                        <button onClick={handleRefreshTemplate} disabled={!files || !files['json']}>add json</button>
                    </label>}


                    <h3>...</h3>
                    <ul>
                        {fieldNames.map((field, index) => (field !== 'break' ?
                            <li key={index} className='flex flex-col'>
                                <label htmlFor={field}>
                                    {field.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                </label>
                                <textarea name={field} onChange={handleFieldChange} />
                            </li>
                            : <h3 key={index}> ... </h3>))}
                    </ul>

                    <input type='submit' value='Submit' />

                    {url && <a href={url} download onClick={handleDownload}>
                        Download the file here
                    </a>}
                </form>
            </div>
            <div className='right'>

                <Preview content={templateContent} />
            </div>
        </div>


    );
};


export default Main;