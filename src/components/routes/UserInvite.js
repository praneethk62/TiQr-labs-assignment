import React, { useState } from "react";


function UserInvite() {
  const [email, setEmail] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInviteClick = (event) => {
    event.preventDefault(); // Prevent the form submission

    // You can add your logic here to send the invitation based on the email

    setShowSuccessMessage(true);
    setEmail("");
  };

  return (
    <div className="invite">
      <form>
        <div>
          <div className="showmes">
            Enter the Email <br />
            {showSuccessMessage && (
              <div className="success-message">
                Invitation sent successfully!
              </div>
            )}
          </div>{" "}
          <br />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <button className="userbtn" type="submit" onClick={handleInviteClick}>
          Send Invitation
        </button>
      </form>
    </div>
  );
}

export default UserInvite;
