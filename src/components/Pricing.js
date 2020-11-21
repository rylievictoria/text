import React from "react";
import { Link } from "./../util/router.js";
import { useAuth } from "./../util/auth.js";
import "./Pricing.scss";

function Pricing(props) {
  const auth = useAuth();

  return (
    <div className="columns is-centered is-variable is-4 is-desktop">
      {props.items.map((item, index) => (
        <div
          className="Pricing__column column is-one-third-desktop"
          key={index}
        >
          <div
            className={
              "Pricing__card card" +
              (item.emphasized === true ? " emphasized" : "")
            }
          >
            <div className="Pricing__card-content card-content">
              <div className="Pricing__name has-text-weight-bold">
                {item.name}
              </div>
              <div className="Pricing__price has-text-weight-bold is-size-1">
                ${item.price}
                <span className="Pricing__period is-size-3">/mo</span>
              </div>

              {item.description && (
                <p className="Pricing__description">{item.description}</p>
              )}

              {item.perks && (
                <ul className="Pricing__perks">
                  {item.perks.map((perk, index) => (
                    <li key={index}>
                      <i className="fas fa-check has-text-primary" />
                      {perk}
                    </li>
                  ))}
                </ul>
              )}

              <Link
                className="Pricing__button button is-medium is-primary"
                to={
                  auth.user
                    ? `/purchase/${item.id}`
                    : `/auth/signup?next=/purchase/${item.id}`
                }
              >
                {props.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Pricing;
