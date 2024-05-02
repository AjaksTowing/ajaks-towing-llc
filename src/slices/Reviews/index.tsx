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
            <div className="grid-item w-full lg:w-[48%] xl:w-[32%]" key={idx}>
              <figure className="flex flex-col items-center justify-center border-b border-gray-200 bg-gray-50 p-8 text-center md:p-12 lg:border-r">
                <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.heading}
                  </h3>
                  <p className="my-4">"{item.content}"</p>
                </blockquote>
                <figcaption className="flex items-center justify-center space-x-3">
                  <PrismicImage field={item.author_image} />
                  <div className="space-y-0.5 text-left font-medium">
                    <div>{item.author_name}</div>
                    <div className="text-sm font-light text-gray-500">
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
