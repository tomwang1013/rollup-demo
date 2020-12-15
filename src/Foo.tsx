import React from "react";

interface FooProps {
  children: React.ReactChildren | string;
}

export default function Foo({ children }: FooProps) {
  return <div>{children}</div>
}
