import "./App.css";
import { motion } from "framer-motion";

import {
  AccountCircleRounded,
  AssignmentTurnedInRounded,
  AttachMoneyRounded,
  BarChartRounded,
  ColorLensRounded,
  DashboardRounded,
  SettingsRemoteRounded,
  TocRounded,
} from "@material-ui/icons";
import Item from "./component/Item";
import { useState } from "react";
function App() {
  const [open, setOpen] = useState(true);

  // for collpsing sidebar
  const handleToggle = () => {
    setOpen(!open);
  };

  const sideContainerVariants = {
    true: {
      width: "15rem",
    },
    false: {
      transition: {
        delay: 0.6,
      },
    },
  };

  const sidebarVariants = {
    true: {},
    false: {
      width: "3rem",
      transition: {
        delay: 0.4,
      },
    },
  };

  const profileVariants = {
    true: {
      alignSelf: "center",
      width: "4rem",
    },
    false: {
      alignSelf: "flex-start",
      marginTop: "2rem",
      width: "3rem",
    },
  };
  return (
    <div className="App">
      <motion.div
        data-Open={open}
        variants={sideContainerVariants}
        initial={`${open}`}
        animate={`${open}`}
        className="sidebar_container"
      >
        {/* sidebar div */}
        <motion.div
          className="sidebar"
          initial={`${open}`}
          animate={`${open}`}
          variants={sidebarVariants}
        >
          {/* lines_icon */}
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 180,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3.5px)",
              WebkitBackdropFilter: "blur(3.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              transition: {
                delay: 0.2,
                duration: 0.4,
              },
            }}
            onClick={handleToggle}
            className="lines_icon"
          >
            <TocRounded />
          </motion.div>
          {/* profile */}
          <motion.div
            layout
            initial={`${open}`}
            animate={`${open}`}
            variants={profileVariants}
            className="profile"
            transition={{ duration: 0.4 }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(5.5px)",
              WebkitBackdropFilter: "blur(5.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              cursor: "pointer",
            }}
          >
            <img
              src="data:image/jpeg;base64,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"
              alt="profile_img"
            />
          </motion.div>
          {/* groups */}
          <div className="groups">
            {/* group 1 */}
            <div className="group">
              <motion.h3
                animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
              >
                Full-Stack-Web Development
              </motion.h3>
              <Item icon={<DashboardRounded />} name="Mern-Stack" />
              <Item icon={<BarChartRounded />} name="Mean-Stack" />
            </div>
          </div>
          {/* group 2 */}
          <div className="group">
            <motion.h3
              animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
            >
              Content
            </motion.h3>
            <Item icon={<AttachMoneyRounded />} name="Programing" />
            <Item icon={<AssignmentTurnedInRounded />} name="Front-End" />{" "}
            <Item icon={<AccountCircleRounded />} name="Back-End" />
          </div>
          {/* group 3 */}
          <div className="group">
            <motion.h3
              animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
            >
              CUSTOMIZATION
            </motion.h3>
            <Item icon={<SettingsRemoteRounded />} name="Segments" />
            <Item icon={<ColorLensRounded />} name="Themems" />
          </div>
        </motion.div>
      </motion.div>

      {/* <div className="body_container">
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />
      </div> */}
    </div>
  );
}

export default App;
