# http-code-errors
Http error types to code and message converter

## Add to project
`yarn add sdhds/http-code-errors`

## Import to component
`import httpCodeErrors from 'http-code-errors';`

## Add to response example
`res.status(400).json(httpCodeErrors('BadRequest'));`

Don't forget to provide same HTTP code in res.status as in httpCodeErrors
#### Result
```
{ 
	code: 400,
	type: 'BadRequest',
	message: 'Invalid request',
	id: '006fcf66-992f-5bc0-b9ff-f6637af67f59'
}
```

## P.S.
All http types and messages you can find in code at index.js

If there will not be provided type, result will be
```
{
	code: 500,,
	type: 'UndefinedError',
	message: 'Unexpected error occured',
	id: 'cda4089e-6c4f-54f4-b3d3-ae7c1b201ad9'
}

```