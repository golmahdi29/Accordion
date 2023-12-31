import React, { useState } from "react";

export default function WithToggle(OrginalComponent) {
  const NewComponent = (props) => {
    const [showInfo, setShowInfo] = useState(false);

    const toggleShow = () => {
      setShowInfo(!showInfo);
    };
    return <OrginalComponent {...props} toggleShow={toggleShow} showInfo={showInfo} />;
  };

  return NewComponent;
}
