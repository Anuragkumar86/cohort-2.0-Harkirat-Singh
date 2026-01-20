const zod = require("zod");

function validate(arr){
    const schema = zod.array(zod.number());
    // const schema = zod.array();

    const response = schema.safeParse(arr);

    console.log(response)
}

validate([2,3])

