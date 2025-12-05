import { ComponentPage } from "@/views";

export default async function Page({ params }) {
  const { id } = await params;

  return (
    <div className="font-inter">
      <ComponentPage id={id} />;
    </div>
  );
}
