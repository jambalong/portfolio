import { forwardRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, href, children, ...props }, ref) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      if (typeof window !== "undefined") {
        setIsActive(window.location.pathname === href);
      }
    }, [href]);

    return (
      <a
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        {...props}
      >
        {children}
      </a>
    );
  }
);

NavLink.displayName = "NavLink";
export { NavLink };