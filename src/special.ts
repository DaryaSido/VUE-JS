//any, unknown

const age = 35.5
console.log(age.toFixed())

// let user:any = "Dasha"

let user:unknown = "Dasha"

if(typeof user === "string") {
    console.log(user.slice(0, 1));
}
