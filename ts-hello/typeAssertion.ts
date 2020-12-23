let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c')
let endsWithC2 = (message as string).endsWith('c')