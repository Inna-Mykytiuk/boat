import React from "react";
import "./Card.css";
import Image from "next/image";
import { FaCompressArrowsAlt } from "react-icons/fa";

export default function Card() {
  return (
    <div className="col-12 text-center align-self-center py-5">
      <div className="text-center py-5 py-md-0">
        <input
          className="pricing"
          type="checkbox"
          id="pricing"
          name="pricing"
          title="Toggle pricing"
        />
        <label htmlFor="pricing">
          <span className="relative top-[40px] z-10 flex items-center justify-center py-0 px-0 md:py-2 text-white md:px-8 border-solid border-2 border-white hover:border-mainBlue rounded-full backdrop-blur-sm bg-mainBlue/30 hover:text-mainBlue focus:text-mainBlue active:text-mainBlue transition duration-300 ease-out cursor-pointer max-w-[170px] m-auto">
            Check here
          </span>
        </label>
        <div className="card-3d-wrap mx-auto">
          <div className="card-3d-wrapper">
            <div className="card-front">
              <div className="pricing-wrap">
                <h4 className="mb-5">Kayaking</h4>
                <h2 className="mb-2">
                  <sup>$</sup>39 / 4<sup>hrs</sup>
                </h2>
                <p className="mb-4">per person</p>

                <div className="img-wrap img-2">
                  <Image
                    src="/images/water/sea1.webp"
                    alt="sea"
                    width={345}
                    height={167}
                  />
                </div>
                <div className="img-wrap img-1">
                  <Image
                    src="https://assets.codepen.io/1462889/kayak.png"
                    alt="kayak"
                    width={452}
                    height={300}
                  />
                </div>
                <div className="img-wrap img-3">
                  <Image
                    src="https://assets.codepen.io/1462889/water.png"
                    alt="water"
                    width={224}
                    height={222}
                  />
                </div>
                <div className="img-wrap img-6">
                  <Image
                    src="/images/elements/wave1.webp"
                    alt="Stone"
                    width={280}
                    height={130}
                  />
                </div>
              </div>
            </div>
            <div className="card-back">
              <div className="pricing-wrap">
                <h4 className="mb-5">Camping</h4>
                <h2 className="mb-2">
                  <sup>$</sup>29 / 8<sup>hrs</sup>
                </h2>
                <p className="mb-4">per person</p>

                <div className="img-wrap img-2">
                  <Image
                    src="https://assets.codepen.io/1462889/grass.png"
                    alt="grass"
                    width={345}
                    height={140}
                  />
                </div>
                <div className="img-wrap img-4">
                  <Image
                    src="https://assets.codepen.io/1462889/camp.png"
                    alt="camp"
                    width={294}
                    height={303}
                  />
                </div>
                <div className="img-wrap img-5">
                  <Image
                    src="https://assets.codepen.io/1462889/Ivy.png"
                    alt="Ivy"
                    width={337}
                    height={373}
                  />
                </div>
                <div className="img-wrap img-7">
                  <Image
                    src="https://assets.codepen.io/1462889/IvyRock.png"
                    alt="IvyRock"
                    width={119}
                    height={108}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
