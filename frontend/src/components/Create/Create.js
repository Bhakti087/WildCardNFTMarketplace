import React from "react";
import Style from "./Create.module.css";
import { useState } from 'react';

// Import React FilePond
import { FilePond, registerPlugin} from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function Create() {

  const [files, setFiles] = useState([]);

  return (
    <div className="text-center">
      <h1 className={Style.heading}>
        <b>Create new NFT</b>
      </h1>

      <div className="flex justify-center">
        <form class=" w-full max-w-sm">
          <input
            type="file"
            class="filepond"
            name="filepond"
            accept="image/png, image/jpeg, image/gif"
          />
          <FilePond
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={true}
                maxFiles={3}
                server="/api"
                name="files"
                labelIdle='Drag and Drop your files or <span class="filepond--label-action">Browse</span>'
            />

          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="name"
              >
                NFT Name
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                id="name"
                type="text"
                placeholder="Enter Name"

                
              />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="price"
              >
                NFT Price
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                id="pice"
                type="text"
                placeholder="Enter Price"
                
              />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="description"
              >
              Description
              </label>
            </div>
            <div class="md:w-2/3">
              <textarea
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                id="description"
                type="text"
                
                placeholder="Write Description"
              />
            </div>
          </div>

          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button
                class="shadow bg-green-600 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                CREATE NFT
              </button>
              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

