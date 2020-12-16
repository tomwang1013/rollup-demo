import Foo from './Foo';
import React from 'react';

Promise.resolve(1).then(a => console.log(a));

class CA {
  fun() {
    console.log(11);
  }
}

export default function () {
  new CA().fun();
  return <Foo>hello, rollup</Foo>;
}
