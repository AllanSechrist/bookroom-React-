import React from "react";

function Footer() {
	const year = new Date().getFullYear();
  return (
		<footer className="footer p-10 lb-gray-700 text-primary-content footer-center">
			<div>
				<p>Copyright &copy; {year} Allan Sechrist</p>
			</div>
		</footer>
	)
}

export default Footer;
