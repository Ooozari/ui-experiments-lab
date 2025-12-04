import { Card } from "@/components";
import components from "@/data/components";

export function HomePage() {
  return (
    <main className="container mx-auto min-h-screen bg-gray-50 w-full h-full px-5 md:px-10">
      {/* title */}
      <div className="max-w-2xl mx-auto pt-15 pb-0">
        <h1 className="text-3xl font-[900] mb-4 text-gray-800">
          Trendy UI Components
        </h1>
        <p className="text-gray-600 mb-8 tracking-tight font-medium">
          A space where I build and showcase the latest modern, trending UI
          components and micro‑interaction modules inspired by today's design
          community.
        </p>
      </div>
      {/* card */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(0,320px))] gap-2 h-full place-content-center">
        {components.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            visualSrc={item.visualSrc}
            title={item.title}
            description={item.description}
            type={item.type}
            likes={item.likes}
            views={item.views}
            viewCode={item.viewCode}
            inspiredBy={item.inspiredBy}
          />
        ))}
      </div>
    </main>
  );
}
