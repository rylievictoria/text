import React, { useState } from "react";
import Section from "./Section";
import ReauthModal from "./ReauthModal";
import SettingsNav from "./SettingsNav";
import FormAlert from "./FormAlert";
import SettingsGeneral from "./SettingsGeneral";
import SettingsPassword from "./SettingsPassword";
import SettingsBilling from "./SettingsBilling";
import { useAuth } from "./../util/auth.js";
import "./SettingsSection.scss";

function SettingsSection(props) {
  const auth = useAuth();
  const [formAlert, setFormAlert] = useState(null);

  // State to control whether we show a re-authentication flow
  // Required by some security sensitive actions, such as changing password.
  const [reauthState, setReauthState] = useState({
    show: false,
  });

  const validSections = {
    general: true,
    password: true,
    billing: true,
  };

  const section = validSections[props.section] ? props.section : "general";

  // Handle status of type "success", "error", or "requires-recent-login"
  // We don't treat "requires-recent-login" as an error as we handle it
  // gracefully by taking the user through a re-authentication flow.
  const handleStatus = ({ type, message, callback }) => {
    if (type === "requires-recent-login") {
      // First clear any existing message
      setFormAlert(null);
      // Then update state to show re-authentication modal
      setReauthState({
        show: true,
        // Failed action to try again after reauth
        callback: callback,
      });
    } else {
      // Display message to user (type is success or error)
      setFormAlert({
        type: type,
        message: message,
      });
    }
  };

  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      {reauthState.show && (
        <ReauthModal
          callback={reauthState.callback}
          provider={auth.user.providers[0]}
          onDone={() => setReauthState({ show: false })}
        />
      )}

      <SettingsNav activeKey={section} parentColor={props.color} />
      <div className="SettingsSection__container container">
        {formAlert && (
          <FormAlert
            type={formAlert.type}
            message={formAlert.message}
            style={{ maxWidth: "450px" }}
          />
        )}

        {section === "general" && (
          <SettingsGeneral parentColor={props.color} onStatus={handleStatus} />
        )}

        {section === "password" && (
          <SettingsPassword parentColor={props.color} onStatus={handleStatus} />
        )}

        {section === "billing" && (
          <SettingsBilling parentColor={props.color} onStatus={handleStatus} />
        )}
      </div>
    </Section>
  );
}

export default SettingsSection;
