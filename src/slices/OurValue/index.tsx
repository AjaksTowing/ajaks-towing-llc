"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Content, asText } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `OurValue`.
 */
export type OurValueProps = SliceComponentProps<Content.OurValueSlice>;

/**
 * Component for "OurValue" Slices.
 */
const OurValue = ({ slice }: OurValueProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mb-12"
    >
      <section>
        {/* Title------------------------------------------------------------starts here */}
        <div className="bg-[url('https://kit.creativemox.com/stockytow/wp-content/uploads/sites/6/2023/10/white-arrow-on-asphalt-road-traffic-sign-e1697705634143.jpg')] bg-cover bg-no-repeat">
          <div className="bg-blue-950/70">
            <div className="rc-container flex w-full justify-center">
              <div className="mb-10 flex max-w-xl flex-col items-center justify-center gap-4 text-center">
                <h6 className="text-primary font-bold">OUR VALUE</h6>
                <h3 className="text-4xl font-bold text-white">
                  {asText(slice.primary.heading)}
                </h3>
                <p className="text-white">{asText(slice.primary.tagline)}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Title------------------------------------------------------------ends here */}

        <div className="rc-container -mt-20 !py-0">
          <div className="bg-card flex flex-col items-center text-white/90 duration-300 md:flex-row">
            {/* Accordion------------------------------------------------------------starts here */}
            <div className="flex flex-col gap-4 p-10">
              <h4 className="text-3xl">
                {asText(slice.primary.featured_heading)}
              </h4>
              <p className="text-white/70">
                {asText(slice.primary.featured_tagline)}
              </p>

              <Accordion type="single" collapsible>
                {slice.items.map((value, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-primary">
                      {value.heading}
                    </AccordionTrigger>
                    <AccordionContent>{asText(value.content)}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            {/* Accordion------------------------------------------------------------ends here */}

            {/* Image------------------------------------------------------------starts here */}
            <div className="w-full duration-300 md:w-1/2">
              <PrismicImage field={slice.primary.featured_image} />
            </div>
            {/* Image------------------------------------------------------------ends here */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default OurValue;
