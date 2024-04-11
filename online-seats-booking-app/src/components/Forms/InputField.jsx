import React from "react";
import { MDBInput } from "mdb-react-ui-kit";

export const InputField = (props) => {
  return <MDBInput label={props.label} id={props.id} type={props.type} />;
};
