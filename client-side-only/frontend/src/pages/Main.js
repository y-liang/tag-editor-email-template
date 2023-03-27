import { useEffect, useState } from 'react';

import renderPreview from '../modifiers/renderPreview';
import { PRESET_FIELDS, PRESET_FILES } from '../utils/constant';
import Preview from './Preview';

const Main = ({ option }) => {


    // files to upload
    const [files, setFiles] = useState([]);
    const [fields, setFields] = useState([]);

    const [tagNames, setTagNames] = useState(PRESET_FIELDS);


    // url to download the resulted file
    const [url, setUrl] = useState();

    useEffect(() => {
        if (option == 0) {
            setTagNames(PRESET_FIELDS);
        } else if (option == 1) {
            setTagNames(tagNames);
        }
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
                    <button type='button' onClick={handleRefreshTemplate}>Refresh Preview</button>

                    <div>
                        <input type='submit' value='Generate HTML' />
                        <br />
                        {url &&
                            <button type='button'>
                                <a href={url} download onClick={handleDownload}>
                                    Download
                                </a>
                            </button>}

                    </div>

                    {option == 1 &&
                        <div>

                            <label>
                                Upload Template:
                                <input type='file' name='template' onChange={handleFileChange} />
                                <button type='button'
                                    onClick={handleRefreshTemplate}
                                    disabled={!files || !files['template']}>
                                    add template
                                </button>
                            </label>


                            <label htmlFor='classnames'>
                                Tag Class Names
                            </label>
                            <textarea name='classnames' onChange={(e) => { setTagNames(e.target.value.split(', ')); }} />
                        </div>
                    }


                    {option == 2 && <label>
                        Upload JSON and HTML Files: (tag with 'table_content')
                        <input type='file' name='json' onChange={handleFileChange} />
                        <input type='file' name='html' onChange={handleFileChange} />

                        <button type='button'
                            onClick={handleRefreshTemplate}
                            disabled={!files || !files['json'] || !files['html']}>
                            add files
                        </button>
                    </label>}

                    <h3>...</h3>
                    <ul className='grid'>
                        {tagNames.map((tagName, index) => (tagName !== 'break' ?
                            <li key={index} className='flex flex-col'>
                                <label htmlFor={tagName}>
                                    {tagName.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                </label>
                                <textarea name={tagName} onChange={handleFieldChange} />
                            </li>
                            : <h3 key={index}> ... </h3>))}
                    </ul>


                </form>
            </div>
            <div className='right'>
                <Preview content={templateContent} />
            </div>
        </div>

    );
};


export default Main;