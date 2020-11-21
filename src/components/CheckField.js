import React from "react";

function CheckField(props) {
  const { id, options, error, inputRef, ...inputProps } = props;

  return (
    <div className="field">
      {props.label && (
        <label className="label" htmlFor={props.id}>
          {props.label}
        </label>
      )}

      {options.map((option) => (
        <div className="control">
          <label for={option}>
            <input
              className="is-medium checkbox mr-2"
              ref={inputRef}
              type="checkbox"
              id={id + "|||" + option}
              name={id + "|||" + option}
            />
            {option}
          </label>
        </div>
      ))}

      {error && <p className="help is-danger">{error.message}</p>}
    </div>
  );
}

export default CheckField;
