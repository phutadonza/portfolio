// import content
import { useEffect } from 'react'
import { content } from '../Content'
import resumePDF from '../assets/pdf/Resume_p.pdf'
import transcPDF from '../assets/pdf/Transcript.pdf'
import abmPDF from '../assets/pdf/About-me.pdf'

const Hero = () => {
  const { hero } = content

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="500"
          className="absolute h-full md:w-2/12 w-10/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[50%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{' '}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-center p-3">
            <button className="btn" onClick={() => window.open(resumePDF)}>
              {hero.btnText}
            </button>
          </div>
          <div className="flex justify-center">
            <button className="btn" onClick={() => window.open(transcPDF)}>
              {hero.btnText2}
            </button>
          </div>
          <div className="flex justify-center p-3">
            <button className="btn" onClick={() => window.open(abmPDF)}>
              {hero.btnText3}
            </button>
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96 relative rounded-full overflow-hidden border-4 border-gray-50">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full w-full object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
