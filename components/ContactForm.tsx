"use client";

import React, { useState } from "react";
import "./RangeSlider.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { Toaster } from "react-hot-toast";
import Notify from "@/utils/Notify";
import axios from "axios";

const Separator = styled("div")(
  ({ theme }) => `
  height: ${theme.spacing(3)};
`
);

const marks = [
  {
    value: 0,
    label: "$1000",
  },
  {
    value: 50,
    label: "$5000",
  },
  {
    value: 100,
    label: "$10000",
  },
];

const BASEURL: string | undefined = process.env.NEXT_PUBLIC_BACKEND_BASEURL;

const ContactForm = () => {
  const [valueRange, setValueRange] = useState<number[]>([20, 80]); // Two pointers (min and max values)
  const [disabled, setDisabled] = useState(false);

  const clearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      message: "",
      reasons: [],
    });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      if (!formData.reasons || formData.reasons.length === 0) {
        Notify("Please provide a reason!", "error");
        return;
      } else if (
        formData.email === "" ||
        formData.fullName === "" ||
        formData.message === ""
      ) {
        Notify("Please provide all the details!", "error");
        return;
      }
      const reasons: Array<string> = ["Interested in -", ...formData.reasons];

      const reasonsStringified = reasons.join(" ");

      setDisabled(true);
      const res = await axios.post(`${BASEURL}/neurify/miscellaneous/mail`, {
        fullName: formData.fullName,
        company: reasonsStringified,
        to: formData.email,
        query: formData.message,
      });

      if (res.status === 201) {
        Notify("Email sent successfully!", "success");
        clearForm();
        setDisabled(false);
      }
    } catch (error) {
      console.error(error);
      setDisabled(false);
      Notify("Something went wrong!", "error");
    }
  };

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setValueRange(newValue); // Update both pointers
    }
  };

  interface FormData {
    fullName: string;
    email: string;
    message: string;
    reasons: string[]; // Explicitly defined as a string array
  }

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    reasons: [],
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setFormData((prevData) => {
      const updatedReasons: string[] = checked
        ? [...prevData.reasons, value] // Add the checked reason
        : prevData.reasons.filter((reason) => reason !== value); // Remove unchecked reason

      return {
        ...prevData,
        reasons: updatedReasons,
      };
    });
  };

  return (
    <>
      <div className="w-full mt-[-100px]   bg-center  min-h-screen relative hidden md:flex items-center justify-center text-center">
        <div className="w-[90%] h-full flex flex-col items-center p-[90.8679px] gap-[45.43px] border-[1.13585px] border-[#262626] rounded-[16px] box-border">
          <div className="flex flex-row items-start p-0 gap-[45.43px] w-[95%] h-[152.05px]">
            {/* Input Field 1 */}
            <div className="flex flex-col justify-center items-start p-[27.2604px_45.434px] gap-[22.72px] w-[45%] h-[200px] bg-[rgba(20,36,76,0.1)] border-[1.13585px] border-[#262626] rounded-[9.08679px] flex-grow">
              <p className="w-[445.55px] h-[37px] font-medium text-lg leading-[150%] text-white text-left">
                Full Name
              </p>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-transparent text-white outline-none border-none"
                placeholder="Type here"
              />
              <div className="w-[85%] border-[1.13585px] border-[#047CFC] -mt-4"></div>
            </div>

            {/* Input Field 2 */}
            <div className="flex flex-col justify-center items-start p-[27.2604px_45.434px] gap-[22.72px] w-[45%] h-[200px] bg-[rgba(20,36,76,0.1)] border-[1.13585px] border-[#262626] rounded-[9.08679px] flex-grow">
              <p className="w-[445.55px] h-[37px] font-medium text-lg leading-[150%] text-white text-left">
                Email
              </p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent text-white outline-none border-none"
                placeholder="Type here"
              />
              <div className="w-[85%] border-[1.13585px] border-[#047CFC] -mt-4"></div>
            </div>
          </div>

          {/* Checkbox Section */}
          <div className="w-[95%] h-[200px] bg-[rgba(20,36,76,0.1)] border-[1.13585px] border-[#262626] rounded-[9.08679px] flex-grow mt-8">
            <h2 className="text-white text-lg mb-4 text-left w-full p-[27.2604px_45.434px]">
              Why you are contacting us?
            </h2>
            <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-white w-full text-left p-[0px_45.434px]">
              {["Web Design", "Mobile Web Design", "AI Tech", "Others"].map(
                (reason) => (
                  <label key={reason} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={reason}
                      checked={formData.reasons.includes(reason)}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 border border-white"
                    />
                    {reason}
                  </label>
                )
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center items-start p-[27.2604px_45.434px] gap-[22.72px] w-[95%] h-[200px] bg-[rgba(20,36,76,0.1)] border-[1.13585px] border-[#262626] rounded-[9.08679px] flex-grow">
            <p className="w-[95%] h-[37px] font-medium text-lg leading-[150%] text-white text-left">
              Your Message
            </p>
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent text-white outline-none border-none"
              placeholder="Type here"
            />
          </div>
          <button
            disabled={disabled}
            onClick={handleSubmit}
            className="flex items-center justify-center px-10 py-5 w-[164px] h-[72px] bg-[#047CFC] rounded-lg text-white text-lg font-medium font-barlow leading-[150%] hover:bg-[#0E1330] hover:text-white"
          >
            Submit
          </button>
        </div>
      </div>

      {/* // mobole */}
      <div className="w-full px-4 py-8 md:hidden   bg-center  min-h-screen flex items-center justify-center text-center">
        <div className="w-full max-w-3xl p-8 gap-8 border border-[#262626] rounded-lg bg-opacity-80 flex flex-col">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col flex-grow p-4 bg-[rgba(20,36,76,0.1)] border border-[#262626] rounded-lg">
              <p className="text-lg text-white">Full Name</p>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-transparent text-white outline-none border-b border-[#047CFC]"
                placeholder="Type here"
              />
            </div>
            <div className="flex flex-col flex-grow p-4 bg-[rgba(20,36,76,0.1)] border border-[#262626] rounded-lg">
              <p className="text-lg text-white">Email</p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent text-white outline-none border-b border-[#047CFC]"
                placeholder="Type here"
              />
            </div>
          </div>

          <div className="p-4 bg-[rgba(20,36,76,0.1)] border border-[#262626] rounded-lg">
            <h2 className="text-white text-lg">Why are you contacting us?</h2>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {["Web Design", "Mobile Design", "AI Tech", "Others"].map(
                (reason) => (
                  <label
                    key={reason}
                    className="flex items-center gap-2 text-white"
                  >
                    <input
                      type="checkbox"
                      value={reason}
                      checked={formData.reasons.includes(reason)}
                      onChange={handleCheckboxChange}
                    />
                    {reason}
                  </label>
                )
              )}
            </div>
          </div>

          <div className="p-4 bg-[rgba(20,36,76,0.1)] border border-[#262626] rounded-lg">
            <Box sx={{ width: "100%" }}>
              <Typography
                id="track-false-range-slider"
                className="text-white text-left text-lg"
                gutterBottom
              >
                Budget Range
              </Typography>
              <Separator />

              {/* Value Below Each Pointer */}
              <Slider
                track={false}
                aria-labelledby="track-false-range-slider"
                value={valueRange}
                onChange={handleSliderChange}
                marks={[
                  ...marks,
                  {
                    value: valueRange[0],
                    label: (
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: "bold",
                          marginTop: "10px",
                        }}
                      >
                        ${valueRange[0] * 100}
                      </Typography>
                    ),
                  },
                  {
                    value: valueRange[1],
                    label: (
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: "bold",
                          marginTop: "10px",
                        }}
                      >
                        ${valueRange[1] * 100}
                      </Typography>
                    ),
                  },
                ]}
                min={0}
                max={100}
                step={1}
                sx={{
                  color: "white",
                  "& .MuiSlider-thumb": {
                    width: "20px",
                    height: "20px",
                    backgroundColor: "white",
                    border: "2px solid #047CFC",
                  },
                  "& .MuiSlider-markLabel": {
                    color: "white",
                  },
                  "& .MuiSlider-mark": {
                    backgroundColor: "white",
                    height: "8px",
                    width: "8px",
                    borderRadius: "50%",
                  },
                }}
              />
            </Box>
          </div>

          <div className="p-4 bg-[rgba(20,36,76,0.1)] border border-[#262626] rounded-lg">
            <p className="text-white text-lg">Your Message</p>
            <input
              type="text"
              name="message"
              onChange={handleChange}
              className="w-full bg-transparent text-white outline-none border-b border-[#047CFC]"
              placeholder="Type here"
            />
          </div>

          <button
            disabled={disabled}
            onClick={handleSubmit}
            className={`p-4 bg-[#047CFC] rounded-lg text-white text-lg`}
          >
            Submit
          </button>
        </div>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default ContactForm;
