import { removeFromCart, updateCart } from "@/store/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

const CartItem = ({ data }) => {
  const p = data.attributes;

  const dispatch = useDispatch();

  const updateCartItem = (e, key) => {
    let payload = {
      key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      id: data.id,
    };
    dispatch(updateCart(payload));
  };

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* IMAGE START */}
      <Link href={`/product/${p.slug}`}>
        <div className="shrink-0 aspect-square w-[50px] md:w-[120px] cursor-pointer">
          <Image
            width={120}
            height={120}
            src={p.thumbnail.data[0].attributes.url}
            alt={p.name}
          />
        </div>
      </Link>
      {/* IMAGE END */}

      <div className="w-full flex flex-col">
        <div className=" flex flex-col md:flex-row justify-between ">
          {/* PRODUCT TITLE */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8] ">
            {p.name}
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="text-sm md:text-md font:medium text-black/[0.5] block md:hidden">
            {p.subtitle}
          </div>

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-xl font-bold text-black/[0.7] mt-2">
            {p.price}$
          </div>
        </div>

        {/* PRODUCT SUBTITLE */}
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          {p.subtitle}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Размер:</div>
              <select
                className="hover:text-black hover:scale-125 duration-200"
                onChange={(e) => updateCartItem(e, "selectedSize")}
                defaultValue={data.selectedSize}
              >
                {p.size.data.map((item, i) => {
                  return (
                    <option
                      key={i}
                      disabled={!item.enabled ? true : false}
                      value={item.size}
                    >
                      {item.size}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Кол-во:</div>
              <select
                className="hover:text-black hover:scale-125 duration-200"
                onChange={(e) => updateCartItem(e, "quantity")}
                defaultValue={data.quantity}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                  return (
                    <option value={q} key={i}>
                      {q}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <RiDeleteBin6Line
            onClick={() => dispatch(removeFromCart({ id: data.id }))}
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px] hover:scale-125 duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
