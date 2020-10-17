import React from "react";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        style={{ width: props.width, height: props.height }}
        className={styles.customInput}
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = `${props.placeholder}`)}
      ></input>

      <Icon
        path={mdiMagnify}
        size={1}
        style={{ marginLeft: -40, marginRight: 20 }}
        color="white"
      />
    </div>
  );
};

export default Input;
