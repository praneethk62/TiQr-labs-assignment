
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

const Userapprovel = () => {
  const [status, setStatus] = useState("");

  const handleAccept = () => {
    setStatus("accepted");
  };

  const handleReject = () => {
    setStatus("rejected");
  };

  return (
    <>
      <div className="approval">
        <h2>You have an invite</h2>
        <div className="btnapprovel">
          {status === "accepted" && <p>You accepted</p>}
          {status === "rejected" && <p>You rejected</p>}
          <Button
            className="btn btn-success"
            type="submit"
            onClick={handleAccept}
          >
            Accept
          </Button>
          <Button
            className="btn btn-danger"
            type="submit"
            onClick={handleReject}
          >
            Reject
          </Button>
        </div>
      </div>
    </>
  );
};

export default Userapprovel;
