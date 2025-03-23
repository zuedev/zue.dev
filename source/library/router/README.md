# Router Class Documentation

The `Router` class is designed to handle routing of HTTP requests based on the request path. It allows you to define routes with dynamic parameters and associate them with handler functions.

## Constructor

### `new Router(request, environment, context)`

Creates a new instance of the `Router` class.

- **Parameters:**

  - `request` (Request): The incoming request object.
  - `environment` (Environment): The environment object.
  - `context` (Context): The context object.

- **Returns:** A new `Router` instance.

---

## Methods

### `add(path, handler)`

Adds a new route to the router.

- **Parameters:**

  - `path` (string): The path to match. Dynamic segments can be defined using `:paramName`.
  - `handler` (function): The handler function to call if the path matches. The handler receives `request`, `environment`, and `context` as arguments.

- **Returns:** The `Router` instance for chaining.

- **Example:**
  ```javascript
  router.add("/users/:id", (request, environment, context) => {
    const userId = router.parameters.id;
    return new Response(`User ID: ${userId}`);
  });
  ```

---

### `respond(body, status = 200)`

Helper function to create a JSON response.

- **Parameters:**

  - `body` (object): The JSON object to respond with.
  - `status` (number, optional): The HTTP status code. Defaults to `200`.

- **Returns:** A `Response` object.

- **Example:**
  ```javascript
  return router.respond({ message: "Success" }, 200);
  ```

---

### `route()`

Routes the incoming request to the appropriate handler based on the request path.

- **Returns:** A `Response` object.

- **Behavior:**

  - Matches the request path against the registered routes.
  - Extracts dynamic parameters from the path and stores them in `router.parameters`.
  - Calls the corresponding handler function.
  - Returns a `404` response if no route matches.
  - Returns a `500` response in case of unexpected errors.

- **Example:**
  ```javascript
  const response = router.route();
  ```

---

## Example Usage

```javascript
import Router from "./router.js";

const router = new Router(request, environment, context);

router
  .add("/hello", () => {
    return new Response("Hello, world!");
  })
  .add("/users/:id", (request, environment, context) => {
    const userId = router.parameters.id;
    return new Response(`User ID: ${userId}`);
  });

const response = router.route();
```

---

## Error Handling

- **404 Not Found:** If no route matches the request path, the `Router` responds with:

  ```json
  {
    "error": "Route not found: /path"
  }
  ```

- **500 Internal Server Error:** If an unexpected error occurs, the `Router` responds with:
  ```json
  {
    "error": "Internal Server Error: error message"
  }
  ```

---

## Notes

- Paths are normalized by removing trailing slashes.
- Dynamic parameters in paths (e.g., `:id`) are extracted and stored in the `parameters` property of the `Router` instance.
- The `add` method uses regular expressions to match paths efficiently.
