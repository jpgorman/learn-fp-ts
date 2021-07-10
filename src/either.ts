import {flow} from "fp-ts/function"
import * as E from "fp-ts/Either"
import * as Password from "./password"
import crypto from "crypto"

export const pipeline = flow(
  Password.of,
  Password.validate({minLength: 8, capitalLetterRequired: true}),
  E.chainW(
    Password.hash((value) => {
      return E.right(crypto.createHash("md5").update(value).digest("hex"))
    })
  )
)

