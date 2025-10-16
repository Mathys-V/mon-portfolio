export default function Footer() {
  return (
    <footer className="bg-gray-900 text-center py-4 mt-10">
      <p className="text-white dark:text-gray-300">
        © {new Date().getFullYear()} Mathys Vanheulle - Portfolio
      </p>
    </footer>
  );
}
