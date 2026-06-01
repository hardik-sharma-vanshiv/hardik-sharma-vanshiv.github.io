"use client";
import SalesforceProducts from "@/components/SalesforceProducts";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import Ripple from "@/components/ui/ripple";
import { useEffect, useRef } from "react";
import { salesforceServicesData } from "@/data/salesforceServiceData";

export function SalesforceService() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);
    const div8Ref = useRef<HTMLDivElement>(null);
    const div9Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // console.log('div5Ref current:', div5Ref.current);
        // console.log('div1Ref current:', div1Ref.current);
    }, []);

    return (
        <div
            className="relative flex h-full w-full max-w-full items-center justify-center px-2 sm:px-4"
            ref={containerRef}
        >
            <div className="flex size-full w-full flex-col max-w-full min-h-[280px] sm:min-h-[320px] md:min-h-[360px] items-stretch justify-center gap-6 sm:gap-8 md:gap-10">
                <div className="flex flex-row items-center justify-around gap-2 sm:gap-4">
                    {/* <motion.div     
                        initial={{
                            x: 225,
                            y: 150,
                            opacity: 1
                        }}
                        whileInView={{
                            x: 60,
                            y: 0
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        viewport={{ once: false }}
                    > */}
                    <SalesforceProducts ref={div1Ref} {...salesforceServicesData.salesCloud} />
                    {/* </motion.div>
                    <motion.div ref={div2Ref}
                        initial={{
                            y: 150
                        }}
                        whileInView={{
                            y: -60
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        viewport={{ once: false }}
                    > */}
                    {/* <SalesforceProducts ref={div2Ref} {...salesforceServicesData.salesCloud} /> */}
                    {/* </motion.div>
                    <motion.div ref={div3Ref}
                        initial={{
                            x: -225,
                            y: 150
                        }}
                        whileInView={{
                            x: -60,
                            y: 0
                        }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                    > */}
                    <SalesforceProducts ref={div3Ref} {...salesforceServicesData.commerceCloud} />
                    {/* </motion.div> */}
                </div>
                <div className="flex flex-row items-center justify-between gap-2 sm:gap-4 px-2 sm:px-6 md:px-10">
                    {/* <motion.div ref={div4Ref}
                        initial={{
                            x: 225
                        }}
                        whileInView={{
                            x: 0
                        }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                    > */}
                    <SalesforceProducts ref={div4Ref} {...salesforceServicesData.marketingCloud} />
                    {/* </motion.div> */}
                    <SalesforceProducts ref={div5Ref} {...salesforceServicesData.salesforce} />
                    {/* <motion.div ref={div6Ref}
                        initial={{
                            x: -225
                        }}
                        whileInView={{
                            x: 0
                        }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                    > */}
                    <SalesforceProducts ref={div6Ref} {...salesforceServicesData.dataCloud} />
                    {/* </motion.div> */}
                </div>
                <div className="flex flex-row items-center justify-around gap-2 sm:gap-4">
                    {/* <motion.div ref={div7Ref}
                        initial={{
                            x: 225,
                            y: -150
                        }}
                        whileInView={{
                            x: 60,
                            y: 0
                        }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                    > */}
                    <SalesforceProducts ref={div7Ref} {...salesforceServicesData.serviceCloud} />
                    {/* </motion.div>
                    <motion.div ref={div8Ref}
                        initial={{
                            y: -150
                        }}
                        whileInView={{
                            y: 60
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        viewport={{ once: false }}
                    > */}
                    {/* <SalesforceProducts ref={div8Ref} {...salesforceServicesData.salesCloud} /> */}
                    {/* </motion.div>
                    <motion.div ref={div9Ref}
                        initial={{
                            x: -225,
                            y: -150
                        }}
                        whileInView={{
                            x: -60,
                            y: 0
                        }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                    > */}
                    <SalesforceProducts ref={div9Ref} {...salesforceServicesData.muleSoft} />
                    {/* </motion.div> */}
                </div>
            </div>
            <Ripple />

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div1Ref}
                endYOffset={-10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div2Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div3Ref}
                endYOffset={10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div6Ref}
                endYOffset={-10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div7Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div8Ref}
                endYOffset={10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div9Ref}
                endYOffset={10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div4Ref}
            />
        </div >
    );
}


