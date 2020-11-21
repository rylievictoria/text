import React, { useState } from "react";
import FormField from "./FormField";
import SectionButton from "./SectionButton";
import { useAuth } from "./../util/auth.js";
import { useForm } from "react-hook-form";

function DashboardHome(props) {
  const auth = useAuth();
  const [pending, setPending] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Show pending indicator
    setPending(true);

    // Need to verify URL is valid
    // Need to verify phone column is in sheet once URL is valid

    return auth
      .updateProfile(data)
      .then(() => {
        // Set success status
        props.onStatus({
          type: "success",
          message: "Your form settings have been updated.",
        });
      })
      .catch((error) => {
        if (error.code === "auth/requires-recent-login") {
          props.onStatus({
            type: "requires-recent-login",
            // Resubmit after reauth flow
            callback: () => onSubmit(data),
          });
        } else {
          // Set error status
          props.onStatus({
            type: "error",
            message: error.message,
          });
        }
      })
      .finally(() => {
        // Hide pending indicator
        setPending(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        name="sheetLink"
        type="text"
        label="Copy & paste the URL to the Google sheet where your form responses go:"
        defaultValue={auth.user.sheetLink}
        placeholder="https://docs.google.com/spreadsheets/..."
        error={errors.sheetLink}
        inputRef={register({
          required: "Please enter a valid sheet URL.",
        })}
      />
      <FormField
        name="phoneCol"
        type="text"
        label="Copy the title of the column where all of the phone numbers are:"
        defaultValue={auth.user.phoneCol}
        placeholder="What is your phone #?"
        error={errors.phoneCol}
        inputRef={register({
          required:
            "Please enter a valid column title within your sheet. They must be in the top row.",
        })}
      />
      <div className="field">
        <div className="control">
          <SectionButton
            parentColor={props.parentColor}
            size="medium"
            state={pending ? "loading" : "normal"}
          >
            Save
          </SectionButton>
        </div>
      </div>
    </form>
  );
}

export default DashboardHome;
