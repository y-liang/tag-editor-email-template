# Tag Editor for Email Templates

Customize email templates with a complete overview of tags that have placeholders for data inputs. It's designed to help streamline the process and minimize errors by populating the relevant information all in one centralized location, eliminating the need for manual selection and editing.

## Demo

- https://editagle.dev.yliang.net/

![tag editor](/assets/demo.gif)


## Features

### Configurations of server-side and client-side


|               | Client and Server | Client Side Only |
| ------------- |:-------------|:-------------|
| The Stack     | React.js for frontend and Express.js for backend   | React.js for frontend     |
| Upload File   | middleware _Multer_     |element _input_ type _file_     |
| Parse Document    | on the _server_ side with Node.js `fs` module   | on the _client_ side with Web API `FileReader` object   |
| Manipulate Content      | library _Cheerio_    | library _Cheerio_   |

<!--
> While this application has two configurations, both utilize the _Cheerio_ library for parsing and manipulating documents.

- Client and Server:
   - React.js for frontend and Express.js for backend.
   - Node.js `fs` module to handle file parsing on the _server_ side.
   - Middleware _Multer_ to handle file uploading.                                                                                              

- Client Side Only:
   - React.js for frontend.
   - Web API `FileReader` object to handle file parsing on the _client_ side.
   - Element _input_ type _file_ to handle file uploading. 
-->

### File Uploading

- Server-side handling `multipart/form-data` with _Multer_ middleware 

   ```
   router.use(bodyParser.json()); // for parsing application/json
   router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

   const upload = multer({ dest: 'uploads/' });

   router.post('/:type', upload.any(), (req, res) => {
      const { type } = req.params;
      const fields = req.body;
         switch (type) {
            case INVENTORY:
                  const templateFilePath = req.files[0].path;
                  const informationFilePath = req.files[1].path;
                  const filePaths = { templateFilePath, informationFilePath };
                  modInventory({ ...filePaths, ...fields });
                  res.sendFile(ABSOLUTE_UNLOAD_PATH + INVENTORY_FILE_PATH);
                  break;
            ...
            default:
               break;
      }
   });
   ```

- Client-side handling `multipart/form-data` with _file_ type _input_ element 

   ```
   <form onSubmit={handleSubmit} encType='multipart/form-data'>
      <input type='file' name='template' onChange={handleFileChange} />
      <input type='file' name='information' onChange={handleFileChange} />
      ...
      <textarea name={name} onChange={handleFieldChange}/>
   </form>
   ...
   const [files, setFiles] = useState([]);
   const handleFileChange = async (e) => {
      const file = e.target.files[0];
      if (file?.size > 1024 * 1000) {
         alert('File size cannot exceed more than 1MB');
      } else {
         setFiles({ ...files, [e.target.name]: file });
      }
   };

   const [fields, setFields] = useState([]);
   const handleFieldChange = async (e) => {
      setFields({ ...fields, [e.target.name]: e.target.value.trim() });
   }
   ```

### Document Parsing

- Server-side Node.js `fs` Module

   ```
   // on the server
   const templateHtml = fs.readFileSync(templateFilePath).toString(); // email html
   const informationJson = fs.readFileSync(informationFilePath); // json array
   ...
   fs.writeFileSync(ABSOLUTE_UNLOAD_PATH + INVENTORY_FILE_PATH, template.html());

   // on the client
   const res = await fetch(`${BASE_URL}/${type}`, {
         method: 'POST',
         body: formData
   });
   ...
   const data = await res.blob();
   const url = window.URL.createObjectURL(data);
   ```


- Client-side Web API `FileReader` Object

   ```
   const templateReader = new FileReader();
   const informationReader = new FileReader();

   // read as a string
   templateReader.readAsText(template);
   informationReader.readAsText(information);

   // resolve as a file
   const templatePromise = new Promise((resolve, reject) => {
      templateReader.addEventListener('load', () => {
         resolve(templateReader.result); 
      });
   });
   const informationPromise = new Promise((resolve, reject) => {
      informationReader.addEventListener('load', () => {
         resolve(informationReader.result);
      });
   });

   const [templateHtml, informationJson] = await Promise.all([templatePromise, informationPromise]);
   ...
   const blob = new Blob([template.html()], { type: 'text/html' });
   const url = window.URL.createObjectURL(blob);
   ```


## Summary

- The Why

   The idea for this tool stems from my own experience working as a web designer, where one of my responsibilities was to develop email templates from the ground up and update them with current content on a weekly basis. This entailed repeatedly replacing images, links, and text. For more complex designs, the process of editing and updating email templates can be time-consuming and labor-intensive. Even with an email builder, it can be cumbersome to navigate. I realized that if there was a way to access and view all of the elements’ attributes, such as image sources and hyperlinks, it can help reduce the time and effort required.


- The How

   In the beginning, I build a command-line program with just Cheerio.js and Node.js to parse and manipulate HTML files. To have an easy-to-use interface, I then built a backend using Express and a frontend with React. Since file processing can be handled directly by the browser, eliminating the need for a backend. Upon further consideration of file handling security, I shifted my focus to developing only a web-based solution for what would the application that allows users to edit images, links, text, and titles by associating editable fields with the class names of HTML tags.


   > To customize a template with different images, links, and texts, fill in the corresponding fields with the new values.
   ![tag editor option a](/assets/optiona.gif)

   > To edit an existing template, upload the template, specify the classes of the tags to be changed, and enter the relevant information.
   ![tag editor option b](/assets/optionb.gif)


- The What

   The demo application offers three options for template customization. The first option allows users to personalize a pre-existing template through the predefined input fields. The second option enables users to upload their own template and specify class names for editable regions. The third option facilitates the creation of a data table within a template, complete with rows and columns, by user-provided HTML and JSON files. The application features a centralized location for all input fields for viewing and editing fields without having to navigate between tags and lines of code. Additionally, there is a preview of the rendered template that updates in real-time as changes are made.