import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import {
  DialogDemo,
  AlertDialogDemo,
  AlertDemo,
  ToastDemo,
} from "@/components/posts/ui-components-part-1";

const components = {
  Image,
  DialogDemo,
  AlertDialogDemo,
  AlertDemo,
  ToastDemo,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
