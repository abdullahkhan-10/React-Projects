import {Element, Link as LinkScroll} from "react-scroll"

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 border-2 border-amber-400">
        {/* left side  */}
        <Element name="hero">
            <div className="container border border-green-600 ">
                <div className="relative z-2 max-w-512 max-lg:max-w-386 border border-red-700">
                    <div className="caption small-2 uppercase text-p3 ">
                        Video Editing
                    </div>

                    <h1 className="mb-6 h1 max-lg:h2 text-p4 uppercase max-lg:mb-7 max-md:mb-4 max-md:text-5xl max-md:leading-12 ">
                        Amazingly Simple
                    </h1>

                    <p className="max-w-440 mb-14 body-1 max-md:mb-10">We design Xora AI Video Editor to be an easy to use, quick to learn, and surprisingly powerfull</p>

                    <LinkScroll to="features" offset={-100} spy smooth>Text</LinkScroll>
                </div>
            </div>
        </Element>
        <div>right</div>
    </section>
  )
}

export default Hero