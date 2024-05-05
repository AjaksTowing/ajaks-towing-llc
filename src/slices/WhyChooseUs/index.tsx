"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Content, asLink, asText } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
// #DD841F, #0C0C0D, #FFFFFF, #111827
/**
 * Props for `WhyChooseUs`.
 */
export type WhyChooseUsProps = SliceComponentProps<Content.WhyChooseUsSlice>;

/**
 * Component for "WhyChooseUs" Slices.
 */
const WhyChooseUs = ({ slice }: WhyChooseUsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section
        className={cn(`h-full bg-cover bg-no-repeat`)}
        style={{
          minHeight: slice.primary.background_image.dimensions?.height,
          backgroundImage: `url("${slice.primary.background_image.url || undefined}")`,
        }}
      >
        <div
          className="h-full bg-blue-950/70"
          style={{
            minHeight: slice.primary.background_image.dimensions?.height,
          }}
        >
          <div className="rc-container flex flex-col gap-10 duration-300 xl:flex-row xl:items-center xl:justify-between">
            {/* CTA------------------------------------------------------------starts here */}
            <div className="flex flex-1 flex-col gap-5">
              <h6 className="font-bold text-[#DD841F]">WHY CHOOSE US</h6>
              <h2 className="text-5xl font-bold text-white">
                {asText(slice.primary.heading)}
              </h2>
              <p className="text-white">{asText(slice.primary.tagline)}</p>
              <Link href={asLink(slice.primary.button_navigates_to) || "#"}>
                <Button className="w-fit rounded-none">
                  {slice.primary.button_label}
                </Button>
              </Link>
            </div>
            {/* CTA------------------------------------------------------------ends here */}

            {/* Cards------------------------------------------------------------starts here */}
            <div className="grid grid-cols-2 gap-8">
              {slice.items.map((card, idx) => (
                <div
                  key={idx}
                  className="group flex w-full flex-col items-center gap-2 bg-[#111827] px-4 py-10 duration-300 hover:bg-[#DD841F] xl:max-w-xs"
                >
                  <div className="grid h-14 w-14 place-items-center overflow-hidden bg-primary duration-300 group-hover:bg-white">
                    <PrismicImage
                      field={card.icon}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-[#DD841F] duration-300 group-hover:text-white">
                    {asText(card.heading)}
                  </h4>
                  <p className="text-center text-white">
                    {asText(card.tagline)}
                  </p>
                </div>
              ))}
            </div>
            {/* Cards------------------------------------------------------------ends here */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhyChooseUs;
