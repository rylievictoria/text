import React, { useState } from "react";
import CheckField from "./CheckField";
import FormField from "./FormField";
import SectionButton from "./SectionButton";
import { useAuth } from "./../util/auth.js";
import { useForm } from "react-hook-form";

function DashboardSms(props) {
  const auth = useAuth();
  const [pending, setPending] = useState(false);
  let customers = [
    ["Name", "Number", "Pizza Topping", "Favorite Color"],
    ["Rylie", 2624243872, ["Pepperoni"], ["Blue", "Red"]],
    ["Jordan", 6309010523, ["Pepperoni", "Sausage"], ["Blue"]],
  ];
  let questions = customers[0];
  let numbers = [2624243872, 6309010523];

  if (auth.user.stripeSubscriptionId) {
    // Load questions and answers from DB api
    customers = [
      ["Name", "Number", "Pizza Topping", "Favorite Color"],
      ["Rylie", 2624243872, ["Pepperoni"], ["Yellow"]],
    ];
    questions = customers[0]; // Create db function to get questions and not include phone
    numbers = [2624243872]; // Create db function to get phone numbers by filters
  }

  const { register, handleSubmit, errors, reset, getValues } = useForm();

  const onSubmit = (data) => {
    // Show pending indicator
    setPending(true);

    // Check Stripe account for if paid
    // If paid generate charge and ask if successful
    // Then check format of message data
    // Then send message
    // Then ask if successful
    auth
      .updatePassword(data.pass)
      .then(() => {
        // Clear form
        reset();
        // Set success status
        props.onStatus({
          type: "success",
          message: "Your password has been updated",
        });
      })
      // Maybe also catch error for needing a subscription?
      .catch((error) => {
        if (error.code === "auth/requires-recent-login") {
          // Update state to show re-authentication modal
          props.onStatus({
            type: "requires-recent-login",
            // Resubmit after reauth flow
            callback: () => onSubmit({ pass: data.pass }),
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
      {questions.map((question) => (
        <CheckField
          id={1}
          name={question}
          label={question + " Answers"}
          error={errors.question}
          inputRef={register({
            required: "Please select one or all.",
          })}
          options={[1, 2, 3]}
        />
      ))}

      <FormField
        name="message"
        type="textarea"
        label="Please enter your SMS"
        placeholder="Write to your people"
        error={errors.message}
        inputRef={register({
          required: "Please enter your text message to send!",
        })}
      />
      <div className="field">
        <div className="control">
          <SectionButton
            parentColor={props.parentColor}
            size="medium"
            state={pending ? "loading" : "normal"}
          >
            Send
          </SectionButton>
        </div>
      </div>
    </form>
  );
}

export default DashboardSms;
