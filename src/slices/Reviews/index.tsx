"use client";
import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";
import { Masonry } from "react-masonry/dist";

/**
 * Props for `Reviews`.
 */
export type ReviewsProps = SliceComponentProps<Content.ReviewsSlice>;

/**
 * Component for "Reviews" Slices.
 */
const Reviews = ({ slice }: ReviewsProps): JSX.Element => {
  return (
    <section
      className="bg-white"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto max-w-screen-2xl px-4 py-8 text-center lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
            Testimonials
          </h2>
          <p className="mb-8 font-light text-gray-500 sm:text-xl lg:mb-16">
            {slice.primary.tagline}
          </p>
        </div>

        <Masonry>
          <div className="grid-sizer" />

          {slice.items.map((item, idx) => (
            <div
              className="grid-item w-full py-1 lg:w-[48%] xl:w-[32%]"
              key={idx}
            >
              <figure className="flex max-w-[98%] flex-col items-center justify-center overflow-hidden border-b border-gray-200 bg-gray-50 p-8 text-center md:p-12 lg:border-r">
                <blockquote className="mx-auto mb-8 max-w-[96%] text-gray-500">
                  <h3 className="max-w-[96%] truncate text-wrap text-lg font-semibold text-gray-900">
                    {item.heading}
                  </h3>
                  <p className="my-4">&ldquo;{item.content}&rdquo;</p>
                </blockquote>
                <figcaption className="flex max-w-[96%] items-center justify-center space-x-3">
                  <PrismicImage
                    className="size-12 rounded-full object-cover"
                    field={item.author_image}
                  />
                  <div className=" space-y-0.5 overflow-hidden text-left font-medium">
                    <div className="truncate">{item.author_name}</div>
                    <div className="truncate text-sm font-light text-gray-500">
                      {item.author_tagline}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Reviews;
