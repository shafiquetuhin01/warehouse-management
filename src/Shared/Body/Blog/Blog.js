import React from "react";

const Blog = () => {
  return (
    <div
      className="container"
      style={{ backgroundColor: "rgba(184, 196, 214, 0.5)" }}
    >
      <h2 className="text-center mt-3">
        You will know four important topics from here
      </h2>
      <div className="p-2">
        <h3 className="bg-secondary text-white p-2">
          What is the difference between javascript and node.js ?{" "}
        </h3>
        <h5 className="bg-info text-black text-justify p-2">
          Ans: Both of these are used for programming. But there is a
          significant difference between Node.JS and Javascript. JavaScript
          (abbreviated as JS) is a lightweight scripting language that is
          object-oriented. It is used for developing HTML pages that are dynamic
          and have various interactive effects on their web pages. The Node.JS,
          on the other hand, helps in representing a list of all the methods and
          objects that the JavaScript code can access when run via node
          interpreters or in the V8 engine. In this article, we will discuss
          further the differences between Node.JS and Javascript. But before we
          do that, let us know a bit more about both of these in detail.{" "}
        </h5>
      </div>
      <div className="p-2">
        <h3 className="bg-secondary text-white p-2">
          When should you use `nodejs` and when should you use `mongodb` ?{" "}
        </h3>
        <h5 className="bg-info text-black text-justify p-2">
          Ans: Node is server side javascript framework. It is asynchronous and
          is used mainly to develop REST services which can be consumed by
          frontend. With node both client (browser code) and server both uses
          javascript language. There are many pre-built modules available.
          MongoDB is a document based NoSQL database. In terms of CAP theorem it
          falls in CP, consistent and partition tolerant by default. Records are
          stored as Bson documents in mongoDB.
        </h5>
      </div>
      <div className="p-2">
        <h3 className="bg-secondary text-white p-2">
          What is the differences between `sql` and `nosql` databases ?{" "}
        </h3>
        <h5 className="bg-info text-black text-justify p-2">
          Ans: SQL databases use structured query language and have a
          pre-defined schema for defining and manipulating data. SQL is one of
          the most versatile and widely used query languages available, making
          it a safe choice for many use cases. It’s perfect for complex queries.
          However, SQL can be too restrictive. You have to use predefined
          schemas to determine your data structure before you can work with it.
          All of your data must follow the same structure. This process requires
          significant upfront preparation. If you ever wanted to change your
          data structure, it would be difficult and disruptive to your whole
          system. NoSQL databases have dynamic schemas for unstructured data,
          and the data is stored in many ways. You can use column-oriented,
          document-oriented, graph-based, or KeyValue store for your data. This
          flexibility means that: You can create documents without having to
          first define their structure Each document can have its own unique
          structure The syntax can vary from database to database You can add
          fields as you go.
        </h5>
      </div>
      <div className="p-2">
        <h3 className="bg-secondary text-white p-2">
          What is the purpose of `jwt` and how does it work ?{" "}
        </h3>
        <h5 className="bg-info text-black text-justify p-2">
          Ans: JWT, or JSON Web Token, is an open standard used to share
          security information between two parties — a client and a server. Each
          JWT contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.
        </h5>
      </div>
    </div>
  );
};

export default Blog;
