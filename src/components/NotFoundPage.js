import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <p>
      404! not found! <Link to="/">Home</Link>
    </p>
  );
}
export default NotFoundPage;