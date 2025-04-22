import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  InputAdornment,
  Switch,
  FormControlLabel,
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
import { FiUpload } from "react-icons/fi";

const AddSuperCate = () => {
  const [selectedValue, setSelectedValue] = useState(20);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showTable, setShowTable] = useState(false);

  return (
    <>
      <div className="p-3 text-black">
        <h2 className="text-2xl font-semibold py-2 mb-4 rounded-md flex items-center gap-2 bg-blue-100">
          <FaNewspaper className="text-gray-800 ml-4" /> Add Category
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 mt-4">
            <span className="text-xl font-bold text-gray-800 mb-2 block">
              Category Image
            </span>
            <div className="border border-gray-300 rounded-md p-4 bg-white">
              <label
                htmlFor="upload"
                className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100 transition duration-150"
              >
                <FiUpload className="h-6 w-6 text-gray-600" />
                <span className="text-gray-600 font-medium">
                  {selectedImage ? "Change Image" : "Upload Image"}
                </span>
              </label>
              <input
                id="upload"
                type="file"
                className="hidden"
                onChange={(e) => setSelectedImage(e.target.files[0])}
              />
              {selectedImage && (
                <div className="mt-2">
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected"
                    className="h-32 w-full object-cover rounded-md"
                  />
                </div>
              )}
               <span className="text-red-600 text-sm">
                Height: 300px, Width: 300px
              </span>
            </div>
          </div>
          <div className="col-span-1 mt-4">
            <FormControlLabel
              control={
                <Switch
                  checked={showTable}
                  onChange={() => setShowTable((prev) => !prev)}
                  color="primary"
                />
              }
              label={showTable ? "Hide Table" : "Show Table"}
            />
          </div>
          <div className="col-span-1"></div>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-4 flex justify-end mt-6">
          <Button type="submit" variant="contained" color="primary">
            Add Category
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddSuperCate;
