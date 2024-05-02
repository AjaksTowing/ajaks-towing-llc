import { Content, isFilled } from "@prismicio/client";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `ServicesPreview`.
 */
export type ServicesPreviewProps =
  SliceComponentProps<Content.ServicesPreviewSlice>;

/**
 * Component for "ServicesPreview" Slices.
 */
const ServicesPreview = ({ slice }: ServicesPreviewProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>
        <div className="grid w-full max-w-xl grid-cols-[auto_1fr] gap-4">
          {isFilled.image(slice.primary.icon) && (
            <div className="mx-8 size-11">
              <PrismicImage field={slice.primary.icon} />
            </div>
          )}

          <div>
            {isFilled.keyText(slice.primary.heading) && (
              <h4>{slice.primary.heading}</h4>
            )}

            {isFilled.richText(slice.primary.body) && (
              <PrismicRichText field={slice.primary.body} />
            )}
          </div>
        </div>

        {slice.items.map((item, _) => (
          <div key={_} className="flex flex-col">
            {isFilled.image(item.icon) && (
              <div className="mx-8 size-11">
                <PrismicImage field={item.icon} />
              </div>
            )}

            {isFilled.keyText(item.heading) && <h4>{item.heading}</h4>}

            {isFilled.richText(item.body) && (
              <PrismicRichText field={item.body} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPreview;
