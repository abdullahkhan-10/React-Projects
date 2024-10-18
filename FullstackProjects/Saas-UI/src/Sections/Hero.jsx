import {Element, Link as LinkScroll} from "react-scroll"
import Button from "../components/Button"

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 border-2 border-amber-400">

        <Element name="hero">
                  {/* left side  */}
            <div className="container ">
                <div className="relative z-2 max-w-512 max-lg:max-w-386 ">
                    <div className="caption small-2 uppercase text-p3 ">
                        Video Editing
                    </div>

                    <h1 className="mb-6 h1 max-lg:h2 text-p4 uppercase max-lg:mb-7 max-md:mb-4 max-md:text-5xl max-md:leading-12 ">
                        Amazingly Simple
                    </h1>

                    <p className="max-w-440 mb-14 body-1 max-md:mb-10">We design Xora AI Video Editor to be an easy to use, quick to learn, and surprisingly powerfull</p>

                    <LinkScroll to="features" offset={-100} spy smooth>
                      <Button icon="/images/zap.svg">Try it Now</Button>
                    </LinkScroll>
                </div>
            </div>

            {/* right side  */}
           <div>right</div>
        </Element>
    </section>
  )
}

export default Hero