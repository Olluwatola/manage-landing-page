<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
 
</head>
<body>
  <header>
    <h1>Responsive Web Application</h1>
    <p>A modern web application built with React, TypeScript, and Tailwind CSS.</p>
  </header>

  <section>
    <h2>Features</h2>
    <ul>
      <li><strong>Responsive Design:</strong> Fully optimized for various screen sizes with a mobile-first strategy using Tailwind CSS utilities.</li>
      <li><strong>Reusable Components:</strong> Modular and scalable components such as input fields, buttons, and modals.</li>
      <li><strong>Dynamic Interactivity:</strong> Automatically responds to screen width changes and adjusts the UI dynamically.</li>
      <li><strong>Accessibility:</strong> Semantic HTML and ARIA-compliant components for an inclusive user experience.</li>
      <li><strong>Custom Features:</strong> Gradient backgrounds, flexible layouts, and advanced interactive components.</li>
    </ul>
  </section>

  <section>
    <h2>Technologies Used</h2>
    <ul>
      <li><strong>React:</strong> Component-based library for building the UI.</li>
      <li><strong>TypeScript:</strong> Static typing for robust development.</li>
      <li><strong>Tailwind CSS:</strong> Utility-first CSS framework for styling.</li>
      <li><strong>Vite:</strong> Fast development environment.</li>
    </ul>
  </section>

  <section>
    <h2>Custom Hooks and Utilities</h2>
    <p>This project uses a custom hook to dynamically adjust the state on any screen width change:</p>
    <pre>
      <code>
useEffect(() => {
  const handleResize = () => {
    setCurrentIndex(0); // Reset index on resize
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
      </code>
   
  </section>

  <section>
    <h2>Contributions</h2>
    <p>Contributions are welcome! If you encounter issues or have ideas for improvement, feel free to open a pull request or an issue.</p>
  </section>

  <section>
    <h2>License</h2>
    <p>This project is licensed under the <strong>MIT License</strong>. See the LICENSE file for details.</p>
  </section>

  <section>
    <h2>Author</h2>
    <p><strong>Tola</strong><br />A passionate developer focused on creating scalable, responsive, and modern web applications.</p>
  </section>
</body>
</html>
