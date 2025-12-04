import { ComponentPage } from "@/views";

export default async function Page({ params }) {
  const { id } = await params;

  return <ComponentPage id={id} />;  // <-- return is required
}
