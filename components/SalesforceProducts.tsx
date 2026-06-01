import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { forwardRef } from 'react';

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode; name: string; textColor: any }
>(({ className, children, name, textColor }, ref) => {

    // console.log();

    return (
        <div className='flex flex-col items-center justify-center z-20'>
            <div
                ref={ref}
                className={cn(
                    "z-10 relative flex size-12 sm:size-16 lg:size-20 opacity-1 uppercase items-center justify-center rounded-full border-2 bg-white p-2 sm:p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,1)]",
                    className,
                )}
            >
                {children}
            </div>
            <div className={`${textColor} text-white px-1.5 sm:px-2 rounded-full mt-1.5 sm:mt-2 font-extrabold uppercase text-[10px] sm:text-xs`}>
                {name}
            </div>
        </div>
    );
});

Circle.displayName = "Circle";

const SalesforceProducts = forwardRef<any>(({ imgUrl, imgSize, bgColor, borderColor, textColor, tooltipTextColor, side, serviceName, initialX, initialY, finalX, finalY }: any, ref) => {

    // console.log("initialX", serviceName, initialX);

    return (
        <>
            {/* <motion.div
                initial={{
                    x: initialX,
                    y: initialY
                }}
                animate={{
                    x: finalX,
                    y: finalY
                }}
                viewport={{ once: false }}
            > */}
            <Circle ref={ref} name={serviceName} textColor={textColor} className={`${bgColor} ${borderColor} ${imgSize}`}>
                <Image
                    width={800}
                    height={800}
                    alt="Card background"
                    className="mix-blend-multiply"
                    src={imgUrl}
                />{" "}
            </Circle>
            {/* </motion.div > */}
            {/* <TooltipProvider>
                <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                        <Circle ref={ref} name={serviceName} textColor={textColor} className={`${bgColor} ${borderColor} ${imgSize} hover:transform `}>
                            <Image
                                width={800}
                                height={800}
                                alt="Card background"
                                className="mix-blend-multiply"
                                src={imgUrl}
                            />{" "}
                        </Circle>
                    </TooltipTrigger>
                    <TooltipContent side={side} className={`${bgColor} border-2 ${borderColor} backdrop-filter backdrop-blur-sm bg-opacity-50`}>
                        <h2 className={`${tooltipTextColor} font-extrabold text-sm uppercase`}>Service Cloud</h2>
                        <p className="max-w-60 line-clamp-4 text-xs text-gray-500">
                            Service Cloud enables users to automate service processes, streamline workflows and find key articles, topics and experts to support customer service agents.
                        </p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider> */}
        </>
    );
});

SalesforceProducts.displayName = "SalesforceProducts";

export default SalesforceProducts;
