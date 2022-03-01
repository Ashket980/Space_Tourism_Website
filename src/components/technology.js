import { useState } from "react"
import data from "../starter-code/data.json"

export default function Technology() {
  const [technology] = useState(data.technology)
  const [value, setValue] = useState(0)

  const { name, images, description } = technology[value]

  return (
    <>
      <section className="home technology">
        <div className="px-5 pt-32 grid grid-cols-1 gap-5 lg:grid-cols-2 gap-10 xl:max-w-7xl xl:mx-auto">
          <article className="pt-5 md:pt-10 xl:pt-32 text-center md:text-left">
            <h2 className="text-white text-3xl font-extralight text-gray-300 uppercase tracking-wider pb-5 md:pb-10">
              03
              <span className="ml-5 font-bold">Space Launch 101</span>
            </h2>

            <div className="md:flex items-center justify-center">
              <article className="md:mr-10 pt-5 md:pt-20">
                <ul
                  className="flex items-center justify-center md:flex-col mb-10"
                  start="1"
                >
                  {technology.map((item, index) => (
                    <li key={index} className="mb-5 mr-5 md:mr-0">
                      <button
                        onClick={() => setValue(index)}
                        className={`bg-transparent border rounded-full w-16 h-16 text-white text-4xl ${
                          index === value && "bg-white text-gray-900"
                        }`}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="text-center md:text-left">
                <h3 className="text-white font-light text-2xl uppercase tracking-widest mb-5 pt-5 md:pt-20">
                  The terminology...
                </h3>

                <h2 className="text-white font-bold text-4xl lg:text-5xl uppercase tracking-widest mb-5">
                  {name}
                </h2>

                <p className="text-white pb-5">{description}</p>
              </article>
            </div>
          </article>

          <article className="pb-10 md:pb-0">
            <img
              src={images.portrait}
              alt={name}
              title={name}
              className="xl:absolute right-0 bottom-20 block mx-auto"
            />
          </article>
        </div>
      </section>
    </>
  )
}
