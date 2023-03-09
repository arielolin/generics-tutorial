import React, { useState } from "react";

interface Props {
  name: string;
}

const HelloGenerics: React.FC<Props> = () => {
  const [stateInfered, setStateInfered] = useState({ name: "" });
  const [stateExplicit, setStateExplicit] = useState<{
    fullName: string | null;
  }>({ fullName: "f" });

  return null;
};

interface FormProps<T> {
  values: T;
  children: (values: T) => JSX.Element;
}

https://www.youtube.com/watch?v=nViEqpgwxHE