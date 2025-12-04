import { Wrapper } from "@/components/Wrapper";
import components from "@/data/components";

export function ComponentPage({ id }) {
  const component = components.find((item) => item.id === id);
  console.log("Component found:", component);

  if (!component) {
    return (
      <div className="container mx-auto text-center mt-20 text-gray-800">
        <h1 className="text-2xl font-bold">Component Not Found</h1>
        <p className="mt-2">No UI experiment exists with the ID: {id}</p>
      </div>
    );
  }

  const RenderComponent = component.render; // proper dynamic component

  return (
    <Wrapper component={component}>
      {RenderComponent ? (
        <RenderComponent />
      ) : (
        <p className="text-gray-300">
          No preview is available for this component.
        </p>
      )}
    </Wrapper>
  );
}
