"use client";

import Image from "next/image";
import Link from "next/link";

export interface Brand {
  id: string;
  img?: string;
  name?: string;
  website?: string;
}

interface BrandsProps {
  brands: readonly Brand[] | Brand[];
  title?: string;
}

export function Brands({ brands, title }: BrandsProps) {
  // Filter out brands without images
  const validBrands = brands.filter(brand => brand.img);

  // Calculate columns for 2-row grid
  const columns = Math.ceil(validBrands.length / 2);

  return (
    <section className="w-full py-20 px-4" style={{ backgroundColor: '#0C0F12' }}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-4xl md:text-5xl font-antonio font-bold text-center mb-12">
            {title}
          </h2>
        )}
        
        <div 
          className="grid gap-10 items-center justify-items-center"
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: 'repeat(2, 1fr)',
          }}
        >
          {validBrands.map((brand) => {
            const imageElement = (
              <div className="relative w-full h-24">
                <Image
                  src={brand.img!}
                  alt={brand.name || brand.id}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
            );

            // Wrap in link if website exists
            if (brand.website) {
              return (
                <Link
                  key={brand.id}
                  href={brand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full max-w-[250px]"
                >
                  {imageElement}
                </Link>
              );
            }

            return (
              <div key={brand.id} className="w-full max-w-[250px]">
                {imageElement}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

