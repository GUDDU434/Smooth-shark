import React from "react";
import Switch from "@mui/material/Switch";
import styled from "./Setting.module.css";
import { useState } from "react";
function Setting() {
  const [toggale1, settoggale1] = useState(true);
  const [toggale2, settoggale2] = useState(false);
  const [toggale3, settoggale3] = useState(false);
  const handleAudio = () => {
    settoggale3(false);
    settoggale2(false);
    settoggale1(true);
  };
  const handleVideo = () => {
    settoggale3(false);
    settoggale1(false);
    settoggale2(true);
  };

  const handleGeneral = () => {
    settoggale2(false);
    settoggale1(false);
    settoggale3(true);
  };
  return (
    <div className={styled.container}>
      <div className={styled.innerdiv}>
        <h1>Setting</h1>
        <div className={styled.buttondiv}>
          <i
            style={{ fontSize: "30px", marginTop: "-20px" }}
            class="fa fa-file-audio-o"
            aria-hidden="true"
          ></i>
          <button className={styled.btn} onClick={handleAudio}>
            Audio
          </button>
        </div>
        <div className={styled.buttondiv}>
          <i
            style={{ fontSize: "30px" }}
            class="fa-solid fa-video"
            aria-hidden="true"
          ></i>
          <button className={styled.btn} onClick={handleVideo}>
            Video
          </button>
        </div>
        <div className={styled.buttondiv}>
          <i
            style={{ fontSize: "30px" }}
            class="fa-solid fa-gear"
            aria-hidden="true"
          ></i>
          <button className={styled.btn} onClick={handleGeneral}>
            General
          </button>
        </div>
      </div>
      <p className={styled.hr}></p>

      <div className={styled.rightdiv}>
        {toggale1 && (
          <div style={{ marginTop: "50px" }}>
            <span
              style={{
                font: "1em sans-serif",
                fontSize: "25px",
                marginLeft: "-40%",
                // marginTop:"30px"
              }}
            >
              Microphone
            </span>
            <div>
              {/* <Box sx={{ minWidth: 120 }}>
      <FormControl style={{width:"40%"}} fullWidth>
        <Select style={{height:"50px",marginTop:"-10px"}}>
          <MenuItem className={styled.MenuItem} value={10}>Communication-Microphone(Realtek(R....))</MenuItem>
          <MenuItem value={20}>Default-Microphone(Realtek(R)Audio)</MenuItem>
          <MenuItem value={30}>Headset(Rockerz255pro)(Bluetooth)</MenuItem>
          <MenuItem value={30}>Microphone(Realtek(R)Audio)</MenuItem>
        </Select>
      </FormControl>
    </Box> */}
            </div>
            {/* <br /> */}
            <div>
              <select className={styled.select}>
                <option style={{}}>
                  Communication-Microphone(Realtek(R....))
                </option>
                <option value="">Default-Microphone(Realtek(R)Audio)</option>
                <option value="">Headset(Rockerz255pro)(Bluetooth)</option>
                <option value="">Microphone(Realtek(R)Audio)</option>
              </select>
              <i
                style={{ marginLeft: "60px", fontSize: "30px" }}
                className="fa-solid fa-microphone"
              ></i>
              <h2
                style={{
                  margin: "0px",
                  marginTop: "-40px",
                  marginLeft: "380px",
                }}
              >
                ...
              </h2>
            </div>
            <br />
            <span
              style={{
                font: "1em sans-serif",
                fontSize: "25px",
                marginLeft: "-40%",
              }}
            >
              Speakers
            </span>
            <br />
            <select className={styled.select1}>
              <option style={{}}>
                Communication-Headphone(Realtek(R)Audio)
              </option>
              <option value="">Default-Speakers(Realtek)(Audio)</option>
              <option value="">Headphone(Rockerz255pro)(Bluetooth)</option>
              <option value="">Speakers(Realtek(R)Audio)</option>
            </select>
            <i
              style={{ marginLeft: "45px", fontSize: "30px" }}
              class="fa-solid fa-volume-high"
            ></i>
            <p
              style={{ margin: "0px", marginLeft: "380px", marginTop: "-40px" }}
            >
              test
            </p>
          </div>
        )}
        {toggale2 && <Settingpart />}
        {toggale3 && <Settingthirdpart />}
      </div>
    </div>
  );
}

export default Setting;

export function Settingpart() {
  return (
    <div style={{ border: "solid" }}>
      <h1>Camera</h1>
      <div style={{ display: "flex", gap: "30px" }}>
        <select style={{ height: "30px", fontSize: "20px" }}>
          <option>Integrated webcam(1bcf:2b9d)</option>
          <option>Integrated webcam(1bcf:2b9d)</option>
        </select>
      </div>
      <div className={styled.videodiv}></div>
    </div>
  );
}

export function Settingthirdpart() {
  const [checked, setChecked] = React.useState(true);
  const [checked2, setChecked2] = React.useState(true);

  const handleChange1 = (event) => {
    setChecked(event.target.checked);
  };
  const handleChange2 = (event) => {
    setChecked2(event.target.checked);
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <h5 >
          send additional diagnostic info to google
          <br />
          Google used these system longs to make meet better for evewryone
        </h5>
        <Switch
          className={styled.Switch}
          checked={checked}
          onChange={handleChange1}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <h5 >
          Leave empty calls
          <br />
          Remove you from a call after a few minutes if no one else joins
        </h5>
        <Switch
          className={styled.Switch}
          checked={checked2}
          onChange={handleChange2}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
    </div>
  );
}
