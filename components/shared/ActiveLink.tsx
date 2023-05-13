import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren, useState, useEffect, Suspense } from "react";

type ActiveLinkProps = LinkProps & {
  className?: string;
  activeClassName?: string;
};

const ActiveLink = ({
  children,
  activeClassName,
  className,
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  const pathname = usePathname();
  const [classNameState, setClassNameState] = useState(className);

  useEffect(() => {
    if (pathname === props.href) {
      setClassNameState(`${className} ${activeClassName}`.trim());
    } else {
      setClassNameState(className);
    }
  }, [pathname, props.href, className, activeClassName]);

  return (
    <Suspense fallback={null}>
      <div className='relative'>
        <Link className={classNameState} {...props}>
          {children}
        </Link>

        {pathname === props.href && (
          <div className='w-full h-2'>
            <div className='h-full w-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-tl-full rounded-br-full'></div>
          </div>
        )}
      </div>
    </Suspense>
  );
};

export default ActiveLink;
