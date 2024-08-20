import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full bg-black min-h-screen">
      <h1>Loading</h1>
      <Skeleton />
    </div>
  );
}
