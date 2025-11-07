import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
<footer className="bg-gradient-to-t from-black/40 via-amber-300/70 to-black/40 text-white pt-10 pb-6 backdrop-blur-xl">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Links Section */}
    <div className="flex flex-col space-y-2">
      <h2 className="font-bold text-lg mb-2">Quick Links</h2>
      <Link href="/women/home" className="hover:text-amber-600 transition">Home</Link>
      <Link href="/women/newin" className="hover:text-amber-600 transition">New In</Link>
      <Link href="/women/clothing" className="hover:text-amber-600 transition">Clothing</Link>
      <Link href="/women/dresses" className="hover:text-amber-600 transition">Dresses</Link>
      <Link href="/cart" className="hover:text-amber-600 transition">Cart</Link>
    </div>

    {/* Contact Section */}
    <div className="flex flex-col space-y-2">
      <h2 className="font-bold text-lg mb-2">Contact</h2>
      <p>Email: support@stella.com</p>
      <p>Phone: +123 456 7890</p>
      <p>Address: 123 Fashion Street, NYC</p>
    </div>

    {/* Social Media */}
    <div className="flex flex-col space-y-2">
      <h2 className="font-bold text-lg mb-2">Follow Us</h2>
      <div className="flex gap-4 text-xl">
        <a href="#" className="hover:text-amber-600 transition"><FaFacebookF /></a>
        <a href="#" className="hover:text-amber-600 transition"><FaTwitter /></a>
        <a href="#" className="hover:text-amber-600 transition"><FaInstagram /></a>
        <a href="#" className="hover:text-amber-600 transition"><FaYoutube /></a>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="mt-10 border-t border-amber-300/40 pt-4 text-center text-sm text-gray-100">
    &copy; {new Date().getFullYear()} STELLA. All rights reserved.
  </div>
</footer>
  );
};

export default Footer;