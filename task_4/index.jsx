import { useState } from "react";

export const Block = ({ mouseEnterCallbak, children }) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {children}
    </div>
  );
};

// Использование:

export const Block1 = (props) => (
  <Block mouseEnterCallbak={props.mouseEnterCallbak}>
    <img src={props.imgSrc} alt={props.imgAlt} />
  </Block>
);

export const Block2 = (props) => (
  <Block mouseEnterCallbak={props.mouseEnterCallbak}>
    <p>{props.content}</p>
  </Block>
);

export const Block3 = (props) => (
  <Block mouseEnterCallbak={props.mouseEnterCallbak}>
    <address>
      country: {props.userData.country}, street: {props.userData.street}
    </address>
  </Block>
);
