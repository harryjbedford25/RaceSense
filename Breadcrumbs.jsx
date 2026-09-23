import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  
  const getBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter(x => x);
    
    const breadcrumbs = [
      { name: 'Home', path: '/' }
    ];

    pathnames.forEach((name, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
      const isLast = index === pathnames.length - 1;
      
      breadcrumbs.push({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        path: routeTo,
        isLast
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className="max-w-7xl mx-auto px-6 py-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-[#8E8E93]">/</span>
            )}
            {breadcrumb.isLast ? (
              <span className="text-[#ccff00] font-mono text-[11px] tracking-[0.15em] uppercase">
                {breadcrumb.name}
              </span>
            ) : (
              <Link
                to={breadcrumb.path}
                className="text-[#8E8E93] hover:text-[#F4F4F9] transition-colors font-mono text-[11px] tracking-[0.15em] uppercase"
              >
                {breadcrumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}