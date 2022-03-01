import { useState } from "react"
import data from "../starter-code/data.json"

export default function Destination() {
  const [planets] = useState(data.destinations)
  const [value, setValue] = useState(0)

  const { name, images, description, distance, travel } = planets[value]

  return (
    <>
      <section className="home destinations">
        <div className="px-5 pt-32 grid grid-cols-1 gap-5 md:grid-cols-2 gap-10 xl:max-w-7xl xl:mx-auto">
          <article className="text-center md:text-left">
            <h2 className="text-white text-3xl font-extralight text-gray-300 uppercase tracking-wider pb-10">
              01
              <span className="ml-5 font-bold">Pick your destination</span>
            </h2>

            <img
              src={images.png}
              alt={name}
              title={name}
              className="block mx-auto"
            />
          </article>

          <article className="pt-20 text-center md:text-left pb-10">
            <ul className="flex items-center justify-center md:justify-start mb-10">
              {planets.map((item, index) => (
                <li key={index} className="mr-5">
                  <button
                    onClick={() => setValue(index)}
                    className={`uppercase font-semibold tracking-wider text-gray-200 pb-2 border-b border-transparent ${
                      index === value && "border-b border-white"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

            <h2 className="text-white font-bold text-4xl lg:text-6xl uppercase tracking-widest mb-5">
              {name}
            </h2>

            <p className="text-white border-b border-gray-400 pb-5">
              {description}
            </p>

            <ul className="flex flex-wrap items-center justify-between pt-5">
              <li className="uppercase text-gray-200 text-xl">
                Avg. Distance<span className="text-4xl block">{distance}</span>
              </li>
              <li className="uppercase text-gray-200 text-xl">
                Est. travel time<span className="text-4xl block">{travel}</span>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  )
}
