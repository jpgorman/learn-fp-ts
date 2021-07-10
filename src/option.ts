import * as O from "fp-ts/Option";
import { pipe, flow } from "fp-ts/function";

interface Fizz {
  buzz: string
}

interface Foo {
  bar?: Fizz
}

const foo = {
  bar: {
    buzz: "hey"
  },
} as Foo | undefined

const res = pipe(
  foo,
  O.fromNullable,
  O.map(({bar}) => bar),
  O.chain(
    flow(
      O.fromNullable,
      O.map(({buzz}) => buzz)
    )
  ),
  O.getOrElse(() => undefined)
)

console.log("FOO", res)
