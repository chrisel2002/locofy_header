import { TextField } from "@mui/material";
import "./EdgeCase.css";

const EdgeCase = () => {
  return (
    <div className="edge-case">
      <header className="horizontal-nav-bar-desktop-web-parent">
        <div className="horizontal-nav-bar-desktop-web">
          <div className="logo-placeholder-parent">
            <div className="logo-placeholder">
              <img className="dashed-line-icon" alt="" src="/dashed-line.svg" />
              <img
                className="dashed-line-icon1"
                alt=""
                src="/dashed-line-1.svg"
              />
            </div>
            <div className="search-bar-area">
              <TextField
                className="search-bar"
                placeholder="Usernam|"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#b2b9c0" },
                  "& .MuiInputBase-root": {
                    height: "40px",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                  },
                  "& .MuiInputBase-input": { color: "#1b1d1f" },
                }}
              />
            </div>
          </div>
          <div className="white-space" />
          <div className="user-actions-area">
            <div className="actions">
              <img
                className="avatar-icon"
                loading="lazy"
                alt=""
                src="/avatar.svg"
              />
               <img className="frame-child" 
                loading="lazy" alt="" src="/group-8.svg" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default EdgeCase;
