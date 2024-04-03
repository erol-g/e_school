import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const PageHeader = ({ title }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  return (
    <div className="page-header">
      <h1>{title}</h1>
      <h2 style={{ textTransform: "capitalize" }}>
        Welcome, {`${userInfo?.name}`}
      </h2>
    </div>
  );
};
PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
