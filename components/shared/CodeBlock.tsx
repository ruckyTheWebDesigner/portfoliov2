import { CodeHighlight } from "@mantine/code-highlight";

import "@mantine/code-highlight/styles.css";
import { memo } from "react";

interface Props {
  readonly language: string;
  readonly code: string;
}

function CodeBlock({ language, code }: Props) {
  return (
    <CodeHighlight
      className='w-72 sm:w-full'
      code={code}
      withCopyButton
      copyLabel='Copy button code'
      copiedLabel='Copied!'
    />
  );
}

export default memo(CodeBlock);
