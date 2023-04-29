import { getDiscounterPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ data }) => {
  if (!data || !data.attributes) {
    return null;
  }

  const { attributes: p, id } = data;
  return (
    <Link
      href={`/product/${p.slug}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer rounded-lg"
    >
      <Image
        key={id}
        width={500}
        height={500}
        src={p.thumbnail.data[0].attributes.url}
        alt={p.name}
      />

      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{p.name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">{p.price}$</p>

          {p.original_price && p.original_price > p.price && (
            <>
              <p className="text-base font-medium line-through">
                {p.original_price}$
              </p>
              <p className="ml-auto text-base font-medium text-red-500">
                {getDiscounterPricePercentage(p.original_price, p.price)}%
                Скидка
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
