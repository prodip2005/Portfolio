const fs = require('fs');
let content = fs.readFileSync('src/components/shared/Navbar.jsx', 'utf8');

// add import
if (!content.includes('usePathname')) {
    content = content.replace("import Link from 'next/link';", "import Link from 'next/link';\nimport { usePathname } from 'next/navigation';");
}

// add hook
if (!content.includes('const pathname = usePathname()')) {
    content = content.replace("const [hue, setHue] = useState(340);", "const [hue, setHue] = useState(340);\n  const pathname = usePathname();");
}

// update links block
const oldLinks = `<div className="hidden md:flex items-center gap-8 text-[14px] font-medium opacity-80">
          <Link
            href="/"
            className="text-foreground hover:text-primary transition-all"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-foreground hover:text-primary transition-all"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-foreground hover:text-primary transition-all"
          >
            Contact
          </Link>
        </div>`;
const newLinks = `<div className="hidden md:flex items-center gap-8 text-[14px] font-medium">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Contact', path: '/contact' }
          ].map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={\`transition-all \${isActive ? 'text-primary font-bold drop-shadow-[0_0_8px_var(--primary-shade)] scale-105' : 'text-foreground/80 hover:text-primary'}\`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>`;

content = content.replace(oldLinks, newLinks);
fs.writeFileSync('src/components/shared/Navbar.jsx', content);
