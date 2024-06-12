import React from "react";
import "./Card.css";
import Image from "next/image";
import { FaCompressArrowsAlt } from "react-icons/fa";

export default function Card() {
  return (
    <div className="col-12 text-center align-self-center py-5">
      <input
        className="pricing"
        type="checkbox"
        id="pricing"
        name="pricing"
        title="Toggle pricing"
      />
      <label htmlFor="pricing">
        <span className="relative mb-[50px]  z-10 flex items-center justify-center py-0 px-0 md:py-2 text-white md:px-8 border-solid border-2 border-white hover:border-mainBlue rounded-full backdrop-blur-sm bg-mainBlue/30 hover:text-mainBlue focus:text-mainBlue active:text-mainBlue transition duration-300 ease-out cursor-pointer max-w-[170px] m-auto">
          Check here
        </span>
      </label>
      <div className="card-3d-wrap mx-auto">
        <div className="card-3d-wrapper">
          <div className="card-front">
            <div className="pricing-wrap">
              <h4 className="mb-5 text-dark">Motor boating</h4>
              <h2 className="mb-2">
                <sup>$</sup>80 / 4<sup>hrs</sup>
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
                  src="/images/boat/motor.png"
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
                  width={287}
                  height={209}
                  className="rounded-bl-[6px] rounded-br-[6px]"
                />
              </div>
            </div>
          </div>
          <div className="card-back">
            <div className="pricing-wrap">
              <h4 className="mb-5">Yachting</h4>
              <h2 className="mb-2">
                <sup>$</sup>290 / 8<sup>hrs</sup>
              </h2>
              <p className="mb-4">per person</p>

              <div className="img-wrap img-8">
                <Image
                  src="/images/water/sea2.webp"
                  alt="grass"
                  width={345}
                  height={140}
                />
              </div>
              <div className="img-wrap img-4">
                <Image
                  src="/images/boat/yacht.png"
                  alt="camp"
                  width={350}
                  height={303}
                />
              </div>
              <div className="img-wrap img-5">
                <Image
                  src="/images/water/whirlpoolMain1.webp"
                  alt="Ivy"
                  width={266}
                  height={277}
                />
              </div>
              <div className="img-wrap img-7">
                <Image
                  src="https://assets.codepen.io/1462889/water.png"
                  alt="water"
                  width={224}
                  height={222}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
