import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog page");
  return (
    <div>
      <h2 className="my-10 text-3xl">Difference between SQL and NoSQL.</h2>
      <p className="text-2xl">
        SQL databases use a structured, tabular data model where data is
        organized into tables with predefined schemas. These tables have columns
        representing different data attributes, and each row represents a
        record. On the other hand NoSQL databases use various data models such
        as document, key-value, column-family, and graph. They are more flexible
        and allow for the storage of unstructured or semi-structured data. SQL
        databases use the SQL query language for data manipulation and
        retrieval. SQL provides a standardized way to interact with relational
        databases using commands like SELECT, INSERT, UPDATE, and DELETE. NoSQL
        databases use various query languages that are specific to their data
        model. For example, MongoDB uses a query language to work with JSON-like
        documents.
      </p>
      <h2 className="my-10 text-3xl">What is JWT, and how does it work?</h2>
      <p className="text-2xl">
        JWT stands for JSON Web Token. It's a compact and self-contained way of
        transmitting information between two parties in a secure manner as a
        JSON object. JWTs are often used for authentication and authorization in
        web applications and APIs. They are commonly used in scenarios where the
        client needs to prove its identity to access certain resources or
        perform specific actions.
        <br />
        Working process of JWT: <br /> 1. Authentication: • A user logs in using
        their credentials (username and password) or another authentication
        method. • The server validates the credentials and generates a JWT
        containing relevant information about the user's identity and
        permissions. <br /> 2. Token Generation: • The server generates the JWT
        by creating the header, payload, and signature. • The header specifies
        the token type (JWT) and the hashing algorithm used for the signature,
        such as HMAC or RSA. <br /> 3. Token Issuance: • Once generated, the
        server sends the JWT back to the client as part of the response after
        successful authentication. <br /> 4. Token Usage: • The client stores
        the received JWT securely. It can be stored in memory, local storage, or
        cookies, depending on security requirements and the platform being used.{" "}
        <br /> 5. Token Validation: • When the client makes subsequent requests
        to access protected resources or perform actions, it includes the JWT in
        the request headers. • The server receives the JWT and verifies its
        authenticity using the stored secret (or public key) and the same
        hashing algorithm. <br /> 6. Access Control: • The server checks the
        validity of the signature and decodes the payload to extract the claims.
        • Based on the claims, the server determines whether the client is
        authorized to access the requested resource or perform the action. • If
        the signature is valid and the claims allow access, the server processes
        the request; otherwise, it responds with an appropriate error message.
      </p>
      <h2 className="my-10 text-3xl">
        What is the difference between javascript and NodeJS?{" "}
      </h2>
      <p className="text-2xl">
        JavaScript is a versatile programming language primarily used for
        front-end web development, while Node.js is a runtime environment that
        enables you to use JavaScript on the server side. Node.js expands
        JavaScript's capabilities beyond the browser by providing a way to build
        scalable and efficient server-side applications.{" "}
      </p>
      <h2 className="my-10 text-3xl">
        How does NodeJS handle multiple requests at the same time?{" "}
      </h2>
      <p className="text-2xl mb-10">
        Node.js manages multiple requests simultaneously by leveraging its
        event-driven, non-blocking I/O model. This approach allows Node.js to
        efficiently handle a high number of concurrent connections without
        wasting resources on waiting for I/O operations to complete. However,
        it's important to note that Node.js might not be as suitable for
        CPU-intensive tasks due to its single-threaded nature and its focus on
        I/O efficiency.
      </p>
    </div>
  );
};

export default Blog;
