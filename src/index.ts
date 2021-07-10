import {pipe} from "fp-ts/function"
import * as E from "fp-ts/Either"
import {pipeline}  from "./either"

const res = pipe("Password123", pipeline, E.getOrElse(() => undefined))

console.log(res)
