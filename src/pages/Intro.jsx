import { useState } from "react"
import { BsTwitter } from "react-icons/bs"
export function Intro({ user }) {
  let Intro = "Intro.jsx"

  return (
    <section className={`${user && "hidden"}  `}>
      <h3>Life is !a problme to solve</h3>
      <br />
      <div className="heart"></div>
      <div className={`mx-auto`} style={{ width: "50%" }}>
        As of now, I only inform this site to those who have <br />
        visited my physical store and our esteemed VIP customers.
        <br />
        Typically, products are sold on a first-come, first-served basis.
        <br />
        However, I want to provide a special privilege to our customers
        <br /> who are part of this exclusive group. For you, I will personally
        curate <br />
        and send the most recent and fresh products at a special price. <br />
        Please understand that I cannot offer this service to a larger <br />{" "}
        customers due to the fact that I run the store independently.
        <br />
        As a result of managing the store single-handedly,
        <br /> I regret to inform you that I won't be available <br />
        to answer phone calls. However,
        <br /> I encourage you to reach out
        <br /> to me via Twitter <br />
        <span
          className={`mt-0 ml-0 mr-auto flex justify-center cursor-pointer`}
          onClick={() =>
            window.location.replace("https://twitter.com/wizbox051")
          }
        >
          <BsTwitter />
        </span>
        <br />
        I'll do my best to respond to your inquiryASAP
        {/*<br /> thank you!*/}
        <br />
        need further information? scroll down
        <br />
        <h3 className={`text-[#c10002] pb-3`}>↓ wizbox.shop ↓</h3>
        <h3 className={`text-[#c10002] pb-3 text-[1.4em]`}>open: 7pm to 7am</h3>
        ⌣⌣
      </div>
    </section>
  )
}
