"use client"

import Image from "next/image"

const ExploreBtn = () => {
  return (
    <div>
      <button
        type="button"
        id="explore-btn"
        className="mt-7 mx-auto"
        onClick={() => {
          console.log("Click")
          window.location.hash = "events"
        }}
      >
        Explore event
        <Image
          src="/icons/arrow-down.svg"
          alt="arrow-icon"
          width={24}
          height={24}
        />
      </button>
    </div>
  )
}

export default ExploreBtn
