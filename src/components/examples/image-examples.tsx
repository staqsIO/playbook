import Image from "next/image";

/**
 * Examples of how to use images in your Next.js app
 * These are just examples - remove or modify as needed
 */

export function ImageExamples() {
  return (
    <div className="space-y-8 p-8">
      {/* Example 1: Basic Image */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Basic Image</h3>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={200}
          height={100}
          priority // Use for above-the-fold images
        />
      </div>

      {/* Example 2: Responsive Image */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Responsive Image</h3>
        <div className="relative aspect-video w-full max-w-2xl">
          <Image
            src="/images/hero.jpg"
            alt="Hero image"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Example 3: Avatar/Profile Image */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Avatar</h3>
        <Image
          src="/images/avatar.jpg"
          alt="User avatar"
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>

      {/* Example 4: Background Image */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Background Image</h3>
        <div
          className="relative h-64 rounded-lg bg-cover bg-center"
          style={{ backgroundImage: "url('/images/background.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
            <p className="text-white text-xl font-bold">Overlay Text</p>
          </div>
        </div>
      </div>

      {/* Example 5: Icon */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">SVG Icon</h3>
        <img src="/icons/check.svg" alt="" className="w-8 h-8" />
      </div>

      {/* Example 6: Grid of Images */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Image Grid</h3>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative aspect-square">
              <Image
                src={`/images/gallery-${i}.jpg`}
                alt={`Gallery image ${i}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Example 7: Loading State */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">With Loading State</h3>
        <Image
          src="/images/large-image.jpg"
          alt="Large image"
          width={800}
          height={600}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwABmQAAP/2Q=="
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

