"use client";

import dynamic from "next/dynamic";
import ToolSkeleton from "./ToolSkeleton";

const ToolClient = dynamic(() => import("./ToolClient"), {
  ssr: false,
  loading: () => <ToolSkeleton />,
});

interface Props {
  slug: string;
}

export default function ToolClientWrapper({ slug }: Props) {
  return <ToolClient slug={slug} />;
}