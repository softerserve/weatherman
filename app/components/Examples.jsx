var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
		<li>
          <Link to='/?location=Houston, TX'>Houston, TX</Link>
        </li>
        <li>
          <Link to='/?location=Peachtree Corners, GA'>Peachtree Corners, GA</Link>
        </li>
        <li>
          <Link to='/?location=Jacksonville, FL'>Jacksonville, FL</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
