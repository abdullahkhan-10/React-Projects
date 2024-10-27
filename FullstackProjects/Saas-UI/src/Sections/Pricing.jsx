import clsx from "clsx"
import { useState } from "react"
import { Element } from "react-scroll"
import { plans } from "../../constants"

const Pricing = () => {

    const [monthly, setMonthly] = useState(false

    )
  return (
    <section>
        <Element name="pricing">
            <div className="container">
                {/* Top portion  */}
                <div className="max-w-960 border-2 border-red-500 ">
                    <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center max-md:mb-11 max-sm:max-w-sm">Flexible Pricing for teams of all sizes</h3>
                    
                    {/* Buttons */}
                    <div className="relative z-4 mx-auto flex w-[375px] border-[3px] border-s4/25 bg-s2/50 rounded-3xl p-2 backdrop-blur-[6px] max-md:w-[310px]">

                        <button
                         onClick={() => setMonthly(true)}
                         className={clsx("pricing-head_btn", monthly && "text-g4")}
                        >
                         Monthly
                        </button>

                        <button
                        className={clsx("pricing-head_btn", !monthly && "text-g4")}
                        onClick={() =>setMonthly(false)}
                        >
                         Annual
                        </button>

                        {/* Animated toggle */}
                        <div className={clsx("g4 rounded-14 before-h-100 pricing-head_btn_before shadow-400 absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden transition-transform duration-500", !monthly && "translate-x-full")}
                        />
                    </div>

                    <div className="pricing-bg">
                        <img 
                         src="/images/bg-outlines.svg"
                         alt="outline"
                         width={960}
                         height={380}
                         className="relative z-2"
                        />

                        <img 
                         src="/images/bg-outlines.fill.png"
                         alt="outline"
                         width={960}
                         height={380}
                         className="absolute inset-0 opacity-5 mix-blend-soft-light"
                        />
                    </div>

                </div>

                {/* Pricing section */}
                <div className="scroll-hide relative z-2 mt-12 flex items-start max-xl:gap-5 max-xl:pt-6 border-2 border-green-600">
                    {
                        plans.map( (plan, index) => (
                            <div 
                             key={plan.id} 
                             className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33% + 2px)]"
                            >
                                {
                                    index === 1 && (
                                        <div/>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </Element>
    </section>
  )
}

export default Pricing