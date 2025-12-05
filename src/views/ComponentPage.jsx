"use client";

import { Wrapper,SliderButton,SlickHoverEffect } from "@/components";
import components from "@/data/components";

// import more components here if needed
const componentMap = {
  SliderButton: SliderButton,
  SlickHoverEffect: SlickHoverEffect,
  // Other components: "OtherComponent": OtherComponent
};

export function ComponentPage({ id }) {
  const component = components.find((item) => item.id === id);

  if (!component) {
    return (
      <div className="container mx-auto text-center mt-20 text-gray-800">
        <h1 className="text-2xl font-bold">Component Not Found</h1>
        <p className="mt-2">No UI experiment exists with the ID: {id}</p>
      </div>
    );
  }

  const RenderComponent = componentMap[component.componentId];

  return (
    <Wrapper component={component}>
      {RenderComponent ? (
        <RenderComponent />
      ) : (
        <p className="text-gray-300">No preview is available for this component.</p>
      )}
    </Wrapper>
  );
}
