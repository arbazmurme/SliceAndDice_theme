import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  InputAdornment,
  Switch,
} from "@mui/material";
import { FaNewspaper } from "react-icons/fa";
import {
  MdDriveFileRenameOutline,
  MdLowPriority,
  MdTitle,
} from "react-icons/md";
import { VscSymbolKeyword } from "react-icons/vsc";
import { BiMessageDetail } from "react-icons/bi";
import { TbTextRecognition } from "react-icons/tb";


const AddSuperCate = () => {
  const [selectedValue, setSelectedValue] = useState(20)
  return (
    <div className="p-6  text-black bg-[#f2f7fa]">
      <h2 className="text-2xl font-semibold pb-6 flex items-center gap-2">
        <FaNewspaper className="text-gray-800" /> Add Category
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TextField
          label="Name"
          variant="outlined"
          className="bg-white"
          required
          fullWidth
          InputProps={{
            startAdornment: (
              <div className="icon-input">
                <MdDriveFileRenameOutline className="text-blue-600" />
              </div>
            ),
          }}
        />

        <TextField
          select
          label="Priority"
          variant="outlined"
          required
          fullWidth
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <div className="icon-input">
                <MdLowPriority className="text-blue-600" />
              </div>
            ),
          }}
        >
          {[...Array(20).keys()].map((num) => (
            <MenuItem key={20 - num} value={20 - num}>
              {20 - num}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Meta Title"
          variant="outlined"
          required
          fullWidth
          InputProps={{
            startAdornment: (
              <div className="icon-input">
                <MdTitle className="text-blue-600" />
              </div>
            ),
          }}
        />

        <TextField
          label="Meta Keyword"
          variant="outlined"
          required
          fullWidth
          InputProps={{
            startAdornment: (
              <div className="icon-input">
                <VscSymbolKeyword className="text-blue-600" />
              </div>
            ),
          }}
        />

        <TextField
          label="Description"
          variant="outlined"
          required
          fullWidth
          InputProps={{
            startAdornment: (
              <div className="icon-input">
                <BiMessageDetail className="text-blue-600" />
              </div>
            ),
          }}
        />

        <TextField
          label="Meta Description"
          variant="outlined"
          required
          fullWidth
          InputProps={{
            startAdornment: (
              <div className="icon-input">
                <TbTextRecognition className="text-blue-600 icon-size" />
              </div>
            ),
          }}
        />
      </div>

      {/* Upload Image Section */}
      <div className="w-full md:max-w-[300px] mx-auto md:mx-0 mt-8 md:mt-12">
        <div className="border-2 border-dashed border-gray-400 rounded-xl p-6 md:p-8 bg-white shadow-sm">
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-4 text-gray-800">
            Upload Category Image
          </h3>

          <div className="relative cursor-pointer">
            <input
              type="file"
              multiple
              className="absolute inset-0 w-full h-full opacity-0 z-50 cursor-pointer"
              accept="image/png, image/jpeg, image/gif"
            />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <img
                className="h-16 w-16"
                src="https://www.svgrepo.com/show/357902/image-upload.svg"
                alt="Upload"
              />
              <div>
                <p className="text-sm font-medium text-gray-700">
                  <span>Drag and drop</span>
                  <span className="text-indigo-600 font-semibold">
                    {" "}
                    or browse
                  </span>
                  <span> to upload</span>
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Previews */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="relative group">
            <img
              src="https://www.svgrepo.com/show/357902/image-upload.svg"
              className="h-24 w-full object-cover rounded-md shadow-md"
              alt="Preview"
            />
            <button className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 text-xs opacity-80 hover:opacity-100">
              ✕
            </button>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="col-span-1 md:col-span-4 flex justify-end mt-6">
        <Button type="submit" variant="contained" color="primary">
          Add Category
        </Button>
      </div>
    </div>
  );
};

export default AddSuperCate;

