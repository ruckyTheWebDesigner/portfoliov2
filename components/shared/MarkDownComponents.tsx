import React, { type JSX } from "react";
import CodeBlock from "./CodeBlock"; // Import CodeBlock from its location
import { Table } from "@mantine/core";

type ExtraProps = {
  node: any;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
};

type Components = Partial<{
  [TagName in keyof JSX.IntrinsicElements]:  // Class component:
    | (new (
        props: JSX.IntrinsicElements[TagName] & ExtraProps
      ) => JSX.ElementClass)
    // Function component:
    | ((
        props: JSX.IntrinsicElements[TagName] & ExtraProps
      ) => JSX.Element | string | null | undefined)
    // Tag name:
    | keyof JSX.IntrinsicElements;
}>;

const MarkdownComponents: Components = {
  h1({ children }) {
    return <h1 className='text-4xl font-bold tracking-tight '>{children}</h1>;
  },
  h2({ children }) {
    return <h2 className='text-3xl font-bold tracking-tight '>{children}</h2>;
  },
  h3({ children }) {
    return <h3 className=' text-2xl font-bold tracking-tight '>{children}</h3>;
  },
  h4({ children }) {
    return <h4 className='text-xl font-bold tracking-tight '>{children}</h4>;
  },
  h5({ children }) {
    return <h5 className='text-lg font-bold tracking-tight '>{children}</h5>;
  },

  h6({ children }) {
    return <h6 className='text-base font-bold tracking-tight '>{children}</h6>;
  },
  p({ children }) {
    return <p className='mb-2 last:mb-0 leading-loose'>{children}</p>;
  },
  code({ node, inline, className, children, ...props }: any) {
    if (typeof children === "string") {
      if (children.startsWith("▍")) {
        return <span className='mt-1 cursor-default animate-pulse'>▍</span>;
      }

      children = children.replace("`▍`", "▍");
    }

    const match = /language-(\w+)/.exec(className || "");

    if (inline) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }

    return (
      (<div className='py-3'>
        <CodeBlock
          language={(match && match[1]) || ""}
          code={String(children).replace(/\n$/, "")}
          {...props}
        />
      </div>)
    );
  },
  ul({ children }) {
    return <ul className='mb-3 list-disc'>{children}</ul>;
  },
  ol({ children }) {
    return <ol className='mb-3 list-disc'>{children}</ol>;
  },
  li({ children }) {
    return <li className='mb-2 last:mb-0'>{children}</li>;
  },
  link({ children, href }) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-500 hover:underline'>
        {children}
      </a>
    );
  },
  table({ children }) {
    return (
      <Table
        stickyHeader
        highlightOnHover
        withTableBorder
        withColumnBorders
        verticalSpacing={"md"}>
        {children}
      </Table>
    );
  },
  td({ children }) {
    return <Table.Td>{children}</Table.Td>;
  },
  th({ children }) {
    return <Table.Th align='center'>{children}</Table.Th>;
  },
  tr({ children }) {
    return <Table.Tr>{children}</Table.Tr>;
  },
  thead({ children }) {
    return <thead className='bg-slate-200 dark:bg-black'>{children}</thead>;
  },
  tbody({ children }) {
    return <Table.Tbody>{children}</Table.Tbody>;
  },
};

export default MarkdownComponents;
