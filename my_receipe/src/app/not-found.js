import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>This Page is not exits</h1>
      <Link href={"/"}>Go To Main Menu</Link>
    </div>
  );
}
