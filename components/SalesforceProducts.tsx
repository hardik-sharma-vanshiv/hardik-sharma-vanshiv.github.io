import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { forwardRef } from 'react';

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode; name: string; textColor: any }
>(({ className, children, name, textColor }, ref) => {
    return (
        <div className='flex flex-col items-center justify-center z-20'>
            <div
                ref={ref}
                className={cn(
                    "z-10 relative size-12 sm:size-16 lg:size-20 overflow-hidden rounded-full border-2 bg-white shadow-[0_0_20px_-12px_rgba(0,0,0,1)]",
                    className,
                )}
            >
                <div className="absolute inset-2 sm:inset-3">
                    <div className="relative size-full">{children}</div>
                </div>
            </div>
            <div className={`${textColor} text-white px-1.5 sm:px-2 rounded-full mt-1.5 sm:mt-2 font-extrabold uppercase text-[10px] sm:text-xs`}>
                {name}
            </div>
        </div>
    );
});

Circle.displayName = "Circle";

const SalesforceProducts = forwardRef<any>(({ imgUrl, imgSize, bgColor, borderColor, textColor, tooltipTextColor, side, serviceName, initialX, initialY, finalX, finalY }: any, ref) => {
    return (
        <>

            <Circle
                ref={ref}
                name={serviceName}
                textColor={textColor}
                className={cn(bgColor, borderColor, imgSize)}
            >
                {imgUrl && (
                    <Image
                        src={imgUrl}
                        alt={serviceName ?? "Salesforce"}
                        fill
                        className="object-contain mix-blend-multiply"
                    />
                )}
            </Circle>
        </>
    );
});

SalesforceProducts.displayName = "SalesforceProducts";

export default SalesforceProducts;
